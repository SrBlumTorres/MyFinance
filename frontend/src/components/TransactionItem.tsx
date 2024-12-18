import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type CategoryItemProps = {
  id?: number;
  date: Date | string;
  amount: number;
  type: string;
  categoryName: string;
  editIcon?: ReactNode;
  deleteIcon?: ReactNode;
  className?: string;
};

function TransactionItem(props: CategoryItemProps) {
    const { id, date, amount, type, categoryName, editIcon, deleteIcon, className } = props;
    const classes = twMerge('grid grid-cols-[repeat(5,1fr)]  justify-items-center', className);

    

    return (
        <div className={classes} key={id}>
            <span>{date.toLocaleString()}</span>
            <span>${amount}</span>
            <span>{type}</span>
            <span>{categoryName}</span>
            <div className="flex gap-2">
                <button>{editIcon}</button>
                <button>{deleteIcon}</button>
            </div>
        </div>
    );
}

export default TransactionItem;
