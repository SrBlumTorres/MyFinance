import { ReactNode } from "react"

type ContainerProps = {
    children?: ReactNode;
}

function Container(props: ContainerProps) {

    const { children } =  props;
    return (
        <div className="flex grow min-h-screen p-6 ml-[270px]">
            {children}
        </div>
    )
}

export default Container