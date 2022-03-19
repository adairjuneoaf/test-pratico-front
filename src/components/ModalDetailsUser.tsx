// Main Dependencies
import React, { useContext, useEffect, useState } from "react";

// Contexts Functions
import { ModalActions } from "../contexts/contextModalActions";

// Styled Dependencies
import Modal from "react-modal";
import { FiX } from "react-icons/fi";

// Styles
import modalDetailsUserStyles from "../styles/components/modaldetailsuser.module.scss";
import { useQuery } from "react-query";
import { getUniqueUser } from "../services/api";
import toast from "react-hot-toast";
import LoaderDots from "./LoaderDots";

// Typings[TypeScript]
// interface ModalDetailsUserProps {
//   id: number;
//   name: string;
//   email: string;
//   phone: string;
//   website: string;
//   company: {
//     bs: string;
//   };
// }

Modal.setAppElement("#root");

const ModalDetailsUser: React.FC = () => {
  const { handleOpenDetailsUserModal, closeDetailsUserModal, idSelectedOpenModalDetailsUser } = useContext(ModalActions);

  const [enabledQuery, setEnabledQuery] = useState(false);

  useEffect(() => {
    if (handleOpenDetailsUserModal) {
      setEnabledQuery(true);
    }
  }, [handleOpenDetailsUserModal]);

  const { data, isLoading, isError } = useQuery(["users", idSelectedOpenModalDetailsUser], () => getUniqueUser(idSelectedOpenModalDetailsUser), {
    enabled: enabledQuery,
    staleTime: 1000 * 30, // 30 Seconds
    refetchInterval: 1000 * 30, // 30 Seconds
    refetchOnWindowFocus: false,
  });

  if (isError) {
    toast.error("Erro na busca dos dados desse usuário!");
  }

  return (
    <Modal
      isOpen={handleOpenDetailsUserModal}
      onRequestClose={closeDetailsUserModal}
      closeTimeoutMS={300}
      overlayClassName="overlayReactModal"
      className="reactModalDetailsUser"
    >
      <button type="button" onClick={closeDetailsUserModal} className={modalDetailsUserStyles.buttonCloseModalStyles}>
        <FiX className={modalDetailsUserStyles.iconButtonCloseModal} />
      </button>
      <section className={modalDetailsUserStyles.sectionTitleStyles}>
        <h3>Detalhes do usuário</h3>
      </section>
      {isLoading ? (
        <LoaderDots width={56} height={64} />
      ) : (
        <form className={modalDetailsUserStyles.formContent}>
          <section className={modalDetailsUserStyles.sectionTopFormDetails}>
            <img src="/assets/svg/pic_profile_default.svg" alt="user_picture" />
            <div>
              <input type="text" id="name" className={modalDetailsUserStyles.importantInfo} value={data?.name} readOnly />
              <input type="text" id="occupation" className={modalDetailsUserStyles.ordinaryInfo} value={data?.company?.bs} readOnly />
            </div>
          </section>
          <section className={modalDetailsUserStyles.sectionMediumFormDetails}>
            <label htmlFor="email" className={modalDetailsUserStyles.labelInfo}>
              E-mail
            </label>
            <input type="text" id="email" className={modalDetailsUserStyles.ordinaryInfo} value={data?.email} readOnly />

            <label htmlFor="fone" className={modalDetailsUserStyles.labelInfo}>
              Telefone
            </label>
            <input type="text" id="fone" className={modalDetailsUserStyles.ordinaryInfo} value={data?.phone} readOnly />

            <label htmlFor="website" className={modalDetailsUserStyles.labelInfo}>
              Website
            </label>
            <input type="text" id="website" className={modalDetailsUserStyles.ordinaryInfo} value={data?.website} readOnly />
          </section>
        </form>
      )}
    </Modal>
  );
};

export default ModalDetailsUser;
