import DayDetailLayout from "@/components/DayDetailLayout";
import { ImageBlocks } from "@/components/ImageBlocks";

const Day3 = () => {
  return (
    <DayDetailLayout day={3} date="Wednesday" title="Day 3: Production & Cutting">
      <div className="space-y-8">
        <section>
          <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
            <li>Begin production runs: cutting and preparing the main parts.</li>
            <li>Assemble initial modules and test mechanical integrations.</li>
            <li>Record and fix issues with mountings and alignments.</li>
            <li>Run basic functionality tests on assembled units.</li>
          </ul>
        </section>

        <section>
          <ImageBlocks />
        </section>
      </div>
    </DayDetailLayout>
  );
};

export default Day3;
