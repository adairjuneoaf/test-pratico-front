// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";

// Styled Dependencies
import { Toaster } from "react-hot-toast";

// Components
import App from "./App";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ModalNewUser from "./components/ModalNewUser";
import ModalDetailsUser from "./components/ModalDetailsUser";

// Context Functions
import ModalActionsProvider from "./contexts/contextModalActions";

// Styles
import "../src/styles/global.scss";
import commonStyles from "./styles/common.module.scss";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <Toaster position="bottom-center" reverseOrder={false} toastOptions={{ className: "toastsAlerts", duration: 2500 }} />
    <QueryClientProvider client={queryClient}>
      <ModalActionsProvider>
        <ModalNewUser />
        <ModalDetailsUser />
        <header className={commonStyles.headerContainer}>
          <Header />
        </header>

        <App />
        <footer className={commonStyles.footerContainer}>
          <Footer name="Adair Juneo" portfolio="https://portfolio-adairjuneo.vercel.app/" />
        </footer>
      </ModalActionsProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
