import { FiEdit } from "react-icons/fi";
import useCategoryContext from "../hooks/useCategoryContext"
import CategoryItem from "./CategoryItem";
import ContainerBox from "./ui/custom/ContainerBox";
import { FaRegTrashCan } from "react-icons/fa6";

function CategoryList() {
    const { categories } = useCategoryContext();
    if (!categories) return <p>Loading categories...</p>;

    return (
        <ContainerBox className="flex flex-col w-2/4">
            <h1 className='text-3xl'>Categories</h1>
            <span className='text-gray-400 mt-2 mb-2'>Overview of your activities</span>
            <div className='mb-4 mt-4'>
                <span className='text-gray-400'>{categories.length} items</span>
            </div>
            <ContainerBox className="flex p-2 justify-around rounded-3xl bg-primary border-2 border-primary text-secundary">
                <span>TITLE</span>
                <span>TYPE</span>
                <span>ACTION</span>
            </ContainerBox> 

            {categories.map((category) => (
                <CategoryItem 
                    key={category.id}
                    name={category.name}
                    type={category.type}
                    editIcon={<FiEdit size={15} className="cursor-pointer"/>}
                    deleteIcon={<FaRegTrashCan size={15} className="cursor-pointer"/>}
                    className="p-2 justify-around rounded-3xl border-primary border-2 items-center hover:bg-primary"
                />
            ))}
        </ContainerBox>
    )
}

export default CategoryList