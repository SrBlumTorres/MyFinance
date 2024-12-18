import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";

// Esquema de validación para la transacción
import { AddTransactionType, transactionSchema } from "../schemas/transactionSchema"; // Ajusta la ruta al archivo correcto
import axiosClient from "../config/axiosClient";
import Swal from "sweetalert2";
import useCategoryContext from "../hooks/useCategoryContext";
import useTransactionContext from "../hooks/useTransactionContext";

type TransactionFormValues = AddTransactionType;

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

function TransactionDialog({ isOpen, onClose }: DialogProps) {
  const {categories} = useCategoryContext();


  const { register, handleSubmit, formState: { errors }, reset } = useForm<TransactionFormValues>({
    mode: "onChange", // Valida mientras el usuario escribe
    resolver: zodResolver(transactionSchema), // Usamos el schema de Zod para validación
  });

  // Accedemos al contexto para usar la función addTransaction
  const { addTransaction } = useTransactionContext();

  // Función para manejar el submit del formulario
  async function onSubmit(data: TransactionFormValues) {
    try {
      const resp = await axiosClient.post('/transactions/new-transaction', data); // Ajusta la URL de acuerdo a tu backend
      console.log(resp.data);

      const newTransaction = {
        ...resp.data.newTransaction,
        categoryName: resp.data.categoryName
      }
      
      if (resp.status === 201 || resp.status === 200) {
        addTransaction(newTransaction); // Llamamos a addTransaction para actualizar el estado global
        onClose(); // Cerramos el modal

        reset();
        //Sweet Alert 
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Transaction successfully added 🚀"
        });
      }
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
      }
    }
  }

  // Si el modal no está abierto, no renderizamos nada
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white p-6 rounded-3xl-lg shadow-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl text-gray-600"
        >
          &times; {/* Ícono de cerrar */}
        </button>

        <h2 className="text-xl font-semibold mb-4">Add your new transaction 💰</h2>

        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Tipo de transacción */}
          <div className="mb-4">
            <label htmlFor="transaction" className="block text-sm font-medium text-gray-700">Tipo of Transaction</label>
            <select id="transaction" {...register("type")} className="w-full border border-gray-300 rounded-3xl mt-1 p-3">
              <option value="income">Income 📈</option>
              <option value="debt">Debt 📉</option>
              <option value="expense">Expense 💸</option>
            </select>
            {errors.type && <p className="text-red-500 text-xs">{errors.type.message}</p>}
          </div>

          {/* Categoría */}
          <div className="mb-4">
            <label htmlFor="categories" className="block text-sm font-medium text-gray-700">Category</label>
            <select id="categories" {...register("category")} className="w-full p-3 border border-gray-300 rounded-3xl mt-1">
              <option value="">Select a category...</option>
              {
                categories?.map(category => <option key={category.id} value={category.id}>{category.name}</option>)
              }
            </select>
          
            {errors.category && <p className="text-red-500 text-xs">{errors.category.message}</p>}
          </div>
        
          {/* Monto */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Amount</label>
            <input
              type="number"
              {...register("amount")}
              className="w-full p-3 border border-gray-300 rounded-3xl mt-1"
              placeholder="ex: $10,500.50"
            />
            {errors.amount && <p className="text-red-500 text-xs">{errors.amount.message}</p>}
          </div>

          {/* Descripción */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <input
              type="text"
              {...register("description")}
              className="w-full p-3 border border-gray-300 rounded-3xl mt-1"
            />
            {errors.description && <p className="text-red-500 text-xs">{errors.description.message}</p>}
          </div>

          {/* Fecha */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              {...register("date")}
              defaultValue={new Date().toLocaleDateString('en-CA')}
              className="w-full p-3 border border-gray-300 rounded-3xl mt-1"
            />
            {errors.date && <p className="text-red-500 text-xs">{errors.date.message}</p>}
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="p-3 bg-gray-500 text-white rounded-3xl hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="p-3 bg-secundary text-white rounded-3xl hover:bg-green-400"
            >
              Add Transaction
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default TransactionDialog;
