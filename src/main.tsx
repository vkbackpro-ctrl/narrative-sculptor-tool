import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes";
import "./index.css";

export const createRoot = ViteReactSSG(
  { routes },
  ({ isClient }) => {
    // Configuration côté client uniquement
    if (isClient) {
      // Client-side specific setup
    }
  }
);
