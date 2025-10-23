import DayDetailLayout from "@/components/DayDetailLayout";
import { ImageHero, ImageGallery } from "@/components/ImageBlocks";

const Day5 = () => {
  return (
    <DayDetailLayout day={5} date="Friday" title="Final Design & Finishing">
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4">End-to-end testing</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The final day was dedicated to thorough validation. We ran exhaustive user flow tests
            and fixed the remaining issues before final delivery.
          </p>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-card">
          <h3 className="text-2xl font-bold mb-4">Tested scenarios</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-primary">User flows</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>✓ Complete navigation across the app</li>
                <li>✓ Forms and validation</li>
                <li>✓ Error handling</li>
                <li>✓ Responsive on all devices</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-primary">Technical checks</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>✓ Performance and optimization</li>
                <li>✓ Cross-browser compatibility</li>
                <li>✓ Security checks and validations</li>
                <li>✓ SEO and metadata</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Bug fixes</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Testing helped us find minor issues that were quickly addressed. Here are a few fixes:
          </p>
          
          <div className="space-y-3">
            <div className="bg-secondary/50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <span className="text-destructive font-bold">Bug #1</span>
                <div>
                  <p className="font-semibold">Mobile navigation</p>
                  <p className="text-sm text-muted-foreground">
                    The mobile menu was not closing reliably — fixed ✓
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <span className="text-destructive font-bold">Bug #2</span>
                <div>
                  <p className="font-semibold">Image loading</p>
                  <p className="text-sm text-muted-foreground">
                    Optimized lazy loading for improved performance — fixed ✓
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Deployment</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            After final validation, the project was prepared for production. We configured the production
            environment and launched the site.
          </p>
          
          <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-6">
            <h4 className="font-bold text-lg mb-2">🚀 Live now!</h4>
            <p className="text-muted-foreground">
              The project is now publicly accessible. The goals set at the start of the week have been met successfully.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Documentation</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Rédaction de la documentation technique et utilisateur. Cette documentation
            facilitera la maintenance et les évolutions futures du projet.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Image gallery</h2>
          <ImageHero src="/images/hero-day5.jpg" heading="Day 5" subheading="Deployment" />
          <div className="mt-6">
            <ImageGallery
              variant="cards"
              items={[
                { src: "/images/day5-1.jpg", alt: "Final build", title: "Final build", description: "Pre-production", caption: "Final validation" },
                { src: "/images/day5-2.jpg", alt: "Launch", title: "Launch", description: "Production deployment", caption: "Public release" },
                { src: "/images/day5-3.jpg", alt: "Documentation", title: "Documentation", description: "Project docs", caption: "Complete documentation" },
              ]}
            />
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">🎉 Project complete!</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A focused and creative week that concluded successfully. From early concepts to final deployment,
            every stage was planned and executed carefully. The end result is a polished, accessible project
            ready to be showcased.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Learnings & next steps</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This week strengthened our skills in modern web development and introduced new approaches.
            Next steps include adding features based on user feedback and continuously improving the experience.
          </p>
        </section>
      </div>
    </DayDetailLayout>
  );
};

export default Day5;
