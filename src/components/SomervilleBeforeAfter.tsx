import BeforeAfterSlider from "./BeforeAfterSlider";
import FadeInSection from "./FadeInSection";
import beforeImage from "@/assets/somerville-avant-refonte.jpg";
import afterImage from "@/assets/somerville-apres-refonte.jpg";

const SomervilleBeforeAfter = () => {
  return (
    <section className="section-container bg-muted/20">
      <FadeInSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Refonte Somerville Media : Une Transformation Complète
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment nous avons modernisé le site de cette agence de production vidéo avec un design épuré, une navigation optimisée et une expérience utilisateur repensée
          </p>
        </div>
      </FadeInSection>

      <div className="max-w-4xl mx-auto">
        <FadeInSection scale>
          <BeforeAfterSlider
            beforeImage={beforeImage}
            afterImage={afterImage}
            beforeLabel="Avant"
            afterLabel="Après"
          />
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">+150%</div>
              <p className="text-muted-foreground">Taux de conversion</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">-40%</div>
              <p className="text-muted-foreground">Temps de chargement</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">+200%</div>
              <p className="text-muted-foreground">Engagement visiteurs</p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default SomervilleBeforeAfter;
