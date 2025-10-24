import DayDetailLayout from "@/components/DayDetailLayout";
import testVideo from "@/assets/Day3/premier_test_carrousel.mp4";

const Day3 = () => {
  return (
    <DayDetailLayout day={3} date="Wednesday" title="Day 3: Part Production and Web Deployment">
      <div className="space-y-8">
        <p>
          Today, the physical build began. The first major step was using the laser cutter to fabricate the central wooden structure, carefully etching the score lines that will form the 'wave'.
        </p>

        <div className="flex flex-col md:flex-row items-start gap-6">
          <video src={testVideo} controls className="w-full md:w-2/3 rounded-lg shadow" />
          <p className="text-lg text-muted-foreground md:w-1/3">
            First carousel test: a short recording of the initial manual rotation and assembly behavior. We used this test to check clearances, balance and the visual rhythm of the fish movement.
          </p>
        </div>

        <p>
          While the laser was running, we continued refining the fish silhouettes and supports.
        </p>
      </div>
    </DayDetailLayout>
  );
};

export default Day3;
