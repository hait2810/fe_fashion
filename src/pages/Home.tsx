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
const Home = () => {
  return (
    <>
      <Banner />
      <section className="my-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 place-items-center">
            <div className="flex gap-x-2 items-center">
              <img src={icon1} className="w-10 h-10" alt="" />
              <div className="flex flex-col">
                <h3 className="font-medium text-lg">Giao hàng toàn quốc</h3>
                <p>Nhiều ưu đãi khuyến mãi hot</p>
              </div>
            </div>
            <div className="flex gap-x-2 items-center">
              <img src={icon2} className="w-10 h-10" alt="" />
              <div className="flex flex-col">
                <h3 className="font-medium text-lg">Quà tặng hấp dẫn </h3>
                <p>Nhiều ưu đãi khuyến mãi hot</p>
              </div>
            </div>
            <div className="flex gap-x-2 items-center">
              <img src={icon3} className="w-10 h-10" alt="" />
              <div className="flex flex-col">
                <h3 className="font-medium text-lg">Bảo đảm chất lượng</h3>
                <p>Sản phẩm đã được kiểm định</p>
              </div>
            </div>
            <div className="flex gap-x-2 items-center">
              <img src={icon4} className="w-10 h-10" alt="" />
              <div className="flex flex-col">
                <h3 className="font-medium text-lg">Hotline: 0964838828</h3>
                <p>Dịch vụ hỗ trợ bạn 24/7</p>
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
            <div className="flex flex-nowrap gap-x-16 mt-9 overflow-x-auto max-w-full">
                <Link to={""}>
                  <div className="flex gap-y-3 flex-col justify-center items-center flex-nowrap flex-shrink-0 flex-grow-0 basis-[40%]">
                    <img className="object-cover transition-transform duration-700 transform hover:scale-105" src={category1} alt="" />
                    <div>
                      <h3 className="text-xl">Áo nam</h3>
                      <p className="text-gray-500">63 sản phẩm</p>
                    </div>
                  </div>
                </Link>
                <Link to={""}>
                  <div className="flex gap-y-3 flex-col justify-center items-center flex-nowrap">
                    <img className="object-cover transition-transform duration-700 transform hover:scale-105" src={category2} alt="" />
                    <div>
                      <h3 className="text-xl">Áo thun nữ</h3>
                      <p className="text-gray-500">0 sản phẩm</p>
                    </div>
                  </div>
                </Link>
                <Link to={""}>
                  <div className="flex gap-y-3 flex-col justify-center items-center flex-nowrap">
                    <img className="object-cover transition-transform duration-700 transform hover:scale-105" src={category3} alt="" />
                    <div>
                      <h3 className="text-xl">Quần nam</h3>
                      <p className="text-gray-500">5 sản phẩm</p>
                    </div>
                  </div>
                </Link>
                <Link to={""}>
                  <div className="flex gap-y-3 flex-col justify-center items-center flex-nowrap">
                    <img className="object-cover transition-transform duration-700 transform hover:scale-105" src={category4} alt="" />
                    <div>
                      <h3 className="text-xl">Đầm</h3>
                      <p className="text-gray-500">5 sản phẩm</p>
                    </div>
                  </div>
                </Link>
                <Link to={""}>
                  <div className="flex gap-y-3 flex-col justify-center items-center flex-nowrap">
                    <img className="object-cover transition-transform duration-700 transform hover:scale-105" src={category5} alt="" />
                    <div>
                      <h3 className="text-xl">Quần nữ</h3>
                      <p className="text-gray-500">5 sản phẩm</p>
                    </div>
                  </div>
                </Link>
                <Link to={""}>
                  <div className="flex gap-y-3 flex-col justify-center items-center flex-nowrap">
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
    </>
  );
};
export default Home;
