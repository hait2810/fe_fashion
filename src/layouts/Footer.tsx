import { CiLocationOn, CiPhone } from "react-icons/ci";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { Link } from "react-router-dom";
import logofooter from "../assets/images/logo-footer.webp";
const Footer = () => {
    return <footer className="bg-[#2e2e2e]">
        <div className="mx-auto container p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <div className="item flex flex-col text-white gap-3 text-lg">
                    <img src={logofooter} alt="" className="w-[164px] h-12" />
                    <div className="flex items-center gap-x-3">
                        <CiLocationOn className="flex-grow-0 flex-shrink-0 basis-[20px]" />
                        <p>Địa chỉ: 142-144-146 Đường 13, Phường Bình Trị Đông B, Quận Bình Tân, Thành phố Hồ Chí Minh, Việt Nam</p>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <CiPhone className="flex-grow-0 flex-shrink-0 basis-[20px]" />
                        <div>
                            Số điện thoại:  <Link className="hover:text-blue-500 cursor-pointer hover:font-bold" to="tel:+849876543210">09876543210</Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <MdOutlineMarkEmailUnread className="flex-grow-0 flex-shrink-0 basis-[20px]" />
                        <div>
                            Email:  <Link className="hover:text-blue-500 cursor-pointer hover:font-bold" to="mailto:cskh-papka@minhgiaphu.com">cskh-papka@minhgiaphu.com</Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <span className="text-sm">
                            © Bản quyền thuộc về <span className="text-blue-500 text-base">DuyKhanh</span>
                        </span>
                    </div>
                </div>
                <div className="item flex flex-col text-white gap-3 text-lg">
                    <h3 className="text-white font-medium text-2xl">Hướng dẫn</h3>
                    <Link className="hover:text-blue-500" to="">Hướng dẫn mua hàng</Link>
                    <Link className="hover:text-blue-500" to="">Hướng dẫn chọn size</Link>
                    <Link className="hover:text-blue-500" to="">Hướng dẫn bảo quản
                    </Link>
                    <Link className="hover:text-blue-500" to="">Chính sách đổi trả</Link>
                    <Link className="hover:text-blue-500" to="">Chính sách thanh toán</Link>
                    <Link className="hover:text-blue-500" to="">Chính sách giao nhận</Link>
                    <Link className="hover:text-blue-500" to="">Chính sách bảo mật</Link>
                    <Link className="hover:text-blue-500" to="">Chính sách bảo mật</Link>
                </div>
                <div className="item flex flex-col text-white gap-3 text-lg">
                    <h3 className="text-white font-medium text-2xl">Hỗ trợ khách hàng</h3>
                    <Link className="hover:text-blue-500" to="/">Trang chủ</Link>
                    <Link className="hover:text-blue-500" to="/intro">Về PAPKA</Link>
                    <Link className="hover:text-blue-500" to="">Bộ Sưu Tập</Link>
                    <Link className="hover:text-blue-500" to="">Kiểm tra đơn hàng</Link>
                </div>
                <div className="item flex flex-col text-white gap-3 text-lg">
                    <h3 className="text-white font-medium text-2xl">Fanpage của chúng tôi</h3>
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100083072873664&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=false&appId=3583327688661724" width="340" height="500" className="overflow-hidden" scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
            </div>

        </div>
    </footer>
}
export default Footer