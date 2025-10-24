import DayDetailLayout from "@/components/DayDetailLayout";
import cricutImg from "@/assets/Day1/IMG20251020145401.jpg";
import laserInitImg from "@/assets/Day1/IMG20251020161630.jpg";
import rhinoFishImg from "@/assets/Day1/IMG_20251024_114414_149.jpg";
import starFoldImg from "@/assets/Day1/566503207_2976083049259957_7451748221319005011_n (1).png";

const Day1 = () => {
  return (
    <DayDetailLayout day={1} date="Monday" title="Day 1: Discovery and Ideation">
      <div className="space-y-8">
        {/* Block 1: Image à gauche, Texte à droite */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img src={cricutImg} alt="Cricut workshop" className="w-full md:w-1/3 h-auto rounded-lg shadow" />
          <p className="text-lg text-muted-foreground">
            Cricut introduction: we learned how to set up the machine, choose materials and prepare cut files. The workshop focused on precision cutting for small decorative parts.
          </p>
        </div>

        {/* Block 2: Texte à gauche, Image à droite (inversé) - TEXTE INTERVERTI */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <img src={laserInitImg} alt="Laser cutter initiation" className="w-full md:w-1/3 h-auto rounded-lg shadow" />
          <p className="text-lg text-muted-foreground">
            {/* Ceci est le texte de Rhino */}
            Rhino sketches: initial fish silhouettes were drawn in Rhino as vector shapes. These served as the base artwork for the Cricut and later the laser-cut supports.
          </p>
        </div>

        {/* Block 3: Image à gauche, Texte à droite - TEXTE INTERVERTI */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img src={rhinoFishImg} alt="First Rhino fish illustration" className="w-full md:w-1/3 h-auto rounded-lg shadow" />
          <p className="text-lg text-muted-foreground">
            {/* Ceci est le texte du Laser */}
            Laser cutting initiation: first tests with the laser cutter to validate power and speed settings. We practiced engraving score lines and cutting prototypes from thin plywood.
          </p>
        </div>

        {/* Block 4: Texte à gauche, Image à droite (inversé) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <img src={starFoldImg} alt="Star fold laser-cut" className="w-full md:w-1/3 h-auto rounded-lg shadow" />
          <p className="text-lg text-muted-foreground">
            Star fold prototype: an early laser-cut design demonstrating foldable geometry. This piece helped us validate the scoring and folding approach for more complex parts.
          </p>
        </div>
      </div>
    </DayDetailLayout>
  );
};

export default Day1;