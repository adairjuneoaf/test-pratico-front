// Main Dependencies
import React, { memo } from "react";

// Styled Dependencies
import { FiEdit, FiX } from "react-icons/fi";

// Components
import Button from "./Button";

// Styles
import tableUsersStyles from "../styles/components/tableusers.module.scss";

// Typings[TypeScript]
interface ListTableUsersProps {
  id: string;
  name: string;
  email: string;
  occupation: string;
}

const ListTableUsers: React.FC<ListTableUsersProps> = ({ id, name, email, occupation }) => {
  return (
    <tr>
      <td className={tableUsersStyles.nameUser}>
        <button type="button" className={tableUsersStyles.buttonDetailsUser} title="Exibir detalhes de ''">
          {name}
        </button>
        <br />
        <span>{occupation}</span>
      </td>
      <td className={tableUsersStyles.emailUser}>{email}</td>
      <td className={tableUsersStyles.buttonAction}>
        <Button name="Editar" icon={<FiEdit />} typeAction="edit" title="Editar usuário" />
        <Button name="Excluir" icon={<FiX />} typeAction="remove" title="Excluir usuário" />
      </td>
    </tr>
  );
};

export default memo(ListTableUsers);
