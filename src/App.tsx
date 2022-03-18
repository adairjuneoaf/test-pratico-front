// Main Dependencies
import React, { useContext } from "react";

// Styled Dependencies
import { FiUserPlus } from "react-icons/fi";

// Components
import ListTableUsers from "./components/ListTableUsers";

// Context Functions
import { ModalActions } from "./contexts/contextModalActions";

// Styles
import Button from "./components/Button";
import ModalNewUser from "./components/ModalNewUser";
import commonStyles from "./styles/common.module.scss";
import tableUsersStyles from "./styles/components/tableusers.module.scss";

// Typings[TypeScript]
interface ListTableUsersProps {
  id: string;
  name: string;
  email: string;
  occupation: string;
}

const data = [
  {
    id: "001",
    name: "Adair Juneo",
    email: "adair_juneo@hotmail.com",
    occupation: "Desenvolvedor WEB",
  },
  {
    id: "002",
    name: "João da Silva",
    email: "joao_silva@hotmail.com",
    occupation: "Diretor Executivo",
  },
  {
    id: "003",
    name: "Mayara Müller",
    email: "mayara_muller@hotmail.com",
    occupation: "Diretor de Finanças",
  },
];

const App: React.FC = () => {
  const { openNewUserModal } = useContext(ModalActions);

  function openModal() {
    openNewUserModal();
  }

  return (
    <>
      <ModalNewUser />
      <main className={commonStyles.mainContainer}>
        <section className={tableUsersStyles.titleTable}>
          <h1>Controle de usuários</h1>
          <Button type="button" onClick={openModal} name="Novo usuário" typeAction="save" icon={<FiUserPlus />} />
        </section>
        <table className={tableUsersStyles.tableContent}>
          <thead>
            <tr>
              <th>
                Usuário
                <br />
                <span>Ocupação</span>
              </th>
              <th>E-mail</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((user: ListTableUsersProps) => (
              <ListTableUsers key={user.id} {...user} />
            ))}
          </tbody>
        </table>
        <div className={tableUsersStyles.legendsAboutTable}>
          <p>* Clique no usuário para obter mais detalhes.</p>
        </div>
      </main>
    </>
  );
};

export default App;
