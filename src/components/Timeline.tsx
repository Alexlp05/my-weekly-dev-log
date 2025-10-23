import DayCard from "./DayCard";

const Timeline = () => {
  const projectDays = [
    {
      day: 1,
      date: "Monday",
      title: "Planning & Design",
      description: "Defining goals and the technical approach",
      achievements: [
        "Requirement analysis and scope definition",
        "Wireframes and early mockups",
        "Development environment setup",
      ],
    },
    {
      day: 2,
      date: "Tuesday",
      title: "3D Modeling & Setup",
      description: "Modeling parts and configuring tools",
      achievements: [
        "Project configuration and tooling",
        "Component structure planning",
        "Design system foundations",
      ],
    },
    {
      day: 3,
      date: "Wednesday",
      title: "Production Start",
      description: "Beginning laser cuts and Cricut work",
      achievements: [
        "Laser cutting main wooden pieces",
        "Preparing Cricut cut patterns for fish and waves",
        "Site documentation and progress tracking",
      ],
    },
    {
      day: 4,
      date: "Thursday",
      title: "Assembly & Testing",
      description: "Assembling the carousel and testing rotation",
      achievements: [
        "Performance checks and adjustments",
        "Assembly and fit testing",
        "Visual refinements and small animations",
      ],
    },
    {
      day: 5,
      date: "Friday",
      title: "Finalization & Deployment",
      description: "Polish, documentation and deployment",
      achievements: [
        "Full end-to-end testing",
        "Bug fixes and final tweaks",
        "Deployment and project documentation",
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
