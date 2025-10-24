import DayDetailLayout from "@/components/DayDetailLayout";

const Day1 = () => {
  return (
    <DayDetailLayout day={1} date="Monday" title="Day 1: Discovery and Ideation">
      <div className="space-y-8">
        <p>
          The first day was focused on learning subtractive manufacturing methods. We had a brief course followed by a hands-on workshop to understand the principles.
        </p>
        <img src="/placeholder.svg" alt="Subtractive manufacturing workshop" className="w-full h-auto rounded-lg my-4" />
      </div>
    </DayDetailLayout>
  );
};

export default Day1;
