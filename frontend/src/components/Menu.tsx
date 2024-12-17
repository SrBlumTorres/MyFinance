import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { GoGoal } from "react-icons/go";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { TbHelpHexagon } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineCategory } from "react-icons/md";
import ButtonLink from "./ui/custom/ButtonLink";

function Menu() {
  return (
    <nav className="flex flex-col mb-12 grow gap-2">
      <ButtonLink to="/dashboard" icon={<RxDashboard size={22} />}>
        Dashboard
      </ButtonLink>
      <ButtonLink to="/transactions" icon={<GrTransaction size={22} />}>
        Transactions
      </ButtonLink>
      <ButtonLink to="/categories" icon={<MdOutlineCategory size={22} />}>
        Categories
      </ButtonLink>
      <ButtonLink to="/goals" icon={<GoGoal size={22} />}>
        Goals
      </ButtonLink>
      <ButtonLink to="/debts" icon={<RiMoneyDollarCircleLine size={22} />}>
        Debts
      </ButtonLink>
      <ButtonLink
        className="mb-auto"
        to="/settings"
        icon={<IoSettingsOutline size={22} />}
      >
        Settings
      </ButtonLink>
      <ButtonLink to="/help" icon={<TbHelpHexagon size={22} />}>
        Help
      </ButtonLink>
      <ButtonLink to="/log-out" icon={<LuLogOut size={22} />}>
        Log out
      </ButtonLink>
    </nav>
  );
}

export default Menu;
