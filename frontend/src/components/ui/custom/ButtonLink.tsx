import { twMerge } from "tailwind-merge";
import { HTMLAttributes, ReactNode } from "react";
import { NavLink } from "react-router-dom";

type ButtonLinkProps = {
  className?: string;
  children?: ReactNode;
  icon?: ReactNode;
  to: string;
} & HTMLAttributes<HTMLAnchorElement>;

function ButtonLink(props: ButtonLinkProps) {
  const { className, children, icon, to, ...rest } = props;

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        twMerge(
          "group flex justify-start gap-2 items-center p-[0.7rem] ps-6 hover:bg-secundary rounded-full hover:text-white",
          isActive ? "bg-secundary text-white" : "",
          className
        )
      }
      {...rest}
    >
      <span className="transition-transform duration-500 group-hover:rotate-180">
        {icon}
      </span>
      {children}
    </NavLink>
  );
}

export default ButtonLink;
