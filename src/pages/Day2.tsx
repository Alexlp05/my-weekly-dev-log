import DayDetailLayout from "@/components/DayDetailLayout";
import measureHandleImg from "@/assets/Day2/IMG20251021102305.jpg";
import handleSketchImg from "@/assets/Day2/IMG20251021102211.jpg";
import fusionModelImg from "@/assets/Day2/IMG20251021114917.jpg";
import carouselSketchImg from "@/assets/Day2/IMG_20251024_114347_270.jpg";

const Day2 = () => {
  return (
    <DayDetailLayout day={2} date="Tuesday" title="Day 2: Additive Manufacturing and 3D Modeling">
      <div className="space-y-8">
        {/* Block 1: Image à gauche, Texte à droite */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img src={measureHandleImg} alt="Measuring a door handle" className="w-full md:w-1/3 h-auto rounded-lg shadow" />
          <p className="text-lg text-muted-foreground">
            To start our 3D modeling journey, we began with a practical exercise: measuring a real-world object. We took precise dimensions of a door handle to understand form and scale.
          </p>
        </div>

        {/* Block 2: Texte à gauche, Image à droite (inversé) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <img src={handleSketchImg} alt="Technical drawing of door handle" className="w-full md:w-1/3 h-auto rounded-lg shadow" />
          <p className="text-lg text-muted-foreground">
            Those measurements were then translated into 2D technical drawings. This step was crucial for visualizing the front, top, and side views before moving into the 3D software.
          </p>
        </div>

        {/* Block 3: Image à gauche, Texte à droite */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img src={fusionModelImg} alt="3D model in Fusion 360" className="w-full md:w-1/3 h-auto rounded-lg shadow" />
          <p className="text-lg text-muted-foreground">
            Next, we moved into Fusion 360 to model our practice parts. This image shows a flange created in the software, practicing extrusions, holes, and fillets based on our sketches.
          </p>
        </div>

        {/* Block 4: Texte à gauche, Image à droite (inversé) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <img src={carouselSketchImg} alt="Schematics for the fish carousel" className="w-full md:w-1/3 h-auto rounded-lg shadow" />
          <p className="text-lg text-muted-foreground">
            Finally, we applied these new skills to our main project. We finalized the schematics for the fish carousel, creating the top and front views to guide the final laser-cutting and assembly.
          </p>
        </div>
      </div>
    </DayDetailLayout>
  );
};

export default Day2;