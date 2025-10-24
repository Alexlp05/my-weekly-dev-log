import DayDetailLayout from "@/components/DayDetailLayout";
import { ImageBlocks } from "@/components/ImageBlocks";

const Day2 = () => {
  return (
    <DayDetailLayout day={2} date="Tuesday" title="Day 2: Design & Prototyping">
      <div className="space-y-8">
        <section>
          <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
            <li>Rapid prototyping with cardboard and foam for quick validation.</li>
            <li>3D printed mounting tests to verify tolerances.</li>
            <li>Laser-cut base plates prepared for assembly tests.</li>
            <li>Iterative adjustments after each physical test.</li>
          </ul>
        </section>

        <section>
          <ImageBlocks />
        </section>
      </div>
    </DayDetailLayout>
  );
};

export default Day2;
