// import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type AppNameProps = {
    className?: string;
    // children: ReactNode;
}

function AppTitleName(props: AppNameProps) {
  const { className } = props;
  const classes = twMerge('', className )

  return (

    <span className={classes}>
      MyFinance
    </span>

  )

}

export default AppTitleName