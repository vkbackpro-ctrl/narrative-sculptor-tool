import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Composant qui redirige automatiquement les URLs avec trailing slash
 * vers leur version sans trailing slash pour éviter les doublons SEO
 */
const TrailingSlashRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Si le path a un trailing slash (sauf pour la racine "/")
    if (location.pathname !== '/' && location.pathname.endsWith('/')) {
      // Rediriger vers la version sans trailing slash
      const newPath = location.pathname.slice(0, -1);
      navigate(newPath + location.search + location.hash, { replace: true });
    }
  }, [location, navigate]);

  return null;
};

export default TrailingSlashRedirect;
