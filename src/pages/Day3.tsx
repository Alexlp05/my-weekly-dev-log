import DayDetailLayout from "@/components/DayDetailLayout";

// Importez vos images et vidéos ici
import laserDesignImg from "@/assets/Day3/IMG20251022144148.jpg";
import laserCutVideo from "@/assets/Day3/VID20251022144616~2.mp4";
import cricutCutVideo from "@/assets/Day3/WhatsApp Vidéo 2025-10-24 à 12.40.09_41662ecf.mp4";
import firstTestVideo from "@/assets/Day3/premier_test_carrousel.mp4";

const Day3 = () => {
  return (
    <DayDetailLayout day={3} date="Wednesday" title="Day 3: Part Production and Testing">
      <div className="space-y-8">
        {/* Block 1: Image à gauche, Texte à droite */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img src={laserDesignImg} alt="Laser cutter file preparation" className="w-full md:w-1/3 h-auto rounded-lg shadow" />
          <p className="text-lg text-muted-foreground">
            The day started with finalizing the designs for the laser cutter. Here, the star-shaped central mechanism is being prepared in the software, ensuring all lines are correct for cutting and scoring.
          </p>
        </div>

        {/* Block 2: Texte à gauche, Vidéo à droite (inversé) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <video 
            src={laserCutVideo} 
            alt="Laser cutter timelapse" 
            className="w-full md:w-1/3 h-auto rounded-lg shadow" 
            autoPlay 
            loop 
            muted 
            playsInline 
          />
          <p className="text-lg text-muted-foreground">
            With the file ready, we moved to the laser cutter. This timelapse shows the machine precisely cutting the central wooden parts from plywood based on our digital design.
          </p>
        </div>

        {/* Block 3: Vidéo à gauche, Texte à droite */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <video 
            src={cricutCutVideo} 
            alt="Cricut cutting cardboard" 
            className="w-full md:w-1/3 h-auto rounded-lg shadow" 
            autoPlay 
            loop 
            muted 
            playsInline 
          />
          <p className="text-lg text-muted-foreground">
            Simultaneously, we used the Cricut for the cardstock components. This video shows it cutting the wavy side panels that will form the carousel's main body.
          </p>
        </div>

        {/* Block 4: Texte à gauche, Vidéo à droite (inversé) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <video 
            src={firstTestVideo} 
            alt="First carousel mechanism test" 
            className="w-full md:w-1/3 h-auto rounded-lg shadow" 
            autoPlay 
            loop 
            muted 
            playsInline 
          />
          <p className="text-lg text-muted-foreground">
            With the main parts cut, we did a quick dry-fit. This first test shows the central star mechanism and the wavy base rotating together, validating our core design.
          </p>
        </div>
      </div>
    </DayDetailLayout>
  );
};

export default Day3;