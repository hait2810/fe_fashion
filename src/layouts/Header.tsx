import { Button } from '@mui/material';
import { useState } from 'react';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { IoBagHandleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.webp';
import useUserStore from '../store/userStore';
import { formatNumber } from '../utils/utils';
import { useQuery } from '@tanstack/react-query';
import { category } from '../api/cateogry';
const Header = () => {
  const { data, clearUser } = useUserStore()
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const { data: categoryList } = useQuery({
    queryKey: ['get_all_category'],
    queryFn: () => category.list(),
    staleTime: Infinity,
  });
  const opt = categoryList?.data?.filter(item => !item.parentId)

  return (
    <>
      <header className="h-[80px] w-[100%] py-[15px] fixed z-[100] bg-white shadow-lg">
        <div className="container flex justify-between items-center  mx-auto px-4 h-full">
          <div className="relative">
            <Link to={'/'}>
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
              {opt?.map((item) => {
                return <li>
                  <Link
                    className="cursor-pointer  hover:bg-blue-300 px-2 py-1 hover:rounded-full hover:text-white duration-500"
                    to=""
                  >
                    {item?.name}
                  </Link>
                </li>
              })}
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
            <div className="group user relative cursor-pointer w-full">
              <AiOutlineUsergroupAdd className="w-8 h-8" />
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in absolute top-11 bottom-0 left-[-30px] right-0 before:bg-inherit before:content-[''] before:absolute before:w-[100%] before:h-[10px] before:left-[10px] after:bg-[#333333] after:content-[''] after:h-[14px] after:absolute after:w-[14px] after:top-[-7px] after:left-10 after:transform after:rotate-45">
                <ul className="inline-block w-max bg-[#333] text-white py-2 px-3 rounded-md">
                  {data?.username ? <div className='flex flex-col p-1'>
                    <p>{data.fullname}</p>
                    <Link className='hover:text-blue-500' to={"/admin"}>Trang quản trị</Link>
                    <Button onClick={clearUser} variant='contained' size='small'>Đăng xuất</Button>
                  </div> : <>
                    <li>
                      <Link to={"/dang-nhap"}>Đăng nhập</Link>
                    </li>
                    <li>
                      <Link to={"/dang-ky"}>Đăng ký</Link>
                    </li>
                  </>}
                </ul>
              </div>
            </div>
            <Link to={'/gio-hang'} className="bag relative cursor-pointer">
              <IoBagHandleOutline className="w-8 h-8" />
              <div className="absolute left-[1.5rem] right-0 top-[-2px] bottom-0 z-10 bg-red-500 w-[22px] h-[22px] p-1 flex justify-center items-center rounded-full text-white">
                <span>{formatNumber(99)}</span>
              </div>
            </Link>
          </div>
          <div className="hidden max-lg:flex max-lg:items-center gap-x-5">
            <Link to={'/gio-hang'} className="bag relative cursor-pointer">
              <IoBagHandleOutline className="w-6 h-6" />
              <div className="absolute left-[1.2rem] right-0 top-[-2px] text-[] bottom-0 z-10 bg-red-500 w-[18px] h-[18px] p-1 flex justify-center items-center rounded-full text-white">
                <span>{formatNumber(99)}</span>
              </div>
            </Link>
            {isOpenMenu ? (
              <HiOutlineX
                onClick={() => {
                  setIsOpenMenu(false);
                }}
                className="w-6 h-6 cursor-pointer"
              />
            ) : (
              <HiOutlineMenu
                onClick={() => {
                  setIsOpenMenu(true);
                }}
                className="w-6 h-6 cursor-pointer"
              />
            )}
          </div>
        </div>
        <nav
          className={`hidden max-lg:block bg-white h-fit absolute top-20 bottom-0 left-0 ${isOpenMenu ? 'right-0 opacity-100' : 'right-[300px] opacity-0 !h-0'
            } right-0 border-t-2 border-blue-300 transition-all ease-in duration-200`}
        >
          <ul
            className={`container mx-auto px-4 py-4 flex flex-col  gap-2 text-xl font-normal transition-all ease-in duration-500 ${!isOpenMenu && 'hidden'
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
           {opt?.map((item) => {
            return <li>
            <Link
              onClick={() => setIsOpenMenu(false)}
              className="cursor-pointer  hover:bg-blue-300 px-2 py-1 hover:rounded-full hover:text-white duration-500"
              to=""
            >
              {item.name}
            </Link>
          </li>
           })}
            
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
              {data?.username ? <div className="my-4">
                <Link
                  onClick={() => {
                    setIsOpenMenu(false)
                    clearUser()
                  }}
                  to="#"
                  className="rounded-full bg-[#f2f4f7] px-6 py-3 text-xl text-[#000000b3] font-normal tracking-[2px] hover:bg-black hover:text-white flex items-start gap-x-1 w-fit"
                >
                  Đăng xuất
                </Link>
              </div> : <Link
                onClick={() => setIsOpenMenu(false)}
                className="cursor-pointer  hover:bg-blue-300 px-2 py-1 hover:rounded-full hover:text-white duration-500"
                to="/dang-nhap"
              >
                Đăng nhập
              </Link>}

            </li>
          </ul>
        </nav>
      </header >
    </>
  );
};
export default Header;
