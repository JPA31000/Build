// js/data.js

export const appData = {
  "phases": [
    {
      "nom": "Phase 1 : L’avant-projet",
      "activites": [
        {
          "nom": "Activité 1.1 – L’esquisse, les études préliminaires et le diagnostic",
          "taches": [
            "Effectuer un relevé d’ouvrage",
            "Rédiger des éléments d’une notice descriptive de l’existant",
            "Mettre au net et compléter des documents graphiques d’esquisses",
            "Réaliser une maquette sommaire et des dessins de rendu",
            "Effectuer les calculs de surfaces"
          ],
          "niveau": 3
        },
        {
          "nom": "Activité 1.2 – L’avant-projet sommaire",
          "taches": [
            "Rechercher et classer la documentation spécifique au projet",
            "Produire des documents graphiques d’APS en 2D et 3D",
            "Rédiger une notice descriptive des choix architecturaux",
            "Vérifier et confirmer les calculs de surfaces"
          ],
          "niveau": 2
        },
        {
          "nom": "Activité 1.3 – L’avant-projet définitif",
          "taches": [
            "Analyser la compatibilité entre choix architecturaux et techniques",
            "Produire des documents graphiques architecturaux",
            "Transcrire les exigences techniques dans les documents graphiques et écrits",
            "Élaborer un estimatif sommaire du coût des travaux (APS)",
            "Établir un planning prévisionnel du projet",
            "Établir le dossier de demande de permis de construire (PC)"
          ],
          "niveau": 1
        }
      ]
    },
    {
      "nom": "Phase 2 : Le projet",
      "activites": [
        {
          "nom": "Activité 2.1 – Les études d’exécution (PRO)",
          "taches": [
            "Exploiter les données techniques des bureaux d’études",
            "Établir les plans et détails d’exécution en 2D et 3D",
            "Rédiger le CCTP (Cahier des Clauses Techniques Particulières)",
            "Établir les quantitatifs par lot",
            "Rédiger la notice de sécurité incendie",
            "Réaliser le relevé et le repérage des réseaux existants"
          ],
          "niveau": 3
        },
        {
          "nom": "Activité 2.2 – L’assistance pour la passation des contrats de travaux (ACT)",
          "taches": [
            "Lancer l’appel d’offres",
            "Analyser les offres des entreprises",
            "Participer à la mise au point des marchés de travaux",
            "Négocier avec les entreprises"
          ],
          "niveau": 2
        },
        {
          "nom": "Activité 2.3 – La direction de l’exécution des contrats de travaux (DET)",
          "taches": [
            "Organiser les réunions de chantier",
            "Établir les comptes rendus de chantier",
            "Valider les situations de travaux et les décomptes définitifs",
            "Vérifier l’avancement des travaux"
          ],
          "niveau": 1
        }
      ]
    },
    {
      "nom": "Phase 3 : La réception et la gestion de projet",
      "activites": [
        {
          "nom": "Activité 3.1 – L’assistance aux opérations de réception (AOR)",
          "taches": [
            "Préparer les opérations préalables à la réception (OPR)",
            "Assister à la réception des travaux",
            "Établir le procès-verbal de réception"
          ],
          "niveau": 3
        },
        {
          "nom": "Activité 3.2 – Le suivi des garanties et de la parfaite achèvement",
          "taches": [
            "Vérifier la levée des réserves",
            "Établir le DGD (Décompte Général Définitif)"
          ],
          "niveau": 2
        },
        {
          "nom": "Activité 3.3 – La gestion financière et administrative",
          "taches": [
            "Suivre la facturation",
            "Gérer les avenants et les imprévus",
            "Archiver les documents du projet"
          ],
          "niveau": 1
        },
        {
          "nom": "Activité 3.4 – Le contrôle qualité (processus et prestations)",
          "taches": [
            "Vérifier le respect des procédures administratives",
            "Repérer et analyser les non-conformités",
            "Contrôler le respect des règles de l’art et des tolérances",
            "Vérifier la traçabilité des interventions",
            "Établir les documents de suivi"
          ],
          "niveau": 1
        }
      ]
    }
  ],
  "problematiquesParActivite": {
    "Activité 1.1 – L’esquisse, les études préliminaires et le diagnostic": [
      "Comment réaliser un diagnostic précis de l'existant ?",
      "Comment retranscrire fidèlement les informations du relevé sur les documents graphiques ?",
      "Comment synthétiser les premières intentions architecturales de manière claire et concise ?",
      "Comment s'assurer de la pertinence des données de surfaces au regard des exigences du projet ?"
    ],
    "Activité 1.2 – L’avant-projet sommaire": [
      "Comment concilier les contraintes réglementaires et techniques avec les intentions architecturales ?",
      "Comment présenter les premières esquisses 3D de manière attractive et compréhensible pour le client ?",
      "Comment justifier les choix architecturaux et fonctionnels ?",
      "Comment valider la cohérence des surfaces et leurs implications réglementaires ?"
    ],
    "Activité 1.3 – L’avant-projet définitif": [
      "Comment intégrer les retours des bureaux d'études pour affiner le projet ?",
      "Comment élaborer des plans architecturaux détaillés et conformes aux normes ?",
      "Comment estimer de manière fiable le coût des travaux à ce stade ?",
      "Comment anticiper les délais de construction et les démarches administratives ?",
      "Comment constituer un dossier de Permis de Construire complet et recevable ?"
    ],
    "Activité 2.1 – Les études d’exécution (PRO)": [
      "Comment transcrire les intentions du projet en documents d'exécution précis ?",
      "Comment assurer la coordination technique entre les différents corps de métier ?",
      "Comment anticiper les difficultés de mise en œuvre sur chantier ?",
      "Comment rédiger un CCTP complet et sans ambiguïté pour les entreprises ?",
      "Comment quantifier avec exactitude les matériaux et ouvrages nécessaires ?"
    ],
    "Activité 2.2 – L’assistance pour la passation des contrats de travaux (ACT)": [
      "Comment identifier les entreprises qualifiées pour le projet ?",
      "Comment comparer et analyser les offres des entreprises de manière objective ?",
      "Comment préparer des marchés de travaux équilibrés et sécurisés ?",
      "Comment mener une négociation constructive avec les entreprises ?"
    ],
    "Activité 2.3 – La direction de l’exécution des contrats de travaux (DET)": [
      "Comment assurer un suivi efficace de l'avancement des travaux ?",
      "Comment gérer les imprévus et les modifications sur chantier ?",
      "Comment valider les situations de travaux et les paiements ?",
      "Comment maintenir une bonne communication avec tous les intervenants ?",
      "Comment garantir le respect des délais et du budget ?"
    ],
    "Activité 3.1 – L’assistance aux opérations de réception (AOR)": [
      "Comment organiser et préparer la réception des travaux ?",
      "Comment identifier et consigner les éventuelles réserves ?",
      "Comment formaliser la réception des travaux et ses implications ?",
      "Comment s'assurer de la conformité de l'ouvrage livré ?"
    ],
    "Activité 3.2 – Le suivi des garanties et de la parfaite achèvement": [
      "Comment suivre la levée des réserves et les garanties post-réception ?",
      "Comment établir un décompte final juste et accepté par toutes les parties ?",
      "Comment clôturer administrativement et financièrement le projet ?"
    ],
    "Activité 3.3 – La gestion financière et administrative": [
      "Comment optimiser le suivi des factures et des paiements ?",
      "Comment gérer les évolutions contractuelles (avenants) et leurs impacts ?",
      "Comment assurer une traçabilité complète des documents du projet ?",
      "Comment anticiper les litiges et les résoudre ?"
    ],
    "Activité 3.4 – Le contrôle qualité (processus et prestations)": [
      "Comment mettre en place un système de contrôle qualité efficace sur le projet ?",
      "Comment identifier les non-conformités et proposer des actions correctives ?",
      "Comment assurer la conformité aux normes et aux règles de l'art ?",
      "Comment garantir la satisfaction du client ?"
    }
  ],
  "resultatsAttendusParTache": {
    "Effectuer un relevé d’ouvrage": "Le relevé est complet, précis et exploitable pour l'établissement des documents graphiques.",
    "Rédiger des éléments d’une notice descriptive de l’existant": "La notice décrit de manière synthétique et pertinente l'état actuel du site et de l'ouvrage.",
    "Mettre au net et compléter des documents graphiques d’esquisses": "Les documents graphiques (plans, coupes, façades) sont clairs, lisibles et reflètent les premières intentions architecturales.",
    "Réaliser une maquette sommaire et des dessins de rendu": "La maquette et les rendus permettent une visualisation tridimensionnelle des volumes et une première appréciation esthétique du projet.",
    "Effectuer les calculs de surfaces": "Les calculs de surfaces (SHON, SHOB, surface habitable, etc.) sont exacts et conformes aux réglementations en vigueur.",
    "Rechercher et classer la documentation spécifique au projet": "La documentation est exhaustive, organisée et directement accessible pour les études.",
    "Produire des documents graphiques d’APS en 2D et 3D": "Les plans et perspectives d’APS sont qualitatifs, conformes aux exigences du programme et permettent une bonne compréhension du projet.",
    "Rédiger une notice descriptive des choix architecturaux": "La notice argumente les partis pris architecturaux, fonctionnels et techniques, et les justifie au regard du programme et des contraintes.",
    "Vérifier et confirmer les calculs de surfaces": "Les surfaces sont validées et cohérentes avec les orientations du projet, y compris les surfaces réglementaires (ex: PLU).",
    "Analyser la compatibilité entre choix architecturaux et techniques": "Les solutions architecturales sont compatibles et optimisées avec les systèmes techniques (structure, fluides, thermique, etc.).",
    "Produire des documents graphiques architecturaux": "Les plans architecturaux (plans, coupes, façades, détails) sont précis, cotés, légendés et prêts pour la consultation des bureaux d'études techniques (BET).",
    "Transcrire les exigences techniques dans les documents graphiques et écrits": "Les contraintes et solutions techniques sont intégrées de manière cohérente et lisible dans les documents du projet.",
    "Élaborer un estimatif sommaire du coût des travaux (APS)": "L'estimatif fournit une fourchette de coût réaliste et sert de base de décision pour le maître d'ouvrage.",
    "Établir un planning prévisionnel du projet": "Le planning est cohérent, inclut les phases clés du projet et les délais administratifs.",
    "Établir le dossier de demande de permis de construire (PC)": "Le dossier est complet, conforme aux réglementations et permet une instruction fluide par les services instructeurs.",
    "Exploiter les données techniques des bureaux d’études": "Les informations des BET sont comprises, vérifiées et intégrées dans les plans d'exécution.",
    "Établir les plans et détails d’exécution en 2D et 3D": "Les plans d'exécution sont complets, sans ambiguïté, cotés avec précision et permettent la réalisation de l'ouvrage.",
    "Rédiger le CCTP (Cahier des Clauses Techniques Particulières)": "Le CCTP est clair, précis, exhaustif et définit les spécifications techniques des ouvrages par lot.",
    "Établir les quantitatifs par lot": "Les quantitatifs sont exacts et détaillés, servant de base pour l'établissement des offres par les entreprises.",
    "Rédiger la notice de sécurité incendie": "La notice est conforme à la réglementation incendie et intègre les mesures de sécurité spécifiques au projet.",
    "Réaliser le relevé et le repérage des réseaux existants": "Le relevé est précis et permet d'éviter les interférences et de prévoir les raccordements.",
    "Lancer l’appel d’offres": "Les dossiers de consultation des entreprises (DCE) sont diffusés aux entreprises qualifiées dans les délais impartis.",
    "Analyser les offres des entreprises": "Les offres sont comparées techniquement et financièrement, et les écarts sont justifiés.",
    "Participer à la mise au point des marchés de travaux": "Les marchés sont établis, signés et sécurisent les engagements des parties.",
    "Négocier avec les entreprises": "Les discussions aboutissent à des accords satisfaisants pour le maître d'ouvrage et l'architecte.",
    "Organiser les réunions de chantier": "Les réunions sont planifiées, structurées, et les comptes rendus sont diffusés rapidement.",
    "Établir les comptes rendus de chantier": "Les CR sont précis, exhaustifs, mentionnent les décisions, les actions et les responsabilités.",
    "Valider les situations de travaux et les décomptes définitifs": "Les paiements sont validés en accord avec l'avancement des travaux et les règles contractuelles.",
    "Vérifier l’avancement des travaux": "L'avancement physique et financier est conforme au planning et au budget.",
    "Préparer les opérations préalables à la réception (OPR)": "Les visites préalables sont organisées, les levées de réserves anticipées.",
    "Assister à la réception des travaux": "La réception est menée rigoureusement, les éventuelles réserves sont clairement identifiées.",
    "Établir le procès-verbal de réception": "Le PV est rédigé, signé et consigne les réserves ou l'absence de celles-ci.",
    "Vérifier la levée des réserves": "Toutes les réserves émises lors de la réception sont levées dans les délais et conformément aux exigences.",
    "Établir le DGD (Dé