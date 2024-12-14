import { createContext, ReactNode, useState, useEffect } from 'react';
import axiosClient from '../config/axiosClient';
import { Transaction } from '../config/types';

type TransactionContextType = {
  transactions: Transaction[] | null;
  fetchTransactions: () => Promise<void>;
};

const TransactionContext = createContext<TransactionContextType | null>(null);

type TransactionProviderProps = {
  children: ReactNode;
};

function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[] | null>(null);

  async function fetchTransactions() {
    try {
      const response = await axiosClient.get('/transactions'); // Ruta de tu API
      setTransactions(response.data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  const valueForContext = {
    transactions,
    fetchTransactions,
  };

  return (
    <TransactionContext.Provider value={valueForContext}>
      {children}
    </TransactionContext.Provider>
  );
}

export default TransactionProvider;
export { TransactionContext };
