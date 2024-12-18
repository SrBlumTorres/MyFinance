import { MdOutlineWbSunny } from "react-icons/md";
import AppTitleName from './AppTitleName';
import Button from './ui/custom/Button';
import Logo from './Logo';
import Menu from './Menu';

function Header() {
  return (
    <>
        <header className="flex w-[270px] fixed h-screen flex-col px-6 py-4 bg-primary min-h-screen">
          <div className='flex mb-20 items-center gap-2'>
            <Logo size='40'/>
            <AppTitleName />
          </div>
          <Menu />
          <Button className='mt-auto' icon={ <MdOutlineWbSunny size={20} />}/>
        </header>
    </>
  )
}

export default Header