import { ComponentProps, forwardRef, useId } from "react";
import { FieldError } from "react-hook-form";
import { twMerge } from "tailwind-merge";

// Definición del tipo de las props
type InputProps = {
  type?: string;
  className?: string;
  label?: string;
  labelPosition?: "above" | "left"; // Permite elegir dónde posicionar el label
  error?: FieldError; // Manejo de errores
} & ComponentProps<"input">;

// Componente Input con forwardRef
const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  props,
  ref
) {
  // Desestructuración de props
  const {
    type = "text", // Tipo por defecto
    className,
    label,
    labelPosition = "above", // Posición del label por defecto
    error,
    ...rest // Resto de propiedades (placeholder, value, etc.)
  } = props;

  // Generación de un ID único para el input, completamente necesario, si no, ocasionará errores
  const id = useId();

  // Clases para el label según su posición
  const labelClasses = labelPosition === "above" 
    ? "block mb-2 text-sm font-medium text-gray-700" 
    : "mr-4 text-sm font-medium text-gray-700";

  // Clases dinámicas para el input (con manejo de errores)
  const inputClasses = twMerge(
    "border rounded-lg px-4 py-2 w-full", // Clases base
    error ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-300", // Estilos según el estado
    className // Estilos personalizados del usuario
  );

  // Clases para el contenedor general (útil para manejar flexibilidad del diseño)
  const containerClasses = labelPosition === "above" ? "flex flex-col" : "flex items-center";

  return (
    <div className={containerClasses}>
      {label && (
        <label htmlFor={id} className={labelClasses}>
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        ref={ref}
        className={inputClasses}
        {...rest} // Spread del resto de propiedades
      />

      {error && (
        <span className="text-red-500 text-sm mt-1">{error.message}</span>
      )}
    </div>

  );
});

export default Input;
