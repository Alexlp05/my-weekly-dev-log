import DayDetailLayout from "@/components/DayDetailLayout";

// --- Imports des médias SANS LES RENOMMER ---

// Photo du prototype devant l'aquarium
import bioAquariumImg from "@/assets/Day5/IMG20251024121857.jpg";
// Photo de l'équipe travaillant sur le site
import teamWorkingImg from "@/assets/Day5/IMG20251024121446.jpg";
// Capture d'écran de VS Code
import vscodeScreenshotImg from "@/assets/Day5/Capture d’écran 2025-10-24 170703.png";
// Photo de l'équipe (selfie)
import teamPhotoImg from "@/assets/Day5/IMG20251024143006.jpg";
// Vidéo finale du projet
import finalVideo from "@/assets/Day5/VID20251024172051.mp4";


const Day5 = () => {
  return (
    <DayDetailLayout day={5} date="Friday" title="Day 5: Finalization, 'Bio' & Deployment">
      <div className="space-y-8">

        {/* Block 2: Texte à gauche, Image à droite (inversé) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <img src={bioAquariumImg} alt="Prototype in front of the office aquarium" className="w-full md:w-1/3 h-auto rounded-lg shadow" />
          <p className="text-lg text-muted-foreground">
            For the final 'bio' shot, we placed our carousel in front of its main inspiration: the office fish tank. It was the perfect way to document the finished project in its 'natural' environment.
          </p>
        </div>

        {/* Block 3: Vidéo à gauche, Texte à droite */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <video 
            src={finalVideo} 
            alt="Final project video demo" 
            className="w-full md:w-1/3 h-auto rounded-lg shadow" 
            autoPlay 
            loop 
            muted 
            playsInline 
          />
          <p className="text-lg text-muted-foreground">
            Here is the final result in action! The manual crank smoothly drives the central star, and the wave panel gives the fish their signature up-and-down swimming motion. Project success!
          </p>
        </div>

        {/* Block 4: Texte à gauche, Image à droite (inversé) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <img src={teamWorkingImg} alt="Team working on the project website" className="w-full md:w-1/3 h-auto rounded-lg shadow" />
          <p className="text-lg text-muted-foreground">
            With the physical build complete, the focus shifted to documenting our process. The team gathered to write the text and select the media for this website.
          </p>
        </div>

        {/* Block 5: Image à gauche, Texte à droite */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img src={vscodeScreenshotImg} alt="Screenshot of the website code in VS Code" className="w-full md:w-1/3 h-auto rounded-lg shadow" />
          <p className="text-lg text-muted-foreground">
            This screenshot shows the final code for the homepage in VS Code, right before pushing the completed project to Vercel for the world to see.
          </p>
        </div>

        {/* Block 6: Texte de fin (Texte à gauche, Image à droite (inversé)) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <img src={teamPhotoImg} alt="The project team" className="w-full md:w-1/3 h-auto rounded-lg shadow" />
          <p className="text-lg text-muted-foreground">
            This week was an incredible sprint, from basic tool initiation to a fully functional, documented project. We learned a ton, and we're proud of what we built together. Thanks for following our journey!
          </p>
        </div>
      </div>
    </DayDetailLayout>
  );
};

export default Day5;