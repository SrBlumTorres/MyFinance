import { twMerge } from "tailwind-merge";
import { ReactNode } from "react";

type ButtonProps = {
  type?: "button" | "submit" | "reset"; // Asegúrate de usar los valores permitidos
  className?: string; // Estilo personalizado
  children?: ReactNode; // Contenido del botón
  icon?: ReactNode; // Icono opcional
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Evento onClick opcional
};

function Button(props: ButtonProps) {
  const { className, children, icon, onClick, type = "button" } = props;

  // Mezcla los estilos base con las clases adicionales pasadas por props
  const classes = twMerge(
    "flex justify-start gap-2 items-center p-4 ps-6 hover:bg-secundary rounded-full hover:text-white",
    className
  );

  return (
    <button
      type={type} // Garantiza que type sea válido
      className={classes}
      onClick={onClick} // Pasa el evento onClick
    >
      {icon}
      {children}
    </button>
  );
}

export default Button;
