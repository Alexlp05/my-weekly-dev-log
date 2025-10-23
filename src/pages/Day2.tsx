import DayDetailLayout from "@/components/DayDetailLayout";
import { ImageHero, ImageGallery } from "@/components/ImageBlocks";

const Day2 = () => {
  return (
    <DayDetailLayout day={2} date="Tuesday" title="Additive Fabrication & 3D Modeling">
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4">Environment setup</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The day began with a full setup of our development environment. We installed the necessary tools,
            configured the project, and established best practices to keep work consistent across the team.
          </p>
        </section>

        <section className="bg-secondary/50 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Technologies & setup</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Git repository setup</li>
            <li>• React + TypeScript configuration</li>
            <li>• Tailwind CSS integration</li>
            <li>• Development tools and workflows</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Project architecture</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We organized the project's files and components to create a clean, scalable structure that simplifies
            future maintenance and feature growth.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Image gallery</h2>
          <ImageHero src="/images/hero-day2.jpg" heading="Day 2" subheading="Modeling & setup" />
          <div className="mt-6">
            <ImageGallery
              variant="masonry"
              items={[
                { src: "/images/day2-1.jpg", alt: "Setup", title: "Setup", description: "Tools", caption: "Dependencies installed" },
                { src: "/images/day2-2.jpg", alt: "Config", title: "3D Modeling", description: "Fusion 360 work", caption: "Model snapshots" },
                { src: "/images/day2-3.jpg", alt: "CI", title: "Planning", description: "Assembly plan", caption: "Cutting and assembly notes" },
              ]}
              columns={3}
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Design system</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            We implemented a small design system with color tokens and reusable components to ensure visual
            coherence across the site and speed up development.
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
          <h2 className="text-3xl font-bold mb-4">First components</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We built the first reusable components — buttons, cards, and forms — that will form the foundation
            for the rest of the application.
          </p>
        </section>
      </div>
    </DayDetailLayout>
  );
};

export default Day2;
