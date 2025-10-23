import DayDetailLayout from "@/components/DayDetailLayout";
import { ImageHero, ImageGallery } from "@/components/ImageBlocks";

const Day3 = () => {
  return (
    <DayDetailLayout day={3} date="Wednesday" title="Start of Production">
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4">Feature development</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A focused day of building the main features: implementing core logic and refining user interactions.
          </p>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-card">
          <h3 className="text-2xl font-bold mb-4">Implemented features</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold text-lg mb-2">Routing & navigation</h4>
              <p className="text-muted-foreground">
                Implemented a smooth navigation system across the site's pages with React Router.
              </p>
            </div>
            <div className="border-l-4 border-accent pl-4">
              <h4 className="font-semibold text-lg mb-2">State management</h4>
              <p className="text-muted-foreground">
                Set up state management using React Query to keep data synchronized and cache-friendly.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold text-lg mb-2">User interactions</h4>
              <p className="text-muted-foreground">
                Built forms, action buttons, and visual feedback patterns to improve the user experience.
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
          <h3 className="text-xl font-semibold mb-3">Tests performed</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>✓ Unit tests for critical components</li>
            <li>✓ Validation of core user flows</li>
            <li>✓ Performance testing and tuning</li>
            <li>✓ Responsiveness checks on different screens</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Image gallery</h2>
          <ImageHero src="/images/hero-day3.jpg" heading="Day 3" subheading="Production & cutting" />
          <div className="mt-6">
            <ImageGallery
              variant="overlay"
              items={[
                { src: "/images/day3-1.jpg", alt: "Feature 1", title: "Authentication", caption: "Login flow" },
                { src: "/images/day3-2.jpg", alt: "Cricut", title: "Cricut cuts", caption: "Fish shapes and wave patterns" },
                { src: "/images/day3-3.jpg", alt: "Site", title: "Site progress", caption: "Documentation and site setup" },
              ]}
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Challenges faced</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We encountered some technical challenges around state synchronization and error handling. These
            were addressed by applying robust architectural patterns and careful testing.
          </p>
        </section>
      </div>
    </DayDetailLayout>
  );
};

export default Day3;
