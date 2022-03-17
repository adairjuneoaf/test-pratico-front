// Main Dependecies
import React from "react";

// Styled Dependencies
import { FiX, FiEdit } from "react-icons/fi";

// Styles
import tableUsersStyles from "../styles/components/tableusers.module.scss";
import Button from "./Button";

// Typings[TypeScript]
interface TableUserProps {
  name: string;
  email: string;
  occupation: string;
}

const TableUsers: React.FC = () => {
  return (
    <>
      <h1 className={tableUsersStyles.titleTable}>Controle de usuários</h1>
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
          <tr>
            <td className={tableUsersStyles.nameUser}>
              <button type="button" className={tableUsersStyles.buttonDetailsUser} title="Exibir detalhes de ''">
                Adair Juneo
              </button>
              <br />
              <span>Desenvolvedor</span>
            </td>
            <td className={tableUsersStyles.emailUser}>adair_juneo@hotmail.com</td>
            <td className={tableUsersStyles.buttonAction}>
              <Button name="Editar" icon={<FiEdit />} typeAction="edit" title="Editar usuário" />
              <Button name="Excluir" icon={<FiX />} typeAction="remove" title="Excluir usuário" />
            </td>
          </tr>
        </tbody>
      </table>
      <div className={tableUsersStyles.legendsAboutTable}>
        <p>* Clique no usuário para obter mais detalhes.</p>
      </div>
    </>
  );
};

export default TableUsers;
