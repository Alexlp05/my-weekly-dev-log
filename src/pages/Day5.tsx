import DayDetailLayout from "@/components/DayDetailLayout";
import { ImageHero, ImageGallery } from "@/components/ImageBlocks";

const Day5 = () => {
  return (
    <DayDetailLayout day={5} date="Vendredi" title="Tests et déploiement">
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4">Tests end-to-end</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Dernière journée dédiée à la validation complète de l'application.
            Tests exhaustifs de tous les parcours utilisateur et correction
            des derniers bugs identifiés.
          </p>
        </section>

        <section className="bg-card rounded-lg p-6 shadow-card">
          <h3 className="text-2xl font-bold mb-4">Scénarios testés</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-primary">Parcours utilisateur</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>✓ Navigation complète de l'application</li>
                <li>✓ Formulaires et validations</li>
                <li>✓ Gestion des erreurs</li>
                <li>✓ Responsive sur tous les appareils</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-primary">Tests techniques</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>✓ Performance et optimisation</li>
                <li>✓ Compatibilité navigateurs</li>
                <li>✓ Sécurité et validation</li>
                <li>✓ SEO et métadonnées</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Correction des bugs</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Les tests ont permis d'identifier quelques problèmes mineurs qui ont
            été rapidement corrigés. Voici un aperçu des corrections apportées :
          </p>
          
          <div className="space-y-3">
            <div className="bg-secondary/50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <span className="text-destructive font-bold">Bug #1</span>
                <div>
                  <p className="font-semibold">Navigation mobile</p>
                  <p className="text-sm text-muted-foreground">
                    Le menu ne se fermait pas correctement sur mobile → Corrigé ✓
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <span className="text-destructive font-bold">Bug #2</span>
                <div>
                  <p className="font-semibold">Chargement des images</p>
                  <p className="text-sm text-muted-foreground">
                    Optimisation du lazy loading pour de meilleures performances → Corrigé ✓
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Déploiement</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Après validation complète, l'application est prête pour le déploiement.
            Configuration de l'environnement de production et mise en ligne.
          </p>
          
          <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-6">
            <h4 className="font-bold text-lg mb-2">🚀 Application en ligne !</h4>
            <p className="text-muted-foreground">
              Le projet est maintenant accessible publiquement. Tous les objectifs
              de la semaine ont été atteints avec succès.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Documentation</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Rédaction de la documentation technique et utilisateur. Cette documentation
            facilitera la maintenance et les évolutions futures du projet.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Galerie d'images</h2>
          <ImageHero src="/images/hero-day5.jpg" heading="Jour 5" subheading="Déploiement" />
          <div className="mt-6">
            <ImageGallery
              variant="cards"
              items={[
                { src: "/images/day5-1.jpg", alt: "Deploy 1", title: "Pré-prod", description: "Environnement pré-production", caption: "Validation finale" },
                { src: "/images/day5-2.jpg", alt: "Deploy 2", title: "Prod", description: "Mise en production", caption: "URL publique" },
                { src: "/images/day5-3.jpg", alt: "Deploy 3", title: "Monitoring", description: "Surveillance", caption: "Alertes en place" },
              ]}
            />
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">🎉 Projet terminé !</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une semaine intensive qui s'achève avec succès. De la conception initiale
            au déploiement final, chaque étape a été soigneusement planifiée et exécutée.
            Le résultat est une application performante, accessible et prête pour la production.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Apprentissages et perspectives</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cette semaine m'a permis de consolider mes compétences en développement
            web moderne et de découvrir de nouvelles approches. Les prochaines étapes
            incluent l'ajout de nouvelles fonctionnalités basées sur les retours utilisateurs
            et l'optimisation continue de l'expérience.
          </p>
        </section>
      </div>
    </DayDetailLayout>
  );
};

export default Day5;
