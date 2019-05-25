import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Accessibility and Forms</h1>
      <p>
        Make the form in public/index.html accessible. Refer to the WCAG
        documentation for compliance.
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
