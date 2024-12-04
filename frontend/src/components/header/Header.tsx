import Logo from './menu/Logo';
import Menu from './menu/Menu';

function Header() {
  return (
    <>
        <header className="flex w-1/5 flex-col justify-between bg-primary min-h-screen">
          <br />
          <Logo/>
          <Menu />
            <ul className="gap-1">
              <li className="flex">
                <a href="#">Dashboard</a>
              </li>
              <li className="flex">
                <a href="#">Dashboard</a>
              </li>
            </ul>
          <Logo />
        </header>
    </>
  )
}

export default Header