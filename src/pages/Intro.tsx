import { Breadcrumbs, Link, Typography } from "@mui/material"
import { BiHome } from "react-icons/bi"

const Intro = () => {
    return <div className="container mx-auto max-lg:px-4">
        <Breadcrumbs className="pt-6" aria-label="breadcrumb">
            <Link
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center' }}
                color="inherit"
                href="/"
            >
                <div className="flex items-center gap-x-1">
                    <BiHome />
                    Trang chủ
                </div>
            </Link>
            <Typography
                sx={{ display: 'flex', alignItems: 'center' }}
                color="text.primary"
            >
                Giới thiệu
            </Typography>
        </Breadcrumbs>
        <div className="mt-10 flex flex-col gap-2 text-lg">
            <h3 className="text-3xl font-normal">Giới thiệu</h3>
            <p><span className="font-medium">Thương hiệu PAPKA FASHION</span> (thuộc CTY TNHH Đầu Tư và Thương Mại Minh Gia Phú) mang đến một phong cách thời trang năng động, cá tính dành cho giới trẻ.
            </p>
            <p>Xuất hiện trên thị trường từ năm 2017 , hiện nay PAPKA đã có gần 100 gian hàng tại các hệ thống siêu thị EMART, AEON MALL, GO! BIGC, WINMART, CO.OPMART, CO.OPXTRA, SENSE CITY, LOTTE MART, MEGA MARTKET,....trải dài khắp cả nước... Những sản phẩm của PAPKA mang tính tiện ích cao, cơ bản và năng động, với các dòng sản phẩm thời trang Nam/Nữ như: Áo polo, Jeans Denim, Kaki cotton, T-shirt, Sơ mi, Đầm, Váy, Yếm…              </p>
            <p>
                Tiêu chí của PAPKA luôn mong muốn đưa những sản phẩm của mình đến người tiêu dùng với những mẫu mã, chất liệu độc đáo, mới lạ được cập nhật thường xuyên với giá cả tốt nhất trong một không gian mua sắm thoải mái, sang trọng cùng với dịch vụ chăm sóc khách hàng hoàn hảo nhất.
            </p>
            <p>PAPKA mong muốn xây dựng một thương hiệu thời trang lớn mạnh trong nước phục vụ cho mọi độ tuổi và cá tính của người Việt.            </p>
            <b><i>Mọi chi tiết xin vui lòng liên hệ Bộ Phận Chăm Sóc Khách Hàng:</i></b>
            <b><i>Hotline: <span className="text-red-500">0964 838 1223</span></i></b>
            <b><i>Email: cskh-papka@minhgiaphu.com</i></b>
            <b><i>Website: www.papka.vn</i></b>
            <b><i>Fanpage: Papka Fashion</i></b>
        </div>
    </div>
}
export default Intro