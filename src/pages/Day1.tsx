import DayDetailLayout from "@/components/DayDetailLayout";
import { ImageHero, ImageGallery } from "@/components/ImageBlocks";

const Day1 = () => {
  return (
    <DayDetailLayout day={1} date="Monday" title="Discovery & Inspiration">
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4">Today's overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            On the first day we laid the foundations: training on workshop tools, an introduction to laser
            cutting and Cricut machines, and early skill-building for the practical phases ahead.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Project</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            The morning was focused on defining the project goals and technical constraints. We listed the
            essential functions, identified the suitable tools, and outlined user expectations.
          </p>
          
          <div className="bg-secondary/50 rounded-lg p-6 my-6">
            <h3 className="text-xl font-semibold mb-3">Key takeaways</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Defined project scope</li>
              <li>✓ Identified suitable technologies</li>
              <li>✓ Estimated required resources</li>
              <li>✓ Planned development phases</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Design & mockups</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The afternoon was devoted to creating mockups and wireframes. This crucial step helps
            visualize the user interface and confirm design decisions before starting development.
          </p>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-card">
          <h3 className="text-2xl font-bold mb-4">Sample explanatory video</h3>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/yBQMuExWIFs"
              title="Exemple de vidéo explicative"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Image gallery</h2>
          <ImageHero src="/images/hero-day1.jpg" heading="Day 1" subheading="Project kick-off" />
          <div className="mt-6">
            <ImageGallery
              variant="cards"
              items={[
                {
                  src: "/images/day1-1.jpg",
                  alt: "Step 1",
                  title: "Setup",
                  description: "Preparing tools",
                  caption: "Workstations are set up",
                },
                {
                  src: "/images/day1-2.jpg",
                  alt: "Step 2",
                  title: "Configuration",
                  description: "Initial settings",
                  caption: "Repository and tools configured",
                },
                {
                  src: "/images/day1-3.jpg",
                  alt: "Step 3",
                  title: "Sketches",
                  description: "Wireframes",
                  caption: "Early interface sketches",
                },
              ]}
              columns={3}
            />
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-bold mb-4">Day wrap-up</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The first day ended successfully. Designs and notes are ready, and the team has a clear
            plan for the build phases to come. Tomorrow we move into hands-on production.
          </p>
        </section>
      </div>
    </DayDetailLayout>
  );
};

export default Day1;
