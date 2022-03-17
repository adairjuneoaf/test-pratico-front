// Dependencies
import React from "react";
import TableUsers from "./components/TableUsers";

// Components

// Styles
import commonStyles from "./styles/common.module.scss";

const App: React.FC = () => {
  return (
    <>
      <main className={commonStyles.mainContainer}>
        <TableUsers />
      </main>
    </>
  );
};

export default App;
