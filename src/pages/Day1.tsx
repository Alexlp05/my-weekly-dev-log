import DayDetailLayout from "@/components/DayDetailLayout";
import { ImageBlocks } from "@/components/ImageBlocks";

const Day1 = () => {
  return (
    <DayDetailLayout day={1} date="Monday" title="Day 1: Discovery and Ideation">
      <div className="space-y-8">
        <section>
          <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
            <li>Learning subtractive manufacturing methods (course + workshop).</li>
            <li>Intro to Rhino modeling software.</li>
            <li>Discovering the Cricut machine.</li>
            <li>Laser Cutter initiation.</li>
            <li>Project brainstorming begins (sketches).</li>
          </ul>
        </section>

        <section>
          <ImageBlocks />
        </section>
      </div>
    </DayDetailLayout>
  );
};

export default Day1;
