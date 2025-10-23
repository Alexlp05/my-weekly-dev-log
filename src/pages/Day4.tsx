import DayDetailLayout from "@/components/DayDetailLayout";
import { ImageHero, ImageGallery } from "@/components/ImageBlocks";

const Day4 = () => {
  return (
    <DayDetailLayout day={4} date="Jeudi" title="Optimisation et polish">
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4">Amélioration des performances</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Focus sur l'optimisation des performances de l'application.
            Analyse des métriques et mise en place d'améliorations ciblées.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <div className="bg-card rounded-lg p-6 shadow-card">
            <h3 className="text-xl font-bold mb-3 text-primary">Avant optimisation</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Temps de chargement : 3.2s</li>
              <li>• Bundle size : 850KB</li>
              <li>• First paint : 1.8s</li>
              <li>• Score performance : 72</li>
            </ul>
          </div>
          <div className="bg-card rounded-lg p-6 shadow-card border-2 border-primary">
            <h3 className="text-xl font-bold mb-3 text-primary">Après optimisation</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Temps de chargement : 1.1s</li>
              <li>✓ Bundle size : 420KB</li>
              <li>✓ First paint : 0.6s</li>
              <li>✓ Score performance : 94</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Accessibilité</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Audit complet de l'accessibilité et implémentation des corrections nécessaires.
            L'objectif est de rendre l'application utilisable par tous.
          </p>
          
          <div className="bg-secondary/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Améliorations apportées :</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Support complet du clavier pour la navigation</li>
              <li>✓ Ajout d'attributs ARIA appropriés</li>
              <li>✓ Contraste des couleurs optimisé (WCAG AA)</li>
              <li>✓ Lecteurs d'écran compatibles</li>
              <li>✓ Focus visible sur tous les éléments interactifs</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Design et animations</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Peaufinage des détails visuels et ajout d'animations subtiles pour
            améliorer l'expérience utilisateur. Chaque interaction a été soigneusement
            pensée pour être intuitive et agréable.
          </p>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-card">
          <h3 className="text-2xl font-bold mb-4">Animations ajoutées</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:scale-105 transition-smooth">
              <span className="text-2xl">✨</span>
              <span className="text-muted-foreground">Transitions fluides entre les pages</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:scale-105 transition-smooth">
              <span className="text-2xl">🎯</span>
              <span className="text-muted-foreground">Feedbacks visuels sur les interactions</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:scale-105 transition-smooth">
              <span className="text-2xl">🌊</span>
              <span className="text-muted-foreground">Effets de scroll parallax subtils</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Galerie d'images</h2>
          <ImageHero src="/images/hero-day4.jpg" heading="Jour 4" subheading="Optimisation" />
          <div className="mt-6">
            <ImageGallery
              items={[
                { src: "/images/day4-1.jpg", alt: "Perf 1", title: "Perf 1" },
                { src: "/images/day4-2.jpg", alt: "Perf 2", title: "Perf 2" },
              ]}
              columns={2}
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Code quality</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Refactoring du code pour améliorer la lisibilité et la maintenabilité.
            Ajout de commentaires et de documentation pour faciliter les évolutions futures.
          </p>
        </section>
      </div>
    </DayDetailLayout>
  );
};

export default Day4;
