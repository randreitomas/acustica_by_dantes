import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

/* Local fonts — reliable in offline / sandboxed previews */
import "@fontsource/plus-jakarta-sans/400.css"
import "@fontsource/plus-jakarta-sans/500.css"
import "@fontsource/plus-jakarta-sans/600.css"
import "@fontsource/cormorant-garamond/700.css"
import "@fontsource/cormorant-garamond/400-italic.css"
import "@fontsource/cormorant-garamond/700-italic.css"
import "@fontsource/fraunces/600.css"

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
