import { twMerge } from "tailwind-merge";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonLinkProps = {
    className?: string;
    children?: ReactNode;
    icon?: ReactNode;
    to: string;
}

function ButtonLink(props: ButtonLinkProps) {
    const { className, children, icon, to} = props;

    // Estilos base y en caso de tener adicionales los, junta o solapa
    const classes = twMerge('group flex justify-start gap-2 items-center p-[0.7rem] ps-6 hover:bg-secundary rounded-full hover:text-white', className )

    return (
        // Propiedade únicamente posible si usamos react-router-dom
        <Link to={to} className={classes}>
            <span className="transition-transform duration-500 group-hover:rotate-180">
                {icon}
            </span>
            {children}
        </Link>
    )

}

export default ButtonLink;