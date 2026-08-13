/* Collective Horizon. English lives inline in the HTML and is captured at
   boot, so the fr and es dictionaries below are the only translations.
   House rule: no em dash and no en dash anywhere, in any language. */
(function () {
  "use strict";

  var CH = { LEAD_EMAIL: "davidhazout@gmail.com" };
  var params = new URLSearchParams(location.search);

  /* ---------------- Dictionaries ---------------- */
  var I18N = {
    fr: {
      "_title": "Collective Horizon. Un family office privé pour les projets résidentiels américains.",
      "_desc": "Un family office privé qui s'associe à des investisseurs qualifiés sur des projets de rénovation résidentielle dans des marchés américains à fort rendement.",

      "nav.project": "Le projet",
      "nav.houses": "Les maisons",
      "nav.method": "La méthode",
      "nav.faq": "FAQ",
      "nav.cta": "Demander la présentation investisseurs",
      "nav.cta.short": "Présentation investisseurs",
      "aria.menu": "Ouvrir le menu",
      "aria.close": "Fermer",
      "aria.lang": "Langue",

      "hero.kicker": "Un family office privé, Miami",
      "hero.h1": "Nous achetons des maisons sous leur valeur. Nous les rénovons. Nous revendons ou nous louons.",
      "hero.sub": "Collective Horizon s'associe à des investisseurs qualifiés sur des projets résidentiels dans des marchés américains à fort rendement. Une maison, une société, un dossier clair à la fois.",
      "hero.cta2": "Voir les trois maisons",
      "hero.scroll": "Défiler",

      "project.kicker": "Le projet",
      "project.h2": "Simple à dire, exigeant à faire.",
      "project.p": "La marge se fait à l'achat. Nous n'achetons que lorsque les chiffres tiennent sur le papier, avant le premier coup de marteau. Ensuite deux routes: revendre la maison rénovée, ou la garder et la louer.",
      "step1.t": "Acheter sous la valeur",
      "step1.p": "Maisons hors marché, successions, propriétaires fatigués. Chaque dossier est chiffré avec une grille de 18 lignes de coûts et des ventes comparables, jamais avec de l'enthousiasme.",
      "step2.t": "Rénover au budget",
      "step2.p": "Des artisans locaux licenciés, un descriptif de travaux écrit, des visites de chantier hebdomadaires et des photos. Le budget est un contrat, pas un espoir.",
      "step3.t": "Revendre, ou louer",
      "step3.p": "Les dossiers de revente visent une vente en quelques mois. Les dossiers locatifs sont conservés pour le revenu. Chaque projet écrit sa sortie avant qu'un dollar ne bouge.",

      "trust1.t": "Une maison, une société",
      "trust1.p": "Chaque projet vit dans sa propre LLC dédiée.",
      "trust2.t": "Un compte par opération",
      "trust2.p": "Les fonds des partenaires ne sont jamais mélangés aux nôtres.",
      "trust3.t": "Des dossiers écrits",
      "trust3.p": "Chiffres, travaux et risques sur papier avant tout engagement.",
      "trust4.t": "Un rapport mensuel",
      "trust4.p": "Photos, dépenses contre budget, prochaines étapes. Chaque mois.",

      "strat.kicker": "Deux stratégies",
      "strat.h2": "Chaque maison reçoit la stratégie qu'elle mérite.",
      "tag.flip": "Achat, rénovation, revente",
      "tag.rent": "Locatif",
      "strat1.t": "Acheter, rénover, revendre",
      "strat1.p": "Des maisons sous-évaluées remises au standard puis revendues. Les marges projet cibles sont indiquées dossier par dossier, après tous les coûts. Les performances passées ne préjugent pas des résultats futurs.",
      "strat2.t": "Acheter, rénover, louer",
      "strat2.p": "Des maisons solides dans des marchés locatifs, rénovées et conservées pour le revenu, avec une thèse de sortie institutionnelle pour le portefeuille.",

      "houses.kicker": "Les maisons",
      "houses.h2": "Trois dossiers, tels que nous les écrivons.",
      "houses.p": "Trois dossiers types qui montrent à quoi ressemble un projet sur le papier: achat, travaux, chiffres cibles. Tous les chiffres sont des objectifs illustratifs, pas une offre. Cliquez sur une maison pour le détail complet.",

      "lbl.buy": "Achat",
      "lbl.works": "Travaux",
      "lbl.carry": "Portage et frais de vente, estimation",
      "lbl.target": "Revente cible",
      "lbl.targetvalue": "Valeur cible",
      "lbl.profit": "Profit projet cible",
      "lbl.margin": "Marge projet cible",
      "lbl.duration": "Durée cible",
      "lbl.ticket": "Ticket minimum",
      "lbl.rent": "Loyer cible",
      "lbl.rentyr": "Loyer brut cible, par an",
      "val.months6": "6 mois",
      "val.months8": "8 mois",
      "val.hold": "Conservé pour le revenu",
      "val.m1": "18 à 22%",
      "val.m2": "17 à 22%",
      "val.rentpm": "2 300 $ par mois, cible",
      "val.ticket": "À partir de 10 000 $",

      "house1.name": "Dossier A. Maison individuelle, 3 chambres, 2 bains",
      "house1.city": "Rue calme, quartier établi",
      "house2.name": "Dossier B. Maison individuelle, gros travaux",
      "house2.city": "Quartier familial, proche des écoles",
      "house3.name": "Dossier C. Duplex conservé en location",
      "house3.city": "Marché locatif, deux logements",
      "badge.sample": "Dossier type. Chiffres illustratifs.",
      "btn.file": "Voir le dossier",

      "dlg.numbers": "Les chiffres, tels qu'écrits au dossier",
      "dlg.works.t": "Les travaux",
      "house1.works": "Contrôle toiture, peinture complète, cuisine et deux salles de bain, sols, extérieurs pour la vente.",
      "house2.works": "Contrôle structure, toiture neuve, cuisine et salles de bain complètes, mise à jour électrique, sols, façade.",
      "house3.works": "Séparer les compteurs, rafraîchir les deux logements, installer des locataires long terme au loyer de marché.",
      "dlg.risks.t": "Les trois risques que nous écrivons",
      "dlg.risks.p": "Le marché bouge, les travaux dépassent, les délais glissent. Chaque dossier nomme ses trois risques principaux et ce que nous faisons pour chacun. Tout investissement comporte des risques, y compris la perte du capital.",
      "dlg.full.t": "Le dossier complet contient",
      "dlg.full.li1": "Photos et adresse après un premier appel",
      "dlg.full.li2": "Le budget travaux, ligne par ligne",
      "dlg.full.li3": "Les ventes comparables et la méthode de valorisation",
      "dlg.full.li4": "La structure, l'ordre des distributions et les documents que vous signez",
      "dlg.cta": "Recevoir le dossier complet",
      "dlg.note": "Réservé aux investisseurs accrédités ou autrement qualifiés. Dossier type illustratif, pas une offre. Les performances passées ne préjugent pas des résultats futurs.",

      "method.kicker": "La méthode",
      "method.h2": "Du premier appel au closing, quatre étapes.",
      "m1.t": "Un appel de vingt minutes",
      "m1.p": "Vous nous dites ce que vous cherchez. Nous expliquons comment fonctionne un dossier. Aucun engagement de part et d'autre.",
      "m2.t": "Le dossier, par écrit",
      "m2.p": "Achat, travaux, chiffres cibles, les trois risques, la structure. Vous lisez tout avant toute décision.",
      "m3.t": "Vérification et documents",
      "m3.p": "La qualification d'investisseur est vérifiée, puis les documents définitifs sont signés avec les avocats. Les fonds vont sur le compte du projet.",
      "m4.t": "Le projet, puis la sortie",
      "m4.p": "Rapport mensuel pendant les travaux. À la sortie, les distributions suivent l'ordre écrit du dossier.",

      "founder.kicker": "Le fondateur",
      "founder.q": "Bien acheter, rénover sérieusement, et laisser parler les dossiers écrits, pas les promesses.",
      "founder.p": "Collective Horizon est dirigé par David Hazout Levy, HEC Paris, MSc International Finance, fondateur de Reissers Capital. La maison est construite sur une idée patrimoniale, avec des marchés choisis pour leur rendement et des dossiers écrits pour être relus.",
      "founder.role": "Fondateur, Collective Horizon",

      "faq.kicker": "FAQ",
      "faq.h2": "Questions directes, réponses directes.",
      "q1": "Qui peut participer?",
      "a1": "Les investisseurs accrédités ou autrement qualifiés, agissant de leur propre initiative. La qualification est vérifiée avant qu'un dossier n'aille plus loin.",
      "q2": "Quel est le ticket minimum?",
      "a2": "Les tickets commencent à 10 000 $. Le minimum est fixé dossier par dossier, selon la taille du projet.",
      "q3": "Où va mon argent?",
      "a3": "Dans la société dédiée du projet, sur son propre compte bancaire. Une maison par société, jamais mélangé.",
      "q4": "Qu'est-ce que je signe?",
      "a4": "Des documents définitifs préparés avec les avocats: le pacte de la société, un document de souscription et un questionnaire investisseur. Le site est une information, les documents sont l'accord.",
      "q5": "Quels sont les risques?",
      "a5": "L'immobilier bouge, les travaux peuvent dépasser, les délais peuvent glisser, et un projet peut perdre de l'argent. Tout investissement comporte des risques, y compris la perte du capital. Chaque dossier nomme ses risques par écrit.",
      "q6": "Quand les distributions ont-elles lieu?",
      "a6": "Pour une revente, à la vente, selon l'ordre écrit du dossier: le prêteur, puis les coûts, puis le capital, puis le partage. Pour un locatif, selon le calendrier du dossier. Le calendrier est un objectif, pas une promesse.",
      "q7": "Puis-je suivre le chantier?",
      "a7": "Oui. Un rapport mensuel avec photos et dépenses contre budget, et le chantier se visite sur rendez-vous.",

      "final.h2": "Commencez par vingt minutes.",
      "final.p": "Demandez la présentation investisseurs. Nous répondons sous un jour ouvré, et la première étape est toujours une simple conversation.",
      "final.cta2": "Planifier un appel",

      "foot.privacy": "Confidentialité",
      "foot.terms": "Conditions",
      "foot.copy": "Collective Horizon. Miami, Floride.",
      "foot.disc": "Collective Horizon est un family office privé. Rien sur ce site ne constitue une offre de vente ou une sollicitation d'achat de titres financiers, ni un conseil en investissement, juridique ou fiscal. Toute opportunité est réservée aux seuls investisseurs qualifiés, au travers de documents d'offre définitifs. Les performances passées ne préjugent pas des résultats futurs. Tout investissement comporte des risques, y compris la perte du capital.",

      "form.kicker": "La première étape",
      "form.h2": "Demander la présentation investisseurs",
      "form.p": "Vingt minutes d'abord. Nous répondons sous un jour ouvré. Aucune donnée financière n'est collectée ici.",
      "form.name": "Nom complet",
      "form.email": "Email",
      "form.phone": "Téléphone, facultatif",
      "form.profile": "Votre profil",
      "form.profile1": "Investisseur privé",
      "form.profile2": "Family office",
      "form.profile3": "Institutionnel",
      "form.profile4": "Conseiller",
      "form.ticket": "Fourchette de ticket indicative",
      "form.t1": "Moins de 50 k$",
      "form.t2": "50 à 100 k$",
      "form.t3": "100 à 250 k$",
      "form.t4": "250 k$ et plus",
      "form.t5": "Préfère ne pas dire",
      "form.acc": "Je confirme être un investisseur accrédité ou autrement qualifié et je demande ces informations de ma propre initiative.",
      "form.err": "Merci de compléter les champs indiqués et de confirmer la case.",
      "form.send": "Envoyer la demande",
      "form.ok.t": "Demande reçue.",
      "form.ok.p": "Merci. Nous revenons vers vous sous un jour ouvré."
    },

    es: {
      "_title": "Collective Horizon. Un family office privado para proyectos residenciales americanos.",
      "_desc": "Un family office privado que se asocia con inversionistas calificados en proyectos de renovación residencial en mercados americanos de alto rendimiento.",

      "nav.project": "El proyecto",
      "nav.houses": "Las casas",
      "nav.method": "El método",
      "nav.faq": "FAQ",
      "nav.cta": "Solicitar la presentación para inversionistas",
      "nav.cta.short": "Presentación inversionistas",
      "aria.menu": "Abrir el menú",
      "aria.close": "Cerrar",
      "aria.lang": "Idioma",

      "hero.kicker": "Un family office privado, Miami",
      "hero.h1": "Compramos casas por debajo de su valor. Las renovamos. Vendemos o alquilamos.",
      "hero.sub": "Collective Horizon se asocia con inversionistas calificados en proyectos residenciales en mercados americanos de alto rendimiento. Una casa, una sociedad, un expediente claro a la vez.",
      "hero.cta2": "Ver las tres casas",
      "hero.scroll": "Deslizar",

      "project.kicker": "El proyecto",
      "project.h2": "Simple de decir, exigente de hacer.",
      "project.p": "El margen se hace en la compra. Solo compramos cuando los números se sostienen sobre el papel, antes del primer martillazo. Después, dos caminos: vender la casa renovada, o conservarla y alquilarla.",
      "step1.t": "Comprar bajo el valor",
      "step1.p": "Casas fuera de mercado, sucesiones, propietarios cansados. Cada expediente se calcula con una tabla de 18 líneas de costos y ventas comparables, nunca con entusiasmo.",
      "step2.t": "Renovar dentro del presupuesto",
      "step2.p": "Contratistas locales con licencia, un alcance de obra escrito, visitas semanales y fotos. El presupuesto es un contrato, no una esperanza.",
      "step3.t": "Vender, o alquilar",
      "step3.p": "Los expedientes de reventa apuntan a una venta en pocos meses. Los locativos se conservan por el ingreso. Cada proyecto deja su salida por escrito antes de que se mueva un dólar.",

      "trust1.t": "Una casa, una sociedad",
      "trust1.p": "Cada proyecto vive en su propia LLC dedicada.",
      "trust2.t": "Una cuenta por operación",
      "trust2.p": "Los fondos de los socios nunca se mezclan con los nuestros.",
      "trust3.t": "Expedientes escritos",
      "trust3.p": "Números, obras y riesgos sobre papel antes de cualquier compromiso.",
      "trust4.t": "Reporte mensual",
      "trust4.p": "Fotos, gastos contra presupuesto, próximos pasos. Cada mes.",

      "strat.kicker": "Dos estrategias",
      "strat.h2": "Cada casa recibe la estrategia que merece.",
      "tag.flip": "Compra, renovación, reventa",
      "tag.rent": "Alquiler",
      "strat1.t": "Comprar, renovar, vender",
      "strat1.p": "Casas infravaloradas puestas a estándar y vendidas. Los márgenes objetivo del proyecto se indican expediente por expediente, después de todos los costos. El rendimiento pasado no predice los resultados futuros.",
      "strat2.t": "Comprar, renovar, alquilar",
      "strat2.p": "Casas sólidas en mercados de alquiler, renovadas y conservadas por el ingreso, con una tesis de salida institucional para la cartera.",

      "houses.kicker": "Las casas",
      "houses.h2": "Tres expedientes, tal como los escribimos.",
      "houses.p": "Tres expedientes tipo que muestran cómo se ve un proyecto sobre el papel: compra, obras, cifras objetivo. Todas las cifras son objetivos ilustrativos, no una oferta. Haga clic en una casa para el detalle completo.",

      "lbl.buy": "Compra",
      "lbl.works": "Obras",
      "lbl.carry": "Tenencia y costos de venta, estimación",
      "lbl.target": "Reventa objetivo",
      "lbl.targetvalue": "Valor objetivo",
      "lbl.profit": "Utilidad objetivo del proyecto",
      "lbl.margin": "Margen objetivo del proyecto",
      "lbl.duration": "Plazo objetivo",
      "lbl.ticket": "Ticket mínimo",
      "lbl.rent": "Renta objetivo",
      "lbl.rentyr": "Renta bruta objetivo, por año",
      "val.months6": "6 meses",
      "val.months8": "8 meses",
      "val.hold": "Conservado por el ingreso",
      "val.m1": "18 a 22%",
      "val.m2": "17 a 22%",
      "val.rentpm": "2 300 $ al mes, objetivo",
      "val.ticket": "Desde 10 000 $",

      "house1.name": "Expediente A. Casa unifamiliar, 3 habitaciones, 2 baños",
      "house1.city": "Calle tranquila, barrio consolidado",
      "house2.name": "Expediente B. Casa unifamiliar, obra mayor",
      "house2.city": "Barrio familiar, cerca de escuelas",
      "house3.name": "Expediente C. Dúplex conservado en alquiler",
      "house3.city": "Mercado de alquiler, dos unidades",
      "badge.sample": "Expediente tipo. Cifras ilustrativas.",
      "btn.file": "Ver el expediente",

      "dlg.numbers": "Los números, tal como se escriben en el expediente",
      "dlg.works.t": "Las obras",
      "house1.works": "Revisión de techo, pintura completa, cocina y dos baños, pisos, exteriores para la venta.",
      "house2.works": "Revisión estructural, techo nuevo, cocina y baños completos, actualización eléctrica, pisos, fachada.",
      "house3.works": "Separar los servicios, refrescar las dos unidades, instalar inquilinos de largo plazo a renta de mercado.",
      "dlg.risks.t": "Los tres riesgos que escribimos",
      "dlg.risks.p": "El mercado se mueve, las obras se exceden, los plazos se deslizan. Cada expediente nombra sus tres riesgos principales y qué hacemos con cada uno. Toda inversión implica riesgos, incluida la pérdida del capital.",
      "dlg.full.t": "El expediente completo incluye",
      "dlg.full.li1": "Fotos y dirección después de una primera llamada",
      "dlg.full.li2": "El presupuesto de obra, línea por línea",
      "dlg.full.li3": "Ventas comparables y el método de valoración",
      "dlg.full.li4": "La estructura, el orden de las distribuciones y los documentos que usted firma",
      "dlg.cta": "Solicitar el expediente completo",
      "dlg.note": "Reservado a inversionistas acreditados o de otro modo calificados. Expediente tipo ilustrativo, no una oferta. El rendimiento pasado no predice los resultados futuros.",

      "method.kicker": "El método",
      "method.h2": "De la primera llamada al cierre, cuatro pasos.",
      "m1.t": "Una llamada de veinte minutos",
      "m1.p": "Usted nos dice qué busca. Le explicamos cómo funciona un expediente. Sin compromiso de ninguna de las partes.",
      "m2.t": "El expediente, por escrito",
      "m2.p": "Compra, obras, cifras objetivo, los tres riesgos, la estructura. Usted lee todo antes de cualquier decisión.",
      "m3.t": "Verificación y documentos",
      "m3.p": "Se verifica la calificación del inversionista y se firman documentos definitivos con los abogados. Los fondos van a la cuenta del proyecto.",
      "m4.t": "El proyecto, luego la salida",
      "m4.p": "Reporte mensual durante las obras. En la salida, las distribuciones siguen el orden escrito del expediente.",

      "founder.kicker": "El fundador",
      "founder.q": "Comprar bien, renovar en serio y dejar que hablen los expedientes escritos, no las promesas.",
      "founder.p": "Collective Horizon está dirigido por David Hazout Levy, HEC Paris, MSc International Finance, fundador de Reissers Capital. La casa está construida sobre una idea patrimonial, con mercados elegidos por su rendimiento y expedientes escritos para ser releídos.",
      "founder.role": "Fundador, Collective Horizon",

      "faq.kicker": "FAQ",
      "faq.h2": "Preguntas directas, respuestas directas.",
      "q1": "¿Quién puede participar?",
      "a1": "Inversionistas acreditados o de otro modo calificados, actuando por iniciativa propia. La calificación se verifica antes de que un expediente avance.",
      "q2": "¿Cuál es el ticket mínimo?",
      "a2": "Los tickets comienzan en 10 000 $. El mínimo se fija expediente por expediente, según el tamaño del proyecto.",
      "q3": "¿Dónde queda mi dinero?",
      "a3": "En la sociedad dedicada del proyecto, en su propia cuenta bancaria. Una casa por sociedad, nunca mezclado.",
      "q4": "¿Qué firmo?",
      "a4": "Documentos definitivos preparados con los abogados: el pacto de la sociedad, un documento de suscripción y un cuestionario del inversionista. El sitio es información, los documentos son el acuerdo.",
      "q5": "¿Cuáles son los riesgos?",
      "a5": "El inmobiliario se mueve, las obras pueden excederse, los plazos pueden deslizarse y un proyecto puede perder dinero. Toda inversión implica riesgos, incluida la pérdida del capital. Cada expediente nombra sus riesgos por escrito.",
      "q6": "¿Cuándo se hacen las distribuciones?",
      "a6": "En una reventa, en la venta, según el orden escrito del expediente: el prestamista, luego los costos, luego el capital, luego el reparto. En un locativo, según el calendario del expediente. El calendario es un objetivo, no una promesa.",
      "q7": "¿Puedo seguir la obra?",
      "a7": "Sí. Reporte mensual con fotos y gastos contra presupuesto, y la obra puede visitarse con cita.",

      "final.h2": "Empiece con veinte minutos.",
      "final.p": "Solicite la presentación para inversionistas. Respondemos en un día hábil, y el primer paso es siempre una simple conversación.",
      "final.cta2": "Agendar una llamada",

      "foot.privacy": "Privacidad",
      "foot.terms": "Condiciones",
      "foot.copy": "Collective Horizon. Miami, Florida.",
      "foot.disc": "Collective Horizon es un family office privado. Nada en este sitio constituye una oferta de venta ni una solicitud de oferta de compra de valores, ni asesoramiento de inversión, jurídico o fiscal. Toda oportunidad está disponible únicamente para inversionistas calificados, a través de documentos de oferta definitivos. El rendimiento pasado no predice los resultados futuros. Toda inversión implica riesgos, incluida la pérdida del capital.",

      "form.kicker": "El primer paso",
      "form.h2": "Solicitar la presentación para inversionistas",
      "form.p": "Veinte minutos primero. Respondemos en un día hábil. Aquí no se recogen datos financieros.",
      "form.name": "Nombre completo",
      "form.email": "Email",
      "form.phone": "Teléfono, opcional",
      "form.profile": "Su perfil",
      "form.profile1": "Inversionista privado",
      "form.profile2": "Family office",
      "form.profile3": "Institucional",
      "form.profile4": "Asesor",
      "form.ticket": "Rango indicativo de ticket",
      "form.t1": "Menos de 50 k$",
      "form.t2": "50 a 100 k$",
      "form.t3": "100 a 250 k$",
      "form.t4": "250 k$ o más",
      "form.t5": "Prefiero no decirlo",
      "form.acc": "Confirmo que soy un inversionista acreditado o de otro modo calificado y solicito esta información por iniciativa propia.",
      "form.err": "Complete los campos indicados y confirme la casilla.",
      "form.send": "Enviar la solicitud",
      "form.ok.t": "Solicitud recibida.",
      "form.ok.p": "Gracias. Le responderemos en un día hábil."
    }
  };

  /* ---------------- i18n engine ---------------- */
  var metaDesc = document.querySelector('meta[name="description"]');
  var enDict = { "_title": document.title, "_desc": metaDesc ? metaDesc.content : "" };
  var nodes = [].slice.call(document.querySelectorAll("[data-i18n]"));
  var ariaNodes = [].slice.call(document.querySelectorAll("[data-i18n-aria]"));
  nodes.forEach(function (el) {
    var k = el.getAttribute("data-i18n");
    if (!(k in enDict)) enDict[k] = el.innerHTML;
  });
  ariaNodes.forEach(function (el) {
    var k = el.getAttribute("data-i18n-aria");
    if (!(k in enDict)) enDict[k] = el.getAttribute("aria-label") || "";
  });
  I18N.en = enDict;

  function detectLang() {
    var ok = ["en", "fr", "es"];
    var q = (params.get("lang") || "").toLowerCase().slice(0, 2);
    if (ok.indexOf(q) >= 0) return q;
    var ls = null;
    try { ls = localStorage.getItem("ch_lang"); } catch (e) {}
    if (ok.indexOf(ls) >= 0) return ls;
    var nav = (navigator.language || "en").toLowerCase().slice(0, 2);
    return ok.indexOf(nav) >= 0 ? nav : "en";
  }

  var lang = detectLang();

  function applyLang(l) {
    lang = l;
    var d = I18N[l] || I18N.en;
    nodes.forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      var v = (k in d) ? d[k] : enDict[k];
      if (v !== undefined) el.innerHTML = v;
    });
    ariaNodes.forEach(function (el) {
      var k = el.getAttribute("data-i18n-aria");
      var v = (k in d) ? d[k] : enDict[k];
      if (v !== undefined) el.setAttribute("aria-label", v);
    });
    document.documentElement.lang = l;
    document.title = d._title || enDict._title;
    if (metaDesc) metaDesc.content = d._desc || enDict._desc;
    ["en", "fr", "es"].forEach(function (code) {
      var b = document.getElementById("lang" + code.charAt(0).toUpperCase() + code.slice(1));
      if (b) b.setAttribute("aria-pressed", l === code ? "true" : "false");
    });
    try { localStorage.setItem("ch_lang", l); } catch (e) {}
  }

  ["en", "fr", "es"].forEach(function (code) {
    var b = document.getElementById("lang" + code.charAt(0).toUpperCase() + code.slice(1));
    if (b) b.addEventListener("click", function () { applyLang(code); });
  });
  applyLang(lang);

  /* ---------------- Header and mobile CTA state ---------------- */
  var hero = document.getElementById("hero");
  function onScroll() {
    document.body.classList.toggle("scrolled", window.scrollY > 12);
    if (hero) document.body.classList.toggle("past-hero", window.scrollY > hero.offsetHeight * 0.72);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------------- Hero parallax ---------------- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var heroMedia = document.querySelector(".hero-media video, .hero-media img");
  if (heroMedia && !reduce) {
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = window.scrollY;
        if (y < window.innerHeight * 1.2) {
          heroMedia.style.transform = "translateY(" + (y * 0.22).toFixed(1) + "px) scale(1.04)";
        }
        ticking = false;
      });
    }, { passive: true });
  }

  /* ---------------- Reveal on scroll ---------------- */
  var toReveal = [].slice.call(document.querySelectorAll(".reveal"));
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -40px 0px" });
    toReveal.forEach(function (el) { io.observe(el); });
  } else {
    toReveal.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------------- FAQ accordion: one open at a time ---------------- */
  var faqItems = [].slice.call(document.querySelectorAll(".faq details"));
  faqItems.forEach(function (dt) {
    dt.addEventListener("toggle", function () {
      if (dt.open) faqItems.forEach(function (o) { if (o !== dt) o.open = false; });
    });
  });

  /* ---------------- Dialogs ---------------- */
  function wireDialog(dlg) {
    dlg.addEventListener("click", function (e) {
      if (e.target === dlg) dlg.close();
    });
    dlg.addEventListener("close", function () {
      document.body.classList.remove("dlg-open");
    });
  }
  [].slice.call(document.querySelectorAll("dialog")).forEach(wireDialog);

  function openDialog(id) {
    var dlg = document.getElementById(id);
    if (!dlg || dlg.open) return;
    dlg.showModal();
    document.body.classList.add("dlg-open");
  }

  [].slice.call(document.querySelectorAll("[data-open]")).forEach(function (b) {
    b.addEventListener("click", function () { openDialog(b.getAttribute("data-open")); });
    if (b.getAttribute("role") === "button") {
      b.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openDialog(b.getAttribute("data-open"));
        }
      });
    }
  });
  [].slice.call(document.querySelectorAll(".dlg-close")).forEach(function (b) {
    b.addEventListener("click", function () {
      var dlg = b.closest("dialog");
      if (dlg) dlg.close();
    });
  });

  /* Menu dialog links close the menu before navigating to the anchor. */
  var menuDlg = document.getElementById("menuDlg");
  if (menuDlg) {
    [].slice.call(menuDlg.querySelectorAll("a")).forEach(function (a) {
      a.addEventListener("click", function () { menuDlg.close(); });
    });
  }

  /* Lead dialog openers may carry a house of interest. */
  var interestField = document.getElementById("fInterest");
  [].slice.call(document.querySelectorAll(".open-lead")).forEach(function (b) {
    b.addEventListener("click", function () {
      var from = b.closest("dialog");
      if (from) from.close();
      if (interestField) interestField.value = b.getAttribute("data-interest") || "";
      openDialog("leadDlg");
    });
  });

  /* ---------------- Lead form ---------------- */
  var form = document.getElementById("leadForm");
  if (form) {
    var name = document.getElementById("fName");
    var email = document.getElementById("fEmail");
    var phone = document.getElementById("fPhone");
    var ticket = document.getElementById("fTicket");
    var acc = document.getElementById("fAcc");
    var accWrap = document.getElementById("accWrap");
    var errLine = document.getElementById("errLine");
    var submitBtn = document.getElementById("fSend");
    var okBox = document.getElementById("formOk");

    function setInvalid(el, bad) {
      if (bad) el.setAttribute("aria-invalid", "true");
      else el.removeAttribute("aria-invalid");
    }
    function success() {
      form.classList.add("hidden");
      okBox.classList.add("show");
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var bad = false;
      var okName = name.value.trim().length >= 2;
      var okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim());
      setInvalid(name, !okName); if (!okName) bad = true;
      setInvalid(email, !okEmail); if (!okEmail) bad = true;
      if (!acc.checked) { accWrap.classList.add("invalid"); bad = true; }
      else accWrap.classList.remove("invalid");
      if (bad) {
        errLine.classList.add("show");
        var firstBad = form.querySelector('[aria-invalid="true"]') || acc;
        firstBad.focus();
        return;
      }
      errLine.classList.remove("show");
      var payload = {
        name: name.value.trim(),
        email: email.value.trim(),
        phone: phone.value.trim(),
        profile: document.getElementById("fProfile").value,
        ticket_range: ticket.value,
        interest: interestField ? interestField.value : "",
        accredited_confirmed: "yes",
        language: lang,
        _subject: "Collective Horizon: investor presentation request"
      };
      /* Test hook: tests set window.__leadHook so no real email is ever sent. */
      if (window.__leadHook) { try { window.__leadHook(payload); } catch (err) {} success(); return; }
      submitBtn.disabled = true;
      fetch("https://formsubmit.co/ajax/" + CH.LEAD_EMAIL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload)
      }).then(function (r) {
        if (!r.ok) throw new Error("http " + r.status);
        return r.json();
      }).then(function () {
        success();
      }).catch(function () {
        submitBtn.disabled = false;
        var body = "Name: " + payload.name + "\nEmail: " + payload.email +
          (payload.phone ? "\nPhone: " + payload.phone : "") +
          "\nProfile: " + payload.profile +
          "\nTicket range: " + payload.ticket_range +
          (payload.interest ? "\nInterest: " + payload.interest : "") +
          "\nAccredited or qualified investor, at own initiative: yes\nLanguage: " + payload.language;
        var mailto = "mailto:" + CH.LEAD_EMAIL +
          "?subject=" + encodeURIComponent(payload._subject) +
          "&body=" + encodeURIComponent(body);
        /* Test hook: tests set window.__mailtoHook so no mail client ever opens. */
        if (window.__mailtoHook) { try { window.__mailtoHook(mailto); } catch (err) {} success(); return; }
        location.href = mailto;
        success();
      });
    });
  }

  /* ---------------- Footer year ---------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  document.body.classList.add("ready");
})();
