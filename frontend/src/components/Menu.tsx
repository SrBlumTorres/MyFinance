import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { LuWallet } from "react-icons/lu";
import { GoGoal } from "react-icons/go";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsGraphUp } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import ButtonLink from "./ui/custom/ButtonLink";
import { TbHelpHexagon } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";


function Menu() {
  return (

    <nav className="flex flex-col mb-12 grow gap-1">
      <ButtonLink to="#" icon={ <RxDashboard size={22}/> }> Dashboard </ButtonLink>
      <ButtonLink to="#" icon={ <GrTransaction size={22}/> }> Transaction </ButtonLink>
      <ButtonLink to="#" icon={ <LuWallet size={22} /> }> Wallet </ButtonLink>
      <ButtonLink to="#" icon={ <GoGoal size={22} /> }> Goals </ButtonLink>
      <ButtonLink to="#" icon={ <RiMoneyDollarCircleLine size={22} /> }> Budget </ButtonLink>
      <ButtonLink to="#" icon={ <BsGraphUp size={22} /> }> Analitics </ButtonLink>
      <ButtonLink className="mb-auto" to="#" icon={ <IoSettingsOutline size={22} /> }> Settings </ButtonLink>
      <ButtonLink to="#" icon={ <TbHelpHexagon size={22} />}> Help </ButtonLink>
      <ButtonLink to="#" icon={ <LuLogOut size={22} />}> Log out </ButtonLink>
    </nav>

  )

}

export default Menu;