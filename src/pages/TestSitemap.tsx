import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";

const TestSitemap = () => {
  return (
    <>
      <Helmet>
        <title>Page de Test Sitemap - VKBack</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow flex items-center justify-center py-20">
          <div className="text-center max-w-2xl mx-auto px-4">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Page de Test Sitemap</h1>
            <p className="text-muted-foreground mb-8">
              Cette page a été créée pour vérifier que le sitemap XML se génère automatiquement 
              à partir de <code className="bg-muted px-2 py-1 rounded">src/config/routes.ts</code>
            </p>
            
            <div className="bg-muted/50 rounded-lg p-6 text-left mb-8">
              <h2 className="font-semibold mb-3">Pour vérifier :</h2>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>Ouvrez <code className="bg-background px-1 rounded">/sitemap.xml</code> pour voir le sitemap XML</li>
                <li>Ouvrez <code className="bg-background px-1 rounded">/sitemap</code> pour voir le plan de site HTML</li>
                <li>Vérifiez que cette page apparaît dans les deux</li>
              </ol>
            </div>

            <div className="flex gap-4 justify-center">
              <Link 
                to="/sitemap" 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Voir le Plan du Site
              </Link>
              <Link 
                to="/" 
                className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TestSitemap;
