
import useTransactionContext from '../hooks/useTransactionContext';
import Button from './ui/custom/Button';
import ContainerBox from './ui/custom/ContainerBox';
import { IoIosAddCircleOutline } from "react-icons/io";

function TransactionList() {
    const { transactions } = useTransactionContext();

    if (!transactions) return <p>Loading transactions...</p>;

    return (
        <div className='flex flex-col'>
            <h2>Your Transactions</h2>
            <ContainerBox className='flex flex-col gap-34'>
                <div>
                    <div className='flex'>
                        <Button className='flex gap-4 p-3'>
                            <IoIosAddCircleOutline size={15}/>
                            <span>Date</span>
                        </Button>
                        <Button className='flex gap-4 p-3'>
                            <IoIosAddCircleOutline size={15}/>
                            <span>Amount</span>
                        </Button>
                        <Button className='flex gap-4 p-3'>
                            <IoIosAddCircleOutline size={15}/>
                            <span>Type</span>
                        </Button>
                        
                    </div>

                    <span>Transactions: {transactions.length} </span>
                    {transactions.map((transaction) => (
                        <div className='flex gap-3'>
                            <span>{transaction.date}</span>
                            <span>Type: {transaction.type}</span>
                            <span>${transaction.amount}</span>
                            <span>{transaction.categoryName}</span>
                        </div>
                    ))}
                </div>
            </ContainerBox>
        </div>
    );

}

export default TransactionList;
