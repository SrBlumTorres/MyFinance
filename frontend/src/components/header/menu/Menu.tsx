import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { LuWallet } from "react-icons/lu";
import { GoGoal } from "react-icons/go";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsGraphUp } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import MenuItem from "./MenuItem";


function Menu() {
  return (
    <nav className="">
        <ul className="flex w-4/5 m-auto flex-col gap-6 p-2">
          <MenuItem name="Dashboard" href="#" icon={RxDashboard}/>
          <MenuItem name="Transaction" href="#" icon={GrTransaction}/>
          <MenuItem name="Wallet" href="#" icon={LuWallet}/>
          <MenuItem name="Goals" href="#" icon={GoGoal}/>
          <MenuItem name="Budget" href="#" icon={RiMoneyDollarCircleLine}/>
          <MenuItem name="Analitics" href="#" icon={BsGraphUp}/>
          <MenuItem name="Settings" href="#" icon={IoSettingsOutline}/>
        </ul>
    </nav>
  )
}

export default Menu;