import { createContext, ReactNode, useState, useEffect } from 'react';
import axiosClient from '../config/axiosClient';
import { Category } from '../config/types';

// 1. Definimos el tipo del contexto
type CategoryContextType = {
  categories: Category[] | null;
  fetchCategories: () => Promise<void>;
  addCategory: (newCategory: Category) => void;
};

const CategoryContext = createContext<CategoryContextType | null>(null);

type CategoryProviderProps = {
  children: ReactNode;
};

function CategoryProvider({ children }: CategoryProviderProps) {
  const [categories, setCategories] = useState<Category[] | null>(null);

  // Función para obtener transacciones desde la API
  async function fetchCategories() {
    try {
      const response = await axiosClient.get('/categories'); // Ruta de tu API
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching Categories:', error);
    }
  }

  // Función para agregar una nueva transacción
  const addCategory = (newCategory: Category) => {
    setCategories((prevCategories) => 
      prevCategories ? [...prevCategories, newCategory] : [newCategory]
    );
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Valor proporcionado por el contexto
  const valueForContext = {
    categories,
    fetchCategories,
    addCategory,
  };

  return (
    <CategoryContext.Provider value={valueForContext}>
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryProvider;
export { CategoryContext };
