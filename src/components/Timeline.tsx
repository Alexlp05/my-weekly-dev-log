import DayCard from "./DayCard";

const Timeline = () => {
  const projectDays = [
    {
      day: 1,
      date: "Monday",
      title: "Discovery & Ideation",
      description: "Learning new tools and first sketches",
      achievements: [
        "Laser Cutter & Cricut initiation",
        "Introduction to Rhino 3D",
        "First project sketches & brainstorming",
      ],
    },
    {
      day: 2,
      date: "Tuesday",
      title: "3D Modeling",
      description: "Learning additive mfg and Fusion 360",
      achievements: [
        "3D printing workshop (Bambu Lab)",
        "Modeled a 'Vuvuzela' in Fusion 360",
        "Finalized carousel schematics",
      ],
    },
    {
      day: 3,
      date: "Wednesday",
      title: "Production Start",
      description: "Cutting the main parts with laser and Cricut",
      achievements: [
        "Laser-cut the central wooden structure",
        "Cricut-cut the fish and wave panels",
        "First successful mechanism test",
      ],
    },
    {
      day: 4,
      date: "Thursday",
      title: "Assembly & Testing",
      description: "Building the fish and testing the full carousel",
      achievements: [
        "Assembled all the origami fish",
        "Successful demo of the full carousel",
        "3D printed a (failed) Vuvuzela",
      ],
    },
    {
      day: 5,
      date: "Friday",
      title: "Finalization & Site Deployment",
      description: "Adjustments, and documentation",
      achievements: [
        "Final assembly",
        "Fine-tuning the mechanism",
        "Final project photos & videos",
      ],
    },
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Project timeline
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Follow the project's progression day by day, from first ideas to the finished fish carousel.
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