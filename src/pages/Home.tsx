import { Tab, Tabs } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import icon1 from "../assets/icon/policies_icon_1.webp";
import icon2 from "../assets/icon/policies_icon_2.webp";
import icon3 from "../assets/icon/policies_icon_3.webp";
import icon4 from "../assets/icon/policies_icon_4.webp";
import category1 from "../assets/images/season_coll_1_img_large.webp";
import category2 from "../assets/images/season_coll_2_img_large.webp";
import category3 from "../assets/images/season_coll_3_img_large.webp";
import category4 from "../assets/images/season_coll_4_img_large.webp";
import category5 from "../assets/images/season_coll_5_img_large.webp";
import category6 from "../assets/images/season_coll_6_img_large.webp";
import Banner from "../layouts/Banner";
import { formatCurrency } from "../utils/utils";

export const ProductDisplay = ({ tab }: { tab: string }) => {
  console.log(tab);
  return <div className="mt-4">
    <div className="grid grid-cols-1 p-2 md:grid-cols-2 md:p-0 lg:p-0 lg:grid-cols-4 gap-3">
      <div className="item">
        <div className="border-[1px] rounded-md border-sky-100">
          <img src="https://product.hstatic.net/1000235488/product/1045_9_ae47b370893f4dcc807b41b13dfe191e_large.jpg" className="mx-auto p-2 hover:scale-95 cursor-pointer transition-all duration-500 ease-in" alt="" />
        </div>
        <div className="mt-2 px-1">
          <Link to={`/san-pham/123`}><h3 className="text-xl z-40 font-semibold text-[#0000009c] hover:text-blue-500">Áo nam Papka 1045 xanh biển</h3></Link>
          <div className="flex gap-x-4 items-center">
            <p className="font-medium text-red-500">{formatCurrency(199000)}</p>  <span className="text-sm text-gray-500 italic">
              120.000 Đã bán
            </span>
          </div>
          <div className="flex gap-x-4">
            <span className="line-through text-gray-400">
              {formatCurrency(289000)}
            </span>
            <div className="px-2 text-white text-[12px] flex justify-center items-center bg-red-500 rounded-full">
              32%
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="border-[1px] rounded-md border-sky-100">
          <img src="https://product.hstatic.net/1000235488/product/1001_xanh_bien_2_3bc0b82e7f5b4cb4b8b5ed5f6dd0a7c3_large.jpg" className="mx-auto p-2 hover:scale-95 cursor-pointer transition-all duration-500 ease-in" alt="" />
        </div>
        <div className="mt-2 px-1">
          <Link to={""}><h3 className="text-xl z-40 font-semibold text-[#0000009c] hover:text-blue-500">Áo thun nam cắt rã có in. Loose - 10F24TSS005</h3></Link>
          <p className="font-medium text-red-500">{formatCurrency(199000)}</p>
          <div className="flex gap-x-4">
            <span className="line-through text-gray-400">
              {formatCurrency(289000)}
            </span>
            <div className="px-2 text-white text-[12px] flex justify-center items-center bg-red-500 rounded-full">
              32%
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="border-[1px] rounded-md border-sky-100">
          <img src="https://product.hstatic.net/1000235488/product/20_9d7ec3ae582f44378b04242b8f628391_large.jpg" className="mx-auto p-2 hover:scale-95 cursor-pointer transition-all duration-500 ease-in" alt="" />
        </div>
        <div className="mt-2">
          <Link to={""}><h3 className="text-xl z-40 font-semibold text-[#0000009c] hover:text-blue-500">Áo nam Papka 1045 xanh bơ</h3></Link>
          <p className="font-medium text-red-500">{formatCurrency(199000)}</p>
          <div className="flex gap-x-4">
            <span className="line-through text-gray-400">
              {formatCurrency(289000)}
            </span>
            <div className="px-2 text-white text-[12px] flex justify-center items-center bg-red-500 rounded-full">
              32%
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="border-[1px] rounded-md border-sky-100">
          <img src="https://product.hstatic.net/1000235488/product/1045_5_ea8c3201adf24afb8573fe6968a07cd5_large.png" className="mx-auto p-2 hover:scale-95 cursor-pointer transition-all duration-500 ease-in" alt="" />
        </div>
        <div className="mt-2">
          <Link to={""}><h3 className="text-xl z-40 font-semibold text-[#0000009c] hover:text-blue-500">Áo nam Papka 1045 xanh coban</h3></Link>
          <p className="font-medium text-red-500">{formatCurrency(199000)}</p>
          <div className="flex gap-x-4">
            <span className="line-through text-gray-400">
              {formatCurrency(289000)}
            </span>
            <div className="px-2 text-white text-[12px] flex justify-center items-center bg-red-500 rounded-full">
              32%
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

const MemClothing = () => {
  const [value, setValue] = useState('aothun');
  const handleChange = (_event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return <div className="my-6 container mx-auto">
    <h3 className="text-center font-light text-5xl">Bộ sưu tập Quần áo nam</h3>
    <Tabs value={value} onChange={handleChange} centered>
      <Tab value="aothun" label="Áo thun" />
      <Tab value="quannam" label="Quần nam" />
      <Tab value="somi" label="Sơ mi nam" />
    </Tabs>
    <ProductDisplay tab={value} />
  </div>
}
const WomenClothing = () => {
  const [value, setValue] = useState('aothun');
  const handleChange = (_event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return <div className="my-6 container mx-auto">
    <h3 className="text-center font-light text-5xl">Bộ sưu tập Quần áo nữ</h3>
    <Tabs value={value} onChange={handleChange} centered>
      <Tab value="aothun" label="Áo thun nữ" />
      <Tab value="quannam" label="Quần nữ" />
      <Tab value="somi" label="Đầm/váy" />
    </Tabs>
    <ProductDisplay tab={value} />
  </div>
}

const Home = () => {
  return (
    <>
      <Banner />
      <section className="my-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 place-items-center">
            <div className="flex flex-col xl:flex-row gap-x-2 w-[234px] items-center justify-center">
              <img src={icon1} className="w-10 h-10" alt="" />
              <div className="flex flex-col">
                <h3 className="font-medium text-lg text-center xl:text-left">Giao hàng toàn quốc</h3>
                <p className="text-sm">Nhiều ưu đãi khuyến mãi hot</p>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row gap-x-2 w-[234px] items-center justify-center">
              <img src={icon2} className="w-10 h-10" alt="" />
              <div className="flex flex-col">
                <h3 className="font-medium text-lg text-center xl:text-left">Quà tặng hấp dẫn </h3>
                <p className="text-sm">Nhiều ưu đãi khuyến mãi hot</p>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row gap-x-2 w-[234px] items-center justify-center">
              <img src={icon3} className="w-10 h-10" alt="" />
              <div className="flex flex-col">
                <h3 className="font-medium text-lg text-center xl:text-left">Bảo đảm chất lượng</h3>
                <p className="text-sm">Sản phẩm đã được kiểm định</p>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row gap-x-2 w-[234px] items-center justify-center">
              <img src={icon4} className="w-10 h-10" alt="" />
              <div className="flex flex-col">
                <h3 className="font-medium text-lg text-center xl:text-left">Hotline: 0964838828</h3>
                <p className="text-sm">Dịch vụ hỗ trợ bạn 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="container mx-auto">
          <div>
            <h3 className="text-5xl text-center font-light">
              Thời trang PAPKA
            </h3>
            <div className="flex flex-nowrap gap-x-16 mt-9 overflow-x-auto justify-between">
              <Link to={""} className="p-1">
                <div className="flex gap-y-3 flex-col justify-center items-center flex-nowrap w-[150px]">
                  <img className="object-cover transition-transform duration-700 transform hover:scale-105" src={category1} alt="" />
                  <div>
                    <h3 className="text-xl">Áo nam</h3>
                    <p className="text-gray-500">63 sản phẩm</p>
                  </div>
                </div>
              </Link>
              <Link to={""} className="p-1">
                <div className="flex gap-y-3 flex-col justify-center items-center flex-nowrap w-[150px]">
                  <img className="object-cover transition-transform duration-700 transform hover:scale-105" src={category2} alt="" />
                  <div>
                    <h3 className="text-xl">Áo thun nữ</h3>
                    <p className="text-gray-500">0 sản phẩm</p>
                  </div>
                </div>
              </Link>
              <Link to={""} className="p-1">
                <div className="flex gap-y-3 flex-col justify-center items-center flex-nowrap w-[150px]">
                  <img className="object-cover transition-transform duration-700 transform hover:scale-105" src={category3} alt="" />
                  <div>
                    <h3 className="text-xl">Quần nam</h3>
                    <p className="text-gray-500">5 sản phẩm</p>
                  </div>
                </div>
              </Link>
              <Link to={""} className="p-1">
                <div className="flex gap-y-3 flex-col justify-center items-center flex-nowrap w-[150px]">
                  <img className="object-cover transition-transform duration-700 transform hover:scale-105" src={category4} alt="" />
                  <div>
                    <h3 className="text-xl">Đầm</h3>
                    <p className="text-gray-500">5 sản phẩm</p>
                  </div>
                </div>
              </Link>
              <Link to={""} className="p-1">
                <div className="flex gap-y-3 flex-col justify-center items-center flex-nowrap w-[150px]">
                  <img className="object-cover transition-transform duration-700 transform hover:scale-105" src={category5} alt="" />
                  <div>
                    <h3 className="text-xl">Quần nữ</h3>
                    <p className="text-gray-500">5 sản phẩm</p>
                  </div>
                </div>
              </Link>
              <Link to={""} className="p-1">
                <div className="flex gap-y-3 flex-col justify-center items-center flex-nowrap w-[150px]">
                  <img className="object-cover transition-transform duration-700 transform hover:scale-105" src={category6} alt="" />
                  <div>
                    <h3 className="text-xl">Quần thu nam</h3>
                    <p className="text-gray-500">5 sản phẩm</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <MemClothing />
        <WomenClothing />
      </section>
    </>
  );
};
export default Home;
