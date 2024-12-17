import { useState } from 'react';
import useTransactionContext from '../hooks/useTransactionContext';
import Button from './ui/custom/Button';
import ContainerBox from './ui/custom/ContainerBox';
import { IoIosAddCircleOutline } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";
import TransactionDialog from './TransactionDialog';

function TransactionList() {
    const { transactions } = useTransactionContext();
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    if (!transactions) return <p>Loading transactions...</p>;

    // Función para abrir el modal
    const openDialog = () => {
        setIsDialogOpen(true);
    };

    // Función para cerrar el modal
    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    return (
        <div className='flex flex-col w-full mx-auto gap-4'>
            <h1 className='text-3xl'>Transactions</h1> 
            <span className='text-gray-400'>Overview of your activities</span>
            <ContainerBox className='flex flex-col gap-34'>
                <div>
                    <div className='flex gap-4 justify-end'>
                        <Button onClick={openDialog} className='bg-secundary text-white hover:bg-indigo-800 p-4'>
                            <IoIosAddCircleOutline size={18}/>
                            <span>New transaction</span>
                        </Button>
                        <TransactionDialog isOpen={isDialogOpen} onClose={closeDialog} />
                    </div>
                    {/* Filtros */}
                    <div className='flex gap-7'>
                        <Button className='w-28 p-3 bg-primary border-secundary border-2 hover:bg-[#BFB7FF]'>
                            <span className='m-auto'>Date</span>
                        </Button>

                        <Button className='w-28 p-3 bg-primary border-secundary border-2 hover:bg-[#BFB7FF]'>
                            <span className='m-auto'>Amount</span>
                        </Button>

                        <Button className='w-28 p-3 bg-primary border-secundary border-2 hover:bg-[#BFB7FF]'>
                            <span className='m-auto'>Type</span>
                        </Button>

                        <Button className='w-28 p-3 bg-primary border-secundary border-2 hover:bg-[#BFB7FF]' >
                            <span className='m-auto'>Category</span>
                        </Button>
                    </div>

                    <div className='mb-4 mt-4'>
                        <span className='text-gray-400'>{transactions.length} items</span>
                    </div>

                    <table className='w-full text-center *:border-2 rounded'>
                        <tr className='*:px-4 *:py-3 rounded-xl text-secundary'> 
                            <th>DATE</th>
                            <th>AMOUNT</th>
                            <th>TYPE</th>
                            <th>CATEGORY</th>
                            <th>ACTION</th>
                        </tr>

                        {transactions.map((transaction) => (
                            <tr key={transaction.id} className='*:px-4 *:py-4'>
                                <td>{transaction.date.toLocaleString()}</td>
                                <td>${transaction.amount}</td>

                                <td className={
                                        transaction.type === "income"
                                            ? "text-green-500"
                                            : transaction.type === "expense"
                                                ? "text-red-500"
                                                : "text-yellow-500" // Color para "debt"
                                }> {transaction.type}
                                
                                </td>
                                <td>{transaction.categoryName}</td>
                                <td className='flex gap-4 items-center justify-center'>
                                    <FiEdit className='cursor-pointer'/>
                                    <FaRegTrashCan className='cursor-pointer'/>
                                </td>
                            </tr>
                        ))}

                    </table>
                </div>
            </ContainerBox>
        </div>
    );

}

export default TransactionList;
