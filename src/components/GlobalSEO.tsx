import { Helmet } from "react-helmet";

const GlobalSEO = () => {
  return (
    <Helmet>
      {/* Autoriser l'indexation par les moteurs de recherche */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Open Graph par défaut */}
      <meta property="og:site_name" content="VKBack - Agence Web Lyon" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      
      {/* Geo tags pour SEO local */}
      <meta name="geo.region" content="FR-69" />
      <meta name="geo.placename" content="Lyon" />
      <meta name="geo.position" content="45.764043;4.835659" />
      <meta name="ICBM" content="45.764043, 4.835659" />
    </Helmet>
  );
};

export default GlobalSEO;
