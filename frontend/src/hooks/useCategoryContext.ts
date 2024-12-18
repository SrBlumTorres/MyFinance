import { CategoryContext } from '../contexts/categoryProvider';
import { useContext } from 'react';

function useCategoryContext() {
  const context = useContext(CategoryContext);

  if (context === null) {
    throw new Error(
      'You must use "useCategoryContext" inside <UserProvider> context'
    );
  }

  return context;
}

export default useCategoryContext;
