import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ContainerBoxProps = {
    className?: string,
    children?: ReactNode;
}

function ContainerBox(props: ContainerBoxProps) {
  const {className, children} = props;
  // Estilos base y en caso de tener adicionales los, junta o solapa
  const classes = twMerge('flex rounded', className )

  return (

    <div className={classes}>
      {children}
    </div>
    
  )

}

export default ContainerBox;