// Main Dependencies
import React, { createContext, ReactNode, useState } from "react";

// Typing[TypeScript]
interface ModalActionsProviderProps {
  children: ReactNode;
}

interface ModalActionsProps {
  openNewUserModal: () => void;
  closeNewUserModal: () => void;
  handleOpenNewUserModal: boolean;
  closeDetailsUserModal: () => void;
  handleOpenDetailsUserModal: boolean;
  idSelectedOpenModalDetailsUser: number;
  openDetailsUserModal: (id: number) => void;
}

export const ModalActions = createContext({} as ModalActionsProps);

const ModalActionsProvider: React.FC<ModalActionsProviderProps> = ({ children }) => {
  const [handleOpenNewUserModal, setHandleOpenNewUserModal] = useState<boolean>(false);
  const [handleOpenDetailsUserModal, setHandleOpenDetailsUserModal] = useState<boolean>(false);
  const [idSelectedOpenModalDetailsUser, setIdSelectedOpenModalDetailsUser] = useState<number>(0);

  function openNewUserModal() {
    setHandleOpenNewUserModal(true);
  }

  function closeNewUserModal() {
    setHandleOpenNewUserModal(false);
  }

  function openDetailsUserModal(id: number) {
    setHandleOpenDetailsUserModal(true);
    setIdSelectedOpenModalDetailsUser(id);
  }

  function closeDetailsUserModal() {
    setHandleOpenDetailsUserModal(false);
  }

  return (
    <ModalActions.Provider
      value={{
        openNewUserModal,
        closeNewUserModal,
        openDetailsUserModal,
        closeDetailsUserModal,
        handleOpenNewUserModal,
        handleOpenDetailsUserModal,
        idSelectedOpenModalDetailsUser,
      }}
    >
      {children}
    </ModalActions.Provider>
  );
};

export default ModalActionsProvider;
