#!/usr/bin/env python3
"""Synthesize the Collective Horizon ambient loop.

A ~90 second seamless loop: a slow warm pad built from detuned sines over a
quiet chord cycle, sparse piano-like notes, a simple feedback-delay reverb,
and a loop crossfade so the end folds back into the beginning without a seam.
Output: assets/audio/ambient.wav (encode to m4a and mp3 with ffmpeg after).
No copyrighted material: every sample is computed here.
"""
import numpy as np
import wave
import os

SR = 44100
DUR = 96.0
XFADE = 6.0
N = int(SR * DUR)
t = np.arange(N) / SR

rng = np.random.default_rng(7)

def midi_hz(m):
    return 440.0 * 2 ** ((m - 69) / 12)

# Chord cycle in D minor with a warm patrimonial color, 4 chords x 24s.
# Voicings kept low and open: root, fifth, ninth or third above.
CHORDS = [
    [38, 45, 50, 57],   # D2  A2  D3  A3
    [34, 41, 48, 53],   # Bb1 F2  C3  F3
    [36, 43, 50, 55],   # C2  G2  D3  G3
    [33, 40, 47, 52],   # A1  E2  B2  E3
]
SEG = DUR / len(CHORDS)

def pad_voice(freq, phase):
    """One pad voice: three detuned sines with slow independent breathing."""
    out = np.zeros(N)
    for det, amp in ((0.0, 1.0), (0.15, 0.55), (-0.12, 0.55)):
        lfo = 0.72 + 0.28 * np.sin(2 * np.pi * (0.018 + abs(det) * 0.02) * t + phase + det * 40)
        out += amp * lfo * np.sin(2 * np.pi * (freq + det) * t + phase)
    return out

pad = np.zeros(N)
for ci, chord in enumerate(CHORDS):
    seg_start = ci * SEG
    env = np.zeros(N)
    a = int(seg_start * SR)
    b = int(min(DUR, seg_start + SEG) * SR)
    ramp = int(7.0 * SR)
    up_end = min(b, a + ramp)
    env[a:up_end] = np.linspace(0, 1, up_end - a)
    env[up_end:b] = 1.0
    down_end = min(N, b + ramp)
    env[b:down_end] = np.linspace(1, 0, down_end - b)
    if ci == 0:
        # First chord also fades in from silence handled by the loop crossfade.
        pass
    voice = np.zeros(N)
    for ni, m in enumerate(chord):
        voice += pad_voice(midi_hz(m), phase=ci * 1.7 + ni * 2.3) * (0.9 if ni < 2 else 0.6)
    pad += env * voice

pad /= np.max(np.abs(pad)) + 1e-9

# Sparse piano-like notes: struck sines with harmonics and exponential decay.
def piano_note(start, m, amp):
    f = midi_hz(m)
    i0 = int(start * SR)
    dur_n = int(9.0 * SR)
    i1 = min(N, i0 + dur_n)
    n = i1 - i0
    if n <= 0:
        return
    tt = np.arange(n) / SR
    env = np.exp(-tt / 2.6) * (1 - np.exp(-tt / 0.012))
    tone = (np.sin(2 * np.pi * f * tt) +
            0.42 * np.sin(2 * np.pi * 2 * f * tt) * np.exp(-tt / 1.1) +
            0.18 * np.sin(2 * np.pi * 3 * f * tt) * np.exp(-tt / 0.6) +
            0.08 * np.sin(2 * np.pi * 4.01 * f * tt) * np.exp(-tt / 0.35))
    piano[i0:i1] += amp * env * tone

piano = np.zeros(N)
# Hand-placed sparse motif, one register above the pad, avoiding the loop seam.
NOTES = [
    (8.0, 62, 0.30), (14.5, 69, 0.22), (21.0, 65, 0.26),
    (30.5, 60, 0.30), (38.0, 65, 0.20), (44.5, 69, 0.24),
    (54.0, 62, 0.28), (61.5, 67, 0.20),
    (70.0, 64, 0.26), (77.5, 69, 0.18), (83.0, 62, 0.22),
]
for s, m, a in NOTES:
    piano_note(s, m, a)

mix = 0.78 * pad + 0.55 * piano

# Simple reverb: three feedback delays summed, then folded into the dry mix.
def fb_delay(x, ms, fb, wet):
    d = int(SR * ms / 1000)
    y = np.copy(x)
    buf = np.zeros_like(x)
    buf[d:] = x[:-d]
    acc = buf * fb
    for _ in range(4):
        nxt = np.zeros_like(acc)
        nxt[d:] = acc[:-d]
        acc = acc + nxt * fb
    return x + wet * acc

rev = fb_delay(mix, 149, 0.42, 0.35)
rev = fb_delay(rev, 223, 0.35, 0.28)
rev = fb_delay(rev, 311, 0.30, 0.22)

# Gentle low-pass with a one-pole filter for warmth.
alpha = 0.22
lp = np.zeros_like(rev)
acc = 0.0
for i in range(len(rev)):
    acc += alpha * (rev[i] - acc)
    lp[i] = acc
warm = 0.65 * lp + 0.35 * rev

# Stereo: slightly detuned delays left and right.
dl = int(SR * 0.011)
dr = int(SR * 0.017)
left = np.copy(warm)
right = np.copy(warm)
left[dl:] += 0.18 * warm[:-dl]
right[dr:] += 0.18 * warm[:-dr]

# Loop crossfade: blend the final XFADE seconds into the opening so that
# sample 0 continues seamlessly from the last sample.
xn = int(XFADE * SR)
fade = np.linspace(0, 1, xn)
for chan in (left, right):
    head = np.copy(chan[:xn])
    tail = np.copy(chan[-xn:])
    chan[:xn] = head * fade + tail * (1 - fade)
loop_n = N - xn
left = left[:loop_n]
right = right[:loop_n]

stereo = np.stack([left, right], axis=1)
stereo /= np.max(np.abs(stereo)) + 1e-9
stereo *= 0.72
pcm = (stereo * 32767).astype(np.int16)

out_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "assets", "audio")
os.makedirs(out_dir, exist_ok=True)
out = os.path.join(out_dir, "ambient.wav")
with wave.open(out, "wb") as w:
    w.setnchannels(2)
    w.setsampwidth(2)
    w.setframerate(SR)
    w.writeframes(pcm.tobytes())
print("wrote", out, round(loop_n / SR, 2), "seconds")
