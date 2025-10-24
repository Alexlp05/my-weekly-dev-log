import DayDetailLayout from "@/components/DayDetailLayout";

const Day5 = () => {
  return (
    <DayDetailLayout day={5} date="Friday" title="Day 5: Finishing and Design">
      <div className="space-y-8">
        <p>
          The final day was dedicated entirely to aesthetics and final design. We disassembled key parts for painting, choosing a color scheme that would highlight the wave motion.
        </p>
        <img src="/placeholder.svg" alt="Painting the carousel components" className="w-full h-auto rounded-lg my-4" />
      </div>
    </DayDetailLayout>
  );
};

export default Day5;
