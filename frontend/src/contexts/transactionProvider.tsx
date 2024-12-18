import { createContext, ReactNode, useState, useEffect } from 'react';
import axiosClient from '../config/axiosClient';
import { Transaction } from '../config/types';

// 1. Definimos el tipo del contexto
type TransactionContextType = {
  transactions: Transaction[] | null;
  fetchTransactions: () => Promise<void>;
  addTransaction: (newTransaction: Transaction) => void;
};

const TransactionContext = createContext<TransactionContextType | null>(null);

type TransactionProviderProps = {
  children: ReactNode;
};

function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[] | null>(null);

  // Función para obtener transacciones desde la API
  async function fetchTransactions() {
    try {
      const response = await axiosClient.get('/transactions'); // Ruta de tu API
      setTransactions(response.data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  }

  // Función para agregar una nueva transacción
  const addTransaction = (newTransaction: Transaction) => {
    setTransactions((prevTransactions) => 
      prevTransactions ? [...prevTransactions, newTransaction] : [newTransaction]
    );
  };

  const removeTransaction = (id: number) => {
    
  };
  const editTransaction = () => {};

  useEffect(() => {
    fetchTransactions();
  }, []);

  // Valor proporcionado por el contexto
  const valueForContext = {
    transactions,
    fetchTransactions,
    addTransaction,
    removeTransaction,
    editTransaction
  };

  return (
    <TransactionContext.Provider value={valueForContext}>
      {children}
    </TransactionContext.Provider>
  );
}

export default TransactionProvider;
export { TransactionContext };
