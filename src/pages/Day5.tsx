import DayDetailLayout from "@/components/DayDetailLayout";
import { ImageBlocks } from "@/components/ImageBlocks";

const Day5 = () => {
  return (
    <DayDetailLayout day={5} date="Friday" title="Day 5: Final Design & Finishing">
      <div className="space-y-8">
        <section>
          <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
            <li>End-to-end testing of user flows and final bug fixes.</li>
            <li>Performance tuning and cross-browser checks.</li>
            <li>Prepare production assets and deployment configuration.</li>
            <li>Write final documentation and handover notes.</li>
          </ul>
        </section>

        <section>
          <ImageBlocks />
        </section>
      </div>
    </DayDetailLayout>
  );
};

export default Day5;
