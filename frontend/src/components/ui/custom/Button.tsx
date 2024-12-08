import { twMerge } from "tailwind-merge";
import { ReactNode } from "react";

type ButtonProps = {
    type?:string,
    className?: string;
    children?: ReactNode;
    icon?: ReactNode;
}

function Button(props: ButtonProps) {
  const { className, children, icon} = props;

  // Estilos base y en caso de tener adicionales los, junta o solapa
  const classes = twMerge('flex justify-start gap-2 items-center p-4 ps-6 hover:bg-secundary rounded-full hover:text-white', className )

  return (

    <button className={classes}>
        {icon}
        {children}
    </button>

  )
}


export default Button;