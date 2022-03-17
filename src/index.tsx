// Dependencies
import React from "react";
import ReactDOM from "react-dom";

// Components
import App from "./App";
import Footer from "./components/Footer";
import Header from "./components/Header";

// Styles
import "../src/styles/global.scss";
import commonStyles from "./styles/common.module.scss";

ReactDOM.render(
  <React.StrictMode>
    <header className={commonStyles.headerContainer}>
      <Header />
    </header>
    <App />
    <footer className={commonStyles.footerContainer}>
      <Footer name="Adair Juneo" portfolio="https://portfolio-adairjuneo.vercel.app/" />
    </footer>
  </React.StrictMode>,
  document.getElementById("root")
);
