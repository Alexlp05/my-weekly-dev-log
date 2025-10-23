import DayDetailLayout from "@/components/DayDetailLayout";
import { ImageHero, ImageGallery } from "@/components/ImageBlocks";

const Day2 = () => {
  return (
    <DayDetailLayout day={2} date="Mardi" title="Développement des fondations">
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4">Mise en place de l'environnement</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            La journée a commencé par la configuration complète de l'environnement de développement.
            Installation des outils, configuration du projet et mise en place des bonnes pratiques.
          </p>
        </section>

        <section className="bg-secondary/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Technologies configurées :</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ Configuration du repository Git</li>
            <li>✓ Installation et configuration de React + TypeScript</li>
            <li>✓ Mise en place de Tailwind CSS</li>
            <li>✓ Configuration des outils de développement</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Architecture du projet</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Création de la structure du projet avec une organisation claire des fichiers
            et des composants. L'architecture choisie permet une scalabilité future
            et facilite la maintenance du code.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Galerie d'images</h2>
          <ImageHero src="/images/hero-day2.jpg" heading="Jour 2" subheading="Installation" />
          <div className="mt-6">
            <ImageGallery
              items={[
                { src: "/images/day2-1.jpg", alt: "Setup", title: "Setup", description: "Outils" },
                { src: "/images/day2-2.jpg", alt: "Config", title: "Config", description: "Tailwind" },
              ]}
              columns={2}
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Design System</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Implémentation d'un design system complet avec des tokens de couleurs,
            des composants réutilisables et une cohérence visuelle sur toute l'application.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
            <div className="bg-primary rounded-lg h-24 flex items-center justify-center text-primary-foreground font-semibold">
              Primary
            </div>
            <div className="bg-secondary rounded-lg h-24 flex items-center justify-center text-secondary-foreground font-semibold">
              Secondary
            </div>
            <div className="bg-accent rounded-lg h-24 flex items-center justify-center text-accent-foreground font-semibold">
              Accent
            </div>
            <div className="bg-muted rounded-lg h-24 flex items-center justify-center text-muted-foreground font-semibold">
              Muted
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Premiers composants</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Développement des premiers composants réutilisables : boutons, cartes,
            formulaires. Ces éléments serviront de base pour toute l'application.
          </p>
        </section>
      </div>
    </DayDetailLayout>
  );
};

export default Day2;
