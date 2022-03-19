// Main Dependecies
import React, { FormEvent, useContext, useState } from "react";
import { useMutation, useQueryClient } from "react-query";

// Services Dependencies
import { insertUniqueUser } from "../services/api";

// Styled Dependencies
import Modal from "react-modal";
import toast from "react-hot-toast";
import { FiSave, FiXCircle } from "react-icons/fi";

// Components
import Button from "./Button";

// Context Functions
import { ModalActions } from "../contexts/contextModalActions";

// Styles
import "../styles/global.scss";
import modalNewUserStyles from "../styles/components/modalnewuser.module.scss";

// interface DataNewUserType {
//   name?: string;
//   fone?: string;
//   email?: string;
//   website?: string;
//   occupation?: string;
// }

interface DataNewUserType {
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    bs?: string;
  };
}

Modal.setAppElement("#root");

const ModalNewUser: React.FC = () => {
  const [dataUser, setDataUser] = useState<DataNewUserType>({ name: "", phone: "", email: "", website: "", company: { bs: "" } });

  const { handleOpenNewUserModal, closeNewUserModal } = useContext(ModalActions);

  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(insertUniqueUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");

      closeNewUserModal();
      setDataUser({ name: "", email: "", phone: "", website: "", company: { bs: "" } });
    },
    onError: () => {
      toast.error("Houve algum erro ao tentar criar esse usuário!");
    },
  });

  async function handleSubmitNewUser(event: FormEvent) {
    event.preventDefault();

    // Validation data for submit form
    if (dataUser.name?.trim() === "") {
      return toast.error("Houve algum erro com o Nome, verifique por favor.");
    }

    if (dataUser.email?.trim() === "") {
      return toast.error("Houve algum erro com o E-mail, verifique por favor.");
    }

    if (dataUser.phone?.trim() === "") {
      return toast.error("Houve algum erro com o Telefone, verifique por favor.");
    }

    if (dataUser.website?.trim() === "") {
      return toast.error("Houve algum erro com o Website, verifique por favor.");
    }

    await mutateAsync({ ...dataUser });
  }

  function handleResetFormNewUser(event: FormEvent) {
    event.preventDefault();

    setDataUser({ name: "", email: "", phone: "", website: "", company: { bs: "" } });

    closeNewUserModal();
  }

  return (
    <Modal
      isOpen={handleOpenNewUserModal}
      onRequestClose={closeNewUserModal}
      closeTimeoutMS={300}
      overlayClassName="overlayReactModal"
      className="reactModalNewUser"
    >
      <h2 className={modalNewUserStyles.titleModal}>Novo usuário</h2>
      <form className={modalNewUserStyles.formContent}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          placeholder="Fulano Beltrano"
          value={dataUser?.name}
          onChange={({ target }) => {
            setDataUser((data) => ({ ...data, name: target.value }));
          }}
          required
        />
        <label htmlFor="occupation">Cargo </label>
        <input
          type="text"
          id="occupation"
          placeholder="Cargo ou ocupação"
          value={dataUser?.company.bs}
          onChange={({ target }) => {
            setDataUser((data) => ({ ...data, company: { bs: target.value } }));
          }}
        />
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          placeholder="email@host.com.br"
          value={dataUser?.email}
          onChange={({ target }) => {
            setDataUser((data) => ({ ...data, email: target.value }));
          }}
          required
        />
        <label htmlFor="fone">Telefone </label>
        <input
          type="number"
          id="fone"
          placeholder="99 9 9999 9999"
          value={dataUser?.phone}
          onChange={({ target }) => {
            setDataUser((data) => ({ ...data, phone: target.value }));
          }}
          required
        />
        <label htmlFor="website">Website </label>
        <input
          type="url"
          id="website"
          placeholder="usuariowebsite.com.br"
          value={dataUser?.website}
          onChange={({ target }) => {
            setDataUser((data) => ({ ...data, website: target.value }));
          }}
          required
        />

        <section className={modalNewUserStyles.buttonsActionForm}>
          <Button type="reset" onClick={handleResetFormNewUser} name="CANCELAR" typeAction="default" icon={<FiXCircle />} />
          <Button type="submit" onClick={handleSubmitNewUser} name="SALVAR" typeAction="save" icon={<FiSave />} isLoading={isLoading} />
        </section>
      </form>
    </Modal>
  );
};

export default ModalNewUser;
