// Main Dependencies
import React, { memo, useContext } from "react";
import { useMutation, useQueryClient } from "react-query";

// Services Dependencies
import { deleteUniqueUser } from "../services/api";

// Styled Dependencies
import { FiEdit, FiX } from "react-icons/fi";

// Contexts Functions
import { ModalActions } from "../contexts/contextModalActions";

// Components
import Button from "./Button";

// Styles
import tableUsersStyles from "../styles/components/tableusers.module.scss";
import toast from "react-hot-toast";

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

  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(deleteUniqueUser, {
    retry: false,
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
    onError: () => {
      toast.error("Houve algum erro ao tentar excluir esse usuário!");
    },
  });

  async function handleDeleteUser(id: number) {
    await mutateAsync(id);
  }

  async function handleEditUser() {
    return toast("Em desenvolvimento...", { icon: "👀" });
  }

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
            title={`Exibir detalhes de ${name}`}
          >
            {name.toLowerCase()}
          </button>
          <br />
          <span>{company.bs.trim() === "" ? "Cargo Indefinido" : company.bs}</span>
        </td>
        <td className={tableUsersStyles.emailUser}>{email}</td>
        <td className={tableUsersStyles.buttonAction}>
          <Button type="button" onClick={handleEditUser} icon={<FiEdit />} typeAction="edit" title="Editar usuário" />
          <Button
            type="button"
            onClick={() => {
              handleDeleteUser(id);
            }}
            icon={<FiX />}
            isLoading={isLoading}
            typeAction="remove"
            title="Excluir usuário"
          />
        </td>
      </tr>
    </React.Fragment>
  );
};

export default memo(ListTableUsers);
