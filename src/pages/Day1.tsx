import DayDetailLayout from "@/components/DayDetailLayout";

const Day1 = () => {
  return (
    <DayDetailLayout day={1} date="Lundi" title="Lancement du projet et technique de découpe">
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4">Déroulé de la journée</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cette première journée a été consacrée à poser les fondations du projet. 
            Entre formation et initiation aux machines de découpe (Laser et Cricut), l'équipe a acquis les compétences nécessaires pour avancer.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Projet</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            La matinée a été dédiée à l'analyse approfondie des besoins du projet. 
            J'ai identifié les fonctionnalités essentielles, les contraintes techniques 
            et les attentes des utilisateurs finaux.
          </p>
          
          <div className="bg-secondary/50 rounded-lg p-6 my-6">
            <h3 className="text-xl font-semibold mb-3">Points clés identifiés :</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>✓ Définition du périmètre fonctionnel</li>
              <li>✓ Identification des technologies appropriées</li>
              <li>✓ Estimation des ressources nécessaires</li>
              <li>✓ Planification des étapes de développement</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Conception et maquettes</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            L'après-midi a été consacré à la création des maquettes et wireframes. 
            Cette étape cruciale permet de visualiser l'interface utilisateur et 
            de valider les choix de design avant de commencer le développement.
          </p>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-card">
          <h3 className="text-2xl font-bold mb-4">Exemple de vidéo explicative</h3>
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/yBQMuExWIFs"
              title="Exemple de vidéo explicative"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Bilan de la journée</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cette première journée s'est conclue avec succès. Tous les documents 
            de conception sont prêts et l'équipe a une vision claire du projet 
            à réaliser. Demain, place au développement !
          </p>
        </section>
      </div>
    </DayDetailLayout>
  );
};

export default Day1;
