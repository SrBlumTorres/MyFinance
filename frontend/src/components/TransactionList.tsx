import { useState } from 'react';
import useTransactionContext from '../hooks/useTransactionContext';
import Button from './ui/custom/Button';
import ContainerBox from './ui/custom/ContainerBox';
import { IoIosAddCircleOutline } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashCan } from "react-icons/fa6";
import TransactionDialog from './TransactionDialog';
import TransactionItem from './TransactionItem';

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

                    <div className='flex flex-col gap-3'>
                        <ContainerBox className="grid grid-cols-5  justify-items-center p-2 rounded-3xl bg-primary border-2 border-primary text-secundary">
                            <span>DATE</span>
                            <span>AMOUNT</span>
                            <span>TYPE</span>
                            <span>CATEGORY</span>
                            <span>ACTION</span>
                        </ContainerBox>
                            {transactions.map((transaction) => (
                                <TransactionItem
                                    key={transaction.id}
                                    id={transaction.id}
                                    date={transaction.date}
                                    amount={transaction.amount}
                                    type={transaction.type}
                                    editIcon={<FiEdit size={15} className="cursor-pointer"/>}
                                    deleteIcon={<FaRegTrashCan size={15} className="cursor-pointer"/>}
                                    categoryName={transaction.categoryName}
                                    className='p-2 rounded-3xl border-primary border-2 items-center hover:bg-primary'
                                />
                            ))}
                    </div>
                </div>
            </ContainerBox>
        </div>
    );

}

export default TransactionList;
