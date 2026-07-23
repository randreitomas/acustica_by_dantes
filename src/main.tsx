import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

/* Local fonts — reliable in offline / sandboxed previews */
import "@fontsource/plus-jakarta-sans/400.css"
import "@fontsource/plus-jakarta-sans/500.css"
import "@fontsource/plus-jakarta-sans/600.css"
import "@fontsource/plus-jakarta-sans/700.css"
import "@fontsource/plus-jakarta-sans/800.css"
import "@fontsource/cormorant-garamond/400-italic.css"
import "@fontsource/cormorant-garamond/500-italic.css"
import "@fontsource/cormorant-garamond/600-italic.css"
import "@fontsource/cormorant-garamond/700-italic.css"
import "@fontsource/allura/400.css"
import "@fontsource/im-fell-english/400.css"
import "@fontsource/oswald/400.css"
import "@fontsource/oswald/500.css"
import "@fontsource/oswald/600.css"

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
