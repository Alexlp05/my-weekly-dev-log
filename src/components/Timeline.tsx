import DayCard from "./DayCard";

const Timeline = () => {
  const projectDays = [
    {
      day: 1,
      date: "Lundi",
      title: "Planification et conception",
      description: "Définition des objectifs et architecture du projet",
      achievements: [
        "Analyse des besoins et définition du scope",
        "Création des maquettes et wireframes",
        "Mise en place de l'environnement de développement",
      ],
    },
    {
      day: 2,
      date: "Mardi",
      title: "Développement des fondations",
      description: "Mise en place de la structure de base",
      achievements: [
        "Configuration du projet et des outils",
        "Création de la structure des composants",
        "Implémentation du design system",
      ],
    },
    {
      day: 3,
      date: "Mercredi",
      title: "Fonctionnalités principales",
      description: "Développement des features clés",
      achievements: [
        "Implémentation des fonctionnalités principales",
        "Intégration des APIs nécessaires",
        "Tests des composants critiques",
      ],
    },
    {
      day: 4,
      date: "Jeudi",
      title: "Optimisation et polish",
      description: "Amélioration de l'expérience utilisateur",
      achievements: [
        "Optimisation des performances",
        "Amélioration de l'accessibilité",
        "Ajustements du design et animations",
      ],
    },
    {
      day: 5,
      date: "Vendredi",
      title: "Tests et déploiement",
      description: "Validation finale et mise en production",
      achievements: [
        "Tests end-to-end complets",
        "Corrections des bugs identifiés",
        "Déploiement et documentation",
      ],
    },
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Chronologie du projet
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Découvrez l'évolution de mon projet jour après jour, des premières idées jusqu'à la réalisation finale
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectDays.map((day) => (
          <DayCard key={day.day} {...day} />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
