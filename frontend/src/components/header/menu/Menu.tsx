import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { LuWallet } from "react-icons/lu";
import { GoGoal } from "react-icons/go";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsGraphUp } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";


function Menu() {
  return (
    <nav className="">
        <ul className="flex flex-col gap-6 p-2">
            {/* Componente nuevo ? */}
            <li className="flex justify-center gap-2 items-center p-2 hover:bg-secundary rounded-3xl hover:text-white">
              <RxDashboard />
              <a href="#">Dashboard</a>
            </li>
            <li className="flex justify-center gap-2 items-center p-2">
              <GrTransaction />
              <a href="#">Transaction</a>
            </li>
            <li className="flex justify-center gap-2 items-center p-2">
              <LuWallet />
              <a href="#">Wallet</a>
            </li>
            <li className="flex justify-center gap-2 items-center p-2">
              <GoGoal />
              <a href="#">Goals</a>
            </li>
            <li className="flex justify-center gap-2 items-center p-2">
              <RiMoneyDollarCircleLine />
              <a href="#">Budget</a>
            </li>
            <li className="flex justify-center gap-2 items-center p-2">
              <BsGraphUp />
              <a href="#">Analitics</a>
            </li>
            <li className="flex justify-center gap-2 items-center p-2">
              <IoSettingsOutline />
              <a href="#">Settings</a>
            </li>
        </ul>
    </nav>
  )
}

export default Menu;