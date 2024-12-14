
import useTransactionContext from '../hooks/useTransactionContext';

function TransactionList() {
  const { transactions } = useTransactionContext();

  if (!transactions) return <p>Loading transactions...</p>;

  return (
    <div>
      <h2>Your Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <p>Type: {transaction.type}</p>
            <p>Description: {transaction.description}</p>
            <p>Amount: ${transaction.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
