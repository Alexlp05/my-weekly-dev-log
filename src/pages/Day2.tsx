import DayDetailLayout from "@/components/DayDetailLayout";

const Day2 = () => {
  return (
    <DayDetailLayout day={2} date="Tuesday" title="Day 2: Additive Manufacturing and 3D Modeling">
      <div className="space-y-8">
        <p>
          This day was dedicated to additive manufacturing. We had a course and workshop on the principles of 3D printing and how it differs from subtractive methods.
        </p>
        <img src="/placeholder.svg" alt="3D printing workshop" className="w-full h-auto rounded-lg my-4" />
      </div>
    </DayDetailLayout>
  );
};

export default Day2;
