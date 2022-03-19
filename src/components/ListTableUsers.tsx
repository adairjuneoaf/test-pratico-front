// Main Dependencies
import React, { memo, useContext } from "react";

// Styled Dependencies
import { FiEdit, FiX } from "react-icons/fi";

// Contexts Functions
import { ModalActions } from "../contexts/contextModalActions";

// Components
import Button from "./Button";

// Styles
import tableUsersStyles from "../styles/components/tableusers.module.scss";

// Typings[TypeScript]
interface ListTableUsersProps {
  id: number;
  name: string;
  email: string;
  company: {
    bs: string;
  };
}

const ListTableUsers: React.FC<ListTableUsersProps> = ({ id, name, email, company }) => {
  const { openDetailsUserModal } = useContext(ModalActions);

  return (
    <React.Fragment>
      <tr>
        <td className={tableUsersStyles.nameUser}>
          <button
            type="button"
            onClick={() => {
              openDetailsUserModal(id);
            }}
            className={tableUsersStyles.buttonDetailsUser}
            title="Exibir detalhes de ''"
          >
            {name}
          </button>
          <br />
          <span>{company.bs}</span>
        </td>
        <td className={tableUsersStyles.emailUser}>{email}</td>
        <td className={tableUsersStyles.buttonAction}>
          <Button type="button" icon={<FiEdit />} typeAction="edit" title="Editar usuário" />
          <Button type="button" icon={<FiX />} typeAction="remove" title="Excluir usuário" />
        </td>
      </tr>
    </React.Fragment>
  );
};

export default memo(ListTableUsers);
