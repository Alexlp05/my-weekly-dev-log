import DayDetailLayout from "@/components/DayDetailLayout";

// --- Imports des médias SANS LES RENOMMER ---

// Vidéos
import vuvuzelaPrintVideo from "@/assets/Day4/WhatsApp Vidéo 2025-10-24 à 13.39.29_3d303f57.mp4";
import carouselDemoVideo from "@/assets/Day4/WhatsApp Vidéo 2025-10-24 à 13.37.06_5a6739ae.mp4";
import vuvuzelaFailVideo from "@/assets/Day4/WhatsApp Vidéo 2025-10-24 à 13.37.07_89c1e866.mp4";

// Images
import slicerImg from "@/assets/Day4/566045865_1150440947184177_1495884221836723508_n.jpg";
import assemblyWorkshopImg from "@/assets/Day4/566516536_856104600089838_8312222788077120509_n.jpg";
import finishedPrintImg from "@/assets/Day4/566627468_25109625068654370_5708542860616577542_n.jpg";
import fishAssemblyDetailImg from "@/assets/Day4/IMG20251023151438.jpg";


const Day4 = () => {
  return (
    <DayDetailLayout day={4} date="Thursday" title="Day 4: Assembly and Testing">
      <div className="space-y-8">
        {/* Block 1: Image à gauche, Texte à droite */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img src={slicerImg} alt="Vouvouzela in Bambu Slicer" className="w-full md:w-1/3 h-auto rounded-lg shadow" />
          <p className="text-lg text-muted-foreground">
            We started a fun side project: 3D printing a Vouvouzela. Here are the parts laid out in the Bambu Lab slicer software, ready for printing.
          </p>
        </div>

        {/* Block 2: Texte à gauche, Vidéo à droite (inversé) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <video 
            src={vuvuzelaPrintVideo} 
            alt="Vuvuzela 3D print timelapse" 
            className="w-full md:w-1/3 h-auto rounded-lg shadow" 
            autoPlay 
            loop 
            muted 
            playsInline 
          />
          <p className="text-lg text-muted-foreground">
            We sent the file to the printer. This timelapse shows the Vouvouzela parts being printed quickly on the Bambu Lab machine.
          </p>
        </div>

        {/* Block 3: Image à gauche, Texte à droite */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img src={assemblyWorkshopImg} alt="Assembling the fish cutouts" className="w-full md:w-1/3 h-auto rounded-lg shadow" />
          <p className="text-lg text-muted-foreground">
            While the print was running, we focused on the main carousel assembly. We organized all the fish and support pieces that were cut on Day 3.
          </p>
        </div>

        {/* Block 4: Texte à gauche, Image à droite (inversé) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <img src={fishAssemblyDetailImg} alt="Complex fish folding" className="w-full md:w-1/3 h-auto rounded-lg shadow" />
          <p className="text-lg text-muted-foreground">
            The assembly was quite detailed. Each fish was made of multiple scored and folded parts, requiring patience and precision to glue together correctly.
          </p>
        </div>
        
        {/* Block 5: Vidéo à gauche, Texte à droite */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          <video 
            src={carouselDemoVideo} 
            alt="First carousel demo" 
            className="w-full md:w-1/3 h-auto rounded-lg shadow" 
            autoPlay 
            loop 
            muted 
            playsInline 
          />
          <p className="text-lg text-muted-foreground">
            This was the best moment: the first successful test of the fully assembled carousel! The crank, base, wave, and fish all moved together just as planned.
          </p>
        </div>

        {/* Block 6: Texte à gauche, Vidéo à droite (inversé) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <video 
            src={vuvuzelaFailVideo} 
            alt="Failed Vuvuzela test" 
            className="w-full md:w-1/3 h-auto rounded-lg shadow" 
            autoPlay 
            loop 
            muted 
            playsInline 
          />
          <p className="text-lg text-muted-foreground">
            And the final result of our 3D printed side project? A complete failure! The Vouvouzela made absolutely no sound, but it gave us a great laugh.
          </all>
        </div>
      </div>
    </DayDetailLayout>
  );
};

export default Day4;