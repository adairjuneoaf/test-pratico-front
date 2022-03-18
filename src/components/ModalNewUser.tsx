// Main Dependecies
import React, { FormEvent, useContext, useState } from "react";

// Styled Dependencies
import { FiSave, FiXCircle } from "react-icons/fi";

// Components
import Button from "./Button";

// Context Functions
import { ModalActions } from "../contexts/contextModalActions";

// Styled Dependecies
import Modal from "react-modal";

// Styles
import "../styles/global.scss";
import modalNewUserStyles from "../styles/components/modalnewuser.module.scss";
import toast from "react-hot-toast";

interface DataNewUserType {
  name?: string;
  fone?: string;
  email?: string;
  website?: string;
  occupation?: string;
}

Modal.setAppElement("#root");

const ModalNewUser: React.FC = () => {
  const [dataUser, setDataUser] = useState<DataNewUserType>({ name: "", fone: "", email: "", website: "", occupation: "" });

  const { handleOpenNewUserModal, closeNewUserModal } = useContext(ModalActions);

  function handleSubmitNewUser(event: FormEvent) {
    event.preventDefault();

    if (dataUser.name?.trim() === "") {
      return toast.error("Houve algum erro com o Nome, verifique por favor.");
    }
    if (dataUser.occupation?.trim() === "") {
      return toast.error("Houve algum erro com o Cargo, verifique por favor.");
    }
    if (dataUser.email?.trim() === "") {
      return toast.error("Houve algum erro com o E-mail, verifique por favor.");
    }
    if (dataUser.fone?.trim() === "") {
      return toast.error("Houve algum erro com o Telefone, verifique por favor.");
    }
    if (dataUser.website?.trim() === "") {
      return toast.error("Houve algum erro com o Website, verifique por favor.");
    }

    setDataUser({ ...dataUser });

    console.log(dataUser);

    closeNewUserModal();
    setDataUser({ name: "", email: "", fone: "", occupation: "", website: "" });
  }

  function handleResetFormNewUser(event: FormEvent) {
    event.preventDefault();

    setDataUser({ name: "", email: "", fone: "", occupation: "", website: "" });

    closeNewUserModal();
  }

  return (
    <Modal isOpen={handleOpenNewUserModal} onRequestClose={closeNewUserModal} closeTimeoutMS={300} overlayClassName="overlayReactModal" className="reactModal">
      <h2 className={modalNewUserStyles.titleModal}>Novo usuário</h2>
      <form className={modalNewUserStyles.formContent}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          placeholder="Meu nome"
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
          placeholder="Meu cargo"
          value={dataUser?.occupation}
          onChange={({ target }) => {
            setDataUser((data) => ({ ...data, occupation: target.value }));
          }}
        />
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          placeholder="meuemail@host.com.br"
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
          value={dataUser?.fone}
          onChange={({ target }) => {
            setDataUser((data) => ({ ...data, fone: target.value }));
          }}
          required
        />
        <label htmlFor="website">Website </label>
        <input
          type="url"
          id="website"
          placeholder="meuwebsite.com.br"
          value={dataUser?.website}
          onChange={({ target }) => {
            setDataUser((data) => ({ ...data, website: target.value }));
          }}
          required
        />

        <section className={modalNewUserStyles.buttonsActionForm}>
          <Button type="reset" onClick={handleResetFormNewUser} name="CANCELAR" typeAction="default" icon={<FiXCircle />} />
          <Button type="submit" onClick={handleSubmitNewUser} name="SALVAR" typeAction="save" icon={<FiSave />} />
        </section>
      </form>
    </Modal>
  );
};

export default ModalNewUser;
