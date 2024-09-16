import { createContext, useContext, useMemo } from "react";

import useDialog from "./useDialog";

export const DialogContext = createContext();

export function DialogContextProvider({ children }) {
  const { ref, onOpen, onClose, dialogData } = useDialog();

  const contextValue = useMemo(
    () => ({
      ref,
      onOpen,
      onClose,
      dialogData,
    }),
    [ref, onOpen, onClose, dialogData, dialogData]
  );

  return (
    <DialogContext.Provider value={contextValue}>
      {children}
    </DialogContext.Provider>
  );
}

export function useDialogContext() {
  const context = useContext(DialogContext);

  if (!context) {
    throw Error("DialogContext should be used in DialogProvider");
  }

  return context;
}
