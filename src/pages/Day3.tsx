import DayDetailLayout from "@/components/DayDetailLayout";

const Day3 = () => {
  return (
    <DayDetailLayout day={3} date="Wednesday" title="Day 3: Part Production and Web Deployment">
      <div className="space-y-8">
        <p>
          Today, the physical build began. The first major step was using the laser cutter to fabricate the central wooden structure, carefully etching the score lines that will form the 'wave'.
        </p>
        <img src="/placeholder.svg" alt="Laser cutting the main wooden part" className="w-full h-auto rounded-lg my-4" />

        <p>
          While the laser was running, we moved to the Cricut to cut all the fish silhouettes and their corresponding wave-shaped supports from heavy cardstock.
        </p>
        <img src="/placeholder.svg" alt="Cricut cutting the fish shapes" className="w-full h-auto rounded-lg my-4" />

        <p>
          In parallel with fabrication, we set up this project website. We used a template, created a Github repository, and deployed the first version on Vercel.
        </p>
        <img src="/placeholder.svg" alt="Github repository screenshot" className="w-full h-auto rounded-lg my-4" />
      </div>
    </DayDetailLayout>
  );
};

export default Day3;
