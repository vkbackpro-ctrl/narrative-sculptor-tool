import { Helmet } from "react-helmet";

const GlobalSEO = () => {
  return (
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
  );
};

export default GlobalSEO;
