import DayDetailLayout from "@/components/DayDetailLayout";

const Day4 = () => {
  return (
    <DayDetailLayout day={4} date="Thursday" title="Day 4: Assembly and Testing">
      <div className="space-y-8">
        <p>
          We started the long 3D print for the Vouvouzela, the spiral horn we designed on Day 2. It ran in the background while we worked on the main project.
        </p>
        <img src="/placeholder.svg" alt="3D print of the Vouvouzela in progress" className="w-full h-auto rounded-lg my-4" />
      </div>
    </DayDetailLayout>
  );
};

export default Day4;
