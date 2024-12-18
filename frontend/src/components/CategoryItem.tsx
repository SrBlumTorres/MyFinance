import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type CategoryItemProps = {
  id?: number;
  name: string;
  type: string;
  className?: string;
  editIcon?: ReactNode;
  deleteIcon?: ReactNode;
};

function CategoryItem(props: CategoryItemProps) {
    const { id, name, type, className, editIcon, deleteIcon} = props;
    const classes = twMerge('flex', className);

    return (
        <div className={classes} key={id}>
            <span>{name}</span>
            <span>{type}</span>
            <div className="flex gap-2">
                {editIcon}
                {deleteIcon}
            </div>
        </div>
    );
}

export default CategoryItem;
