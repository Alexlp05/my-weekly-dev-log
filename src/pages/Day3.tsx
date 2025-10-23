import DayDetailLayout from "@/components/DayDetailLayout";
import { ImageHero, ImageGallery } from "@/components/ImageBlocks";

const Day3 = () => {
  return (
    <DayDetailLayout day={3} date="Mercredi" title="Fonctionnalités principales">
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4">Développement des features clés</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Journée intensive de développement des fonctionnalités principales.
            Implémentation de la logique métier et des interactions utilisateur.
          </p>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-card">
          <h3 className="text-2xl font-bold mb-4">Fonctionnalités implémentées</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold text-lg mb-2">Navigation et routing</h4>
              <p className="text-muted-foreground">
                Mise en place d'un système de navigation fluide entre les différentes
                pages de l'application avec React Router.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-4">
              <h4 className="font-semibold text-lg mb-2">Gestion d'état</h4>
              <p className="text-muted-foreground">
                Implémentation de la gestion d'état avec React Query pour
                une synchronisation efficace des données.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold text-lg mb-2">Interactions utilisateur</h4>
              <p className="text-muted-foreground">
                Développement des formulaires, boutons d'action et feedbacks visuels.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Intégration des APIs</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Connexion aux services externes et mise en place des appels API.
            Gestion des erreurs et des états de chargement pour une expérience
            utilisateur optimale.
          </p>
        </section>

        <section className="bg-secondary/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Tests réalisés :</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ Tests unitaires des composants critiques</li>
            <li>✓ Validation des flux utilisateur principaux</li>
            <li>✓ Tests de performance et optimisation</li>
            <li>✓ Vérification de la responsivité</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Galerie d'images</h2>
          <ImageHero src="/images/hero-day3.jpg" heading="Jour 3" subheading="Features" />
          <div className="mt-6">
            <ImageGallery
              variant="overlay"
              items={[
                { src: "/images/day3-1.jpg", alt: "Feature 1", title: "Authentication", caption: "Login flow" },
                { src: "/images/day3-2.jpg", alt: "Feature 2", title: "API", caption: "Endpoints principaux" },
                { src: "/images/day3-3.jpg", alt: "Feature 3", title: "UI", caption: "Composants réutilisables" },
              ]}
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Challenges rencontrés</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cette journée a présenté quelques défis techniques, notamment dans
            la synchronisation des états et la gestion des erreurs. Ces problèmes
            ont été résolus grâce à une architecture bien pensée et des patterns
            éprouvés.
          </p>
        </section>
      </div>
    </DayDetailLayout>
  );
};

export default Day3;
