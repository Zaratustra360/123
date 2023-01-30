import { FaHamburger } from "react-icons/fa";
import Link from "next/link";


const Header = () => {
  return (
    <header>
      <div>
        <FaHamburger className="logo" />
      </div>
      <nav>
        <Link href='/'>Домой</Link>
        <Link href='/about'>О нас</Link>
        <Link href='/reviews'>Отзывы</Link>
        <Link href='/burgers'>Бургеры</Link>
      </nav>
    </header>
  );
};

export default Header;
