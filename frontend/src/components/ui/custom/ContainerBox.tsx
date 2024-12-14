import { ReactNode } from "react";

type ContainerBoxProps = {
    className?: string,
    children?: ReactNode;
}

function ContainerBox(props: ContainerBoxProps) {
  const {className, children} = props;

  return (

    <div className={className}>
      {children}
    </div>
    
  )

}

export default ContainerBox;