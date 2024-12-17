import { useContext } from "react";
import { TransactionContext } from "../contexts/transactionProvider";

const useTransactionContext = () => {
  const context = useContext(TransactionContext);
  if (!context) throw new Error("useTransactionContext must be used within a TransactionProvider");
  return context;
};

export default useTransactionContext;
