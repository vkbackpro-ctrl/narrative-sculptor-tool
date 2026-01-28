import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('root')!;

// Always use createRoot to avoid hydration mismatches
// The pre-rendered HTML is for SEO/crawlers, React takes over for interactivity
createRoot(container).render(<App />);
