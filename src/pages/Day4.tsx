import DayDetailLayout from "@/components/DayDetailLayout";
import { ImageBlocks } from "@/components/ImageBlocks";

const Day4 = () => {
  return (
    <DayDetailLayout day={4} date="Thursday" title="Day 4: Assembly & First Tests">
      <div className="space-y-8">
        <section>
          <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
            <li>Assembling modules and performing first integration tests.</li>
            <li>Measuring performance and optimizing critical areas.</li>
            <li>Accessibility audit and fixes (keyboard support, ARIA, contrast).</li>
            <li>Adding subtle animations and UX polish for smoother interactions.</li>
          </ul>
        </section>

        <section>
          <ImageBlocks />
        </section>
      </div>
    </DayDetailLayout>
  );
};

export default Day4;
