import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from 'react-redux';
// import { store } from "./store";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.jsx";
// import { FirebaseProvider } from "./context/Firebase";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      {/* <FirebaseProvider> */}
        <App />
      {/* </FirebaseProvider> */}
    </ThemeProvider>
  </React.StrictMode>
);
