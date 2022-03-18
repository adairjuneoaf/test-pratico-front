// Dependencies
import React from "react";
import ReactDOM from "react-dom";

// Styled Dependencies
import { Toaster } from "react-hot-toast";

// Components
import App from "./App";
import Footer from "./components/Footer";
import Header from "./components/Header";

// Context Functions
import ModalActionsProvider from "./contexts/contextModalActions";

// Styles
import "../src/styles/global.scss";
import commonStyles from "./styles/common.module.scss";

ReactDOM.render(
  <React.StrictMode>
    <Toaster position="bottom-center" reverseOrder={false} toastOptions={{ className: "toastsAlerts", duration: 2500 }} />
    <ModalActionsProvider>
      <header className={commonStyles.headerContainer}>
        <Header />
      </header>

      <App />
      <footer className={commonStyles.footerContainer}>
        <Footer name="Adair Juneo" portfolio="https://portfolio-adairjuneo.vercel.app/" />
      </footer>
    </ModalActionsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
