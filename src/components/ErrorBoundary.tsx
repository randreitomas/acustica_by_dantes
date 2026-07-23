import { Component, type ErrorInfo, type ReactNode } from "react"

type Props = { children: ReactNode }
type State = { error: Error | null }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Acustica render error:", error, info.componentStack)
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            minHeight: "100svh",
            padding: "2rem",
            background: "#F5EEDD",
            color: "#2E2118",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          <h1 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>
            Something broke while loading Acustica
          </h1>
          <pre
            style={{
              whiteSpace: "pre-wrap",
              background: "#EDE1C9",
              padding: "1rem",
              borderRadius: 8,
              fontSize: 13,
            }}
          >
            {this.state.error.message}
          </pre>
        </div>
      )
    }

    return this.props.children
  }
}
