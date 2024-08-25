import { HiAnnotation } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.webp";
const Header = () => {
  return (
    <header className="h-[80px] w-full py-[15px] fixed z-10 bg-white shadow-lg">
      <div className="container flex justify-between items-center  mx-auto px-4">
        <div>
          <Link to={"/"}>
            <img className="w-[134px] h-[45px]" src={logo} />
          </Link>
        </div>
        <nav>
          <ul className="flex items-center gap-x-4 text-xl font-normal transition-all ease-in duration-500">
            <li className="cursor-pointer  hover:bg-blue-300 px-2 py-1 hover:rounded-full hover:text-white duration-500">
              <Link to="">Trang chủ</Link>
            </li>
            <li className="cursor-pointer  hover:bg-blue-300 px-2 py-1 hover:rounded-full hover:text-white duration-500">
              <Link to="">Nam</Link>
            </li>
            <li className="cursor-pointer  hover:bg-blue-300 px-2 py-1 hover:rounded-full hover:text-white duration-500">
              <Link to="">Nữ</Link>
            </li>
            <li className="cursor-pointer  hover:bg-blue-300 px-2 py-1 hover:rounded-full hover:text-white duration-500">
              <Link to="">Sản phẩm khuyến mãi</Link>
            </li>
            <li className="cursor-pointer  hover:bg-blue-300 px-2 py-1 hover:rounded-full hover:text-white duration-500">
              <Link to="/intro">Giới thiệu</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Link
            to="#"
            className="rounded-full bg-[#f2f4f7] px-6 py-3 text-xl text-black font-normal tracking-[2px] hover:bg-black hover:text-white flex items-start gap-x-1"
          >
            Contact <HiAnnotation />
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
