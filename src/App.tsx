// Main Dependencies
import React, { useContext } from "react";
import { useQuery } from "react-query";

// Services Dependencies
import { getAllUsers } from "./services/api";

// Styled Dependencies
import { FiUserPlus } from "react-icons/fi";
import LoaderDots from "./components/LoaderDots";

// Components
import Button from "./components/Button";
import ListTableUsers from "./components/ListTableUsers";

// Context Functions
import { ModalActions } from "./contexts/contextModalActions";

// Styles
import commonStyles from "./styles/common.module.scss";
import tableUsersStyles from "./styles/components/tableusers.module.scss";

// Typings[TypeScript]
type DataFetchedAPI = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    bs: string;
  };
};

const App: React.FC = () => {
  const { openNewUserModal } = useContext(ModalActions);

  const { data, status, isLoading, isSuccess, isError } = useQuery("users", getAllUsers, {
    cacheTime: 1000 * 60 * 1, // 1 Minute
    staleTime: 1000 * 30, // 30 Seconds
    refetchInterval: 1000 * 30, // 30 Seconds
    refetchOnWindowFocus: true,
    retry: false,
  });

  console.log(status);

  return (
    <React.Fragment>
      <main className={commonStyles.mainContainer}>
        <section className={tableUsersStyles.titleTable}>
          <h1>Controle de usuários</h1>
          <Button type="button" onClick={openNewUserModal} name="Novo usuário" typeAction="save" icon={<FiUserPlus />} />
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
            {isLoading ? (
              <tr>
                <td colSpan={3}>
                  <LoaderDots width={64} height={128} />
                </td>
              </tr>
            ) : (
              isSuccess && data.map((user: DataFetchedAPI) => <ListTableUsers key={user.id} {...user} />)
            )}

            {isError && (
              <tr>
                <td colSpan={3} style={{ textAlign: "left", fontStyle: "italic" }}>
                  Erro fetch data all users in API.
                </td>
              </tr>
            )}

            {!data?.length && (
              <tr>
                <td colSpan={3} style={{ textAlign: "left", fontStyle: "italic" }}>
                  There is no registered data in API.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className={tableUsersStyles.legendsAboutTable}>
          <p>* Clique no usuário para obter mais detalhes.</p>
        </div>
      </main>
    </React.Fragment>
  );
};

export default App;
