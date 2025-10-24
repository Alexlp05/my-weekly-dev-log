import DayDetailLayout from "@/components/DayDetailLayout";

// --- Imports des médias SANS LES RENOMMER ---

// Photo du prototype assemblé sur la table
import finalPrototypeImg from "@/assets/Day5/17613005803711628715545562576201_157e5c.jpg";
// Photo du prototype devant l'aquarium
import bioAquariumImg from "@/assets/Day5/IMG20251024121857.jpg";
// Photo de l'équipe travaillant sur le site
import teamWebsiteImg from "@/assets/Day5/IMG20251024121446.jpg";
// Capture d'écran de VS Code
import vscodeScreenshotImg from "@/assets/Day5/Capture d’écran 2025-10-24 170703.png";


const Day5 = () => {
  return (
    <DayDetailLayout day={5} date="Friday" title="Day 5: Finalization, 'Bio' & Deployment">
      <div className="space-y-8">
        {/* Block 1: Image à gauche, Texte à droite */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img src={finalPrototypeImg} alt="Final prototype on the desk" className="w-full md:w-1/3 h-auto rounded-lg shadow" />
          <p className="text-lg text-muted-foreground">
            The final day was for assembly and finishing touches. We attached all the fish to the central star mechanism and tested the manual crank. The prototype was complete and fully functional.
          </p>
        </div>

        {/* Block 2: Texte à gauche, Image à droite (inversé) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <img src={bioAquariumImg} alt="Prototype in front of the office aquarium" className="w-full md:w-1/3 h-auto rounded-lg shadow" />
          <p className="text-lg text-muted-foreground">
            For the final 'bio' shot, we placed our carousel in front of its main inspiration: the office fish tank. It was the perfect way to document the finished project in its 'natural' environment.
          </p>
        </div>

        {/* Block 3: Image à gauche, Texte à droite */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img src={teamWebsiteImg} alt="Team working on the project website" className="w-full md:w-1/3 h-auto rounded-lg shadow" />
          <p className="text-lg text-muted-foreground">
            A large part of the day was dedicated to documenting the project. Here, the team is working on the website, selecting images (including the AI-enhanced one) for the presentation.
          </T>
        </div>

        {/* Block 4: Texte à gauche, Image à droite (inversé) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <img src={vscodeScreenshotImg} alt="Screenshot of the website code in VS Code" className="w-full md:w-1/3 h-auto rounded-lg shadow" />
          <p className="text-lg text-muted-foreground">
            The final step: deploying this very website. This screenshot shows the code for the homepage in VS Code, right before pushing the final changes to Vercel for the world to see.
          </p>
        </div>
      </div>
    </DayDetailLayout>
  );
};

export default Day5;