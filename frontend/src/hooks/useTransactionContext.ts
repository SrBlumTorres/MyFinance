import { useContext } from 'react';
import { TransactionContext } from '../contexts/transactionProvider';

function useTransactionContext() {
  const context = useContext(TransactionContext);

  if (context === null) {
    throw new Error(
      'You must use "useTransactionContext" inside <TransactionProvider> context'
    );
  }

  return context;
}

export default useTransactionContext;
