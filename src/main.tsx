import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

/* Vintage stack — Playfair (display), Oswald (poster), Lora (body) */
import "@fontsource/playfair-display/700.css"
import "@fontsource/playfair-display/400-italic.css"
import "@fontsource/playfair-display/700-italic.css"
import "@fontsource/oswald/500.css"
import "@fontsource/oswald/600.css"
import "@fontsource/lora/400.css"
import "@fontsource/lora/500.css"
import "@fontsource/lora/600.css"

import "./index.css"
import App from "./App.tsx"
import { ErrorBoundary } from "./components/ErrorBoundary.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
)
