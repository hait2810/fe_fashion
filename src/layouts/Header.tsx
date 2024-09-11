import { useState } from "react";
import { HiAnnotation, HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.webp";
import { IoBagHandleOutline } from "react-icons/io5";
import { formatNumber } from "../utils/utils";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  return (
    <>
      <header className="h-[80px] w-[100%] py-[15px] fixed z-10 bg-white shadow-lg">
        <div className="container flex justify-between items-center  mx-auto px-4 h-full">
          <div className="relative">
            <Link to={"/"}>
              <img
                className={`w-[134px] h-[45px] max-lg:w-[110px] max-lg:h-[35px]`}
                src={logo}
              />
            </Link>
          </div>
          <nav className="max-lg:!hidden">
            <ul className="flex items-center gap-x-4 text-xl font-normal transition-all ease-in duration-500">
              <li>
                <Link
                  className="cursor-pointer  hover:bg-blue-300 px-2 py-1 hover:rounded-full hover:text-white duration-500"
                  to=""
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-pointer  hover:bg-blue-300 px-2 py-1 hover:rounded-full hover:text-white duration-500"
                  to=""
                >
                  Nam
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-pointer  hover:bg-blue-300 px-2 py-1 hover:rounded-full hover:text-white duration-500"
                  to=""
                >
                  Nữ
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-pointer  hover:bg-blue-300 px-2 py-1 hover:rounded-full hover:text-white duration-500"
                  to=""
                >
                  Sản phẩm khuyến mãi
                </Link>
              </li>
              <li>
                <Link
                  className="cursor-pointer  hover:bg-blue-300 px-2 py-1 hover:rounded-full hover:text-white duration-500"
                  to="/gioi-thieu"
                >
                  Giới thiệu
                </Link>
              </li>
            </ul>
          </nav>
          <div className="max-lg:!hidden flex gap-x-2 items-center">
            {/* <Link
              to="#"
              className="rounded-full bg-[#f2f4f7] px-6 py-3 text-xl text-[#000000b3] font-normal tracking-[2px] hover:bg-black hover:text-white flex items-start gap-x-1"
            >
              Contact <HiAnnotation className="hover:text-white"/>
            </Link> */}
            <div className="user relative">
            <AiOutlineUsergroupAdd  className="w-8 h-8"/>
            </div>
            <Link to={"/cart"} className="bag relative cursor-pointer">
              <IoBagHandleOutline className="w-8 h-8" />
              <div className="absolute left-[1.5rem] right-0 top-[-2px] bottom-0 z-10 bg-red-500 w-[22px] h-[22px] p-1 flex justify-center items-center rounded-full text-white">
                <span>{formatNumber(99)}</span>
              </div>
            </Link>

          </div>
          <div className="hidden max-lg:block">
            {isOpenMenu ? (
              <HiOutlineX
                onClick={() => {
                  setIsOpenMenu(false);
                }}
                className="cursor-pointer"
              />
            ) : (
              <HiOutlineMenu
                onClick={() => {
                  setIsOpenMenu(true);
                }}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>
        <nav
          className={`hidden max-lg:block bg-white h-fit absolute top-20 bottom-0 left-0 ${
            isOpenMenu ? "right-0 opacity-100" : "right-[300px] opacity-0 !h-0"
          } right-0 border-t-2 border-blue-300 transition-all ease-in duration-200`}
        >
          <ul
            className={`container mx-auto px-4 pt-4 flex flex-col  gap-2 text-xl font-normal transition-all ease-in duration-500 ${
              !isOpenMenu && "hidden"
            }`}
          >
            <li>
              <Link
                onClick={() => setIsOpenMenu(false)}
                className="cursor-pointer  hover:bg-blue-300 px-2 py-1 hover:rounded-full hover:text-white duration-500"
                to=""
              >
                Trang chủ
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpenMenu(false)}
                className="cursor-pointer  hover:bg-blue-300 px-2 py-1 hover:rounded-full hover:text-white duration-500"
                to=""
              >
                Nam
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpenMenu(false)}
                className="cursor-pointer  hover:bg-blue-300 px-2 py-1 hover:rounded-full hover:text-white duration-500"
                to=""
              >
                Nữ
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpenMenu(false)}
                className="cursor-pointer  hover:bg-blue-300 px-2 py-1 hover:rounded-full hover:text-white duration-500"
                to=""
              >
                Sản phẩm khuyến mãi
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setIsOpenMenu(false)}
                className="cursor-pointer  hover:bg-blue-300 px-2 py-1 hover:rounded-full hover:text-white duration-500"
                to="/gioi-thieu"
              >
                Giới thiệu
              </Link>
            </li>
            <li>
              <div className="my-4">
                <Link
                  onClick={() => setIsOpenMenu(false)}
                  to="#"
                  className="rounded-full bg-[#f2f4f7] px-6 py-3 text-xl text-[#000000b3] font-normal tracking-[2px] hover:bg-black hover:text-white flex items-start gap-x-1 w-fit"
                >
                  Contact <HiAnnotation />
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
