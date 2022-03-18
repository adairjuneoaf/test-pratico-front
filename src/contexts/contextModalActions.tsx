// Main Dependencies
import React, { createContext, ReactNode, useState } from "react";

interface ModalActionsProviderProps {
  children: ReactNode;
}

interface ModalActionsProps {
  openNewUserModal: () => void;
  closeNewUserModal: () => void;
  handleOpenNewUserModal: boolean;
  openDetailsUserModal: () => void;
  closeDetailsUserModal: () => void;
  handleOpenDetailsUserModal: boolean;
}

export const ModalActions = createContext({} as ModalActionsProps);

const ModalActionsProvider: React.FC<ModalActionsProviderProps> = ({ children }) => {
  const [handleOpenNewUserModal, setHandleOpenNewUserModal] = useState(false);
  const [handleOpenDetailsUserModal, setHandleOpenDetailsUserModal] = useState(false);

  function openNewUserModal() {
    setHandleOpenNewUserModal(true);
  }

  function closeNewUserModal() {
    setHandleOpenNewUserModal(false);
  }

  function openDetailsUserModal() {
    setHandleOpenDetailsUserModal(true);
  }

  function closeDetailsUserModal() {
    setHandleOpenDetailsUserModal(false);
  }

  return (
    <ModalActions.Provider
      value={{ handleOpenNewUserModal, handleOpenDetailsUserModal, openNewUserModal, closeNewUserModal, openDetailsUserModal, closeDetailsUserModal }}
    >
      {children}
    </ModalActions.Provider>
  );
};

export default ModalActionsProvider;
