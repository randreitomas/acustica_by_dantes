import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

/* Spec stack — Cormorant Garamond (headings), Jost (UI/body) */
import "@fontsource/cormorant-garamond/600.css"
import "@fontsource/cormorant-garamond/700.css"
import "@fontsource/cormorant-garamond/400-italic.css"
import "@fontsource/cormorant-garamond/600-italic.css"
import "@fontsource/cormorant-garamond/700-italic.css"
import "@fontsource/jost/400.css"
import "@fontsource/jost/500.css"
import "@fontsource/jost/600.css"

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
