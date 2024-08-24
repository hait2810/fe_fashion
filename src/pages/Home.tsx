import icon1 from "../assets/icon/policies_icon_1.webp";
import icon2 from "../assets/icon/policies_icon_2.webp";
import icon3 from "../assets/icon/policies_icon_3.webp";
import icon4 from "../assets/icon/policies_icon_4.webp";
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
              <h3 className="text-5xl text-center font-light">Thời trang PAPKA</h3>
            </div>
        </div>
      </section>
    </>
  );
};
export default Home;
