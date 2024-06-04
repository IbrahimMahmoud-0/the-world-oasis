import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import isPropValid from "@emotion/is-prop-valid";

import { StyleSheetManager } from "styled-components";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ui/ErrorFallback.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.replace("/")}
      >
        <App />
      </ErrorBoundary>
    </StyleSheetManager>
  </React.StrictMode>
);
