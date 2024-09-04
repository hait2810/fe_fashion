import { Breadcrumbs, Link, Typography } from "@mui/material"
import { BiHome } from "react-icons/bi"

const HuongDanMuaHang = () => {
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
                Hướng dẫn mua hàng
            </Typography>
        </Breadcrumbs>
        <div className="my-10 flex flex-col gap-2 text-lg">
            <h3 className="text-3xl font-normal">Hướng Dẫn Mua Hàng Online - PAPKA</h3>
            <p>Khi mua hàng Online, bạn có thể lựa chọn một trong cách mua hàng sau.</p>
            <div className="pl-3 flex flex-col">
                <span className="underline font-medium">Cách 1:</span>
                <span>Gọi điện đến số <span className="text-red-500">0964 838 828</span> từ 8h30 đến 21h30 tất cả các ngày trong tuần. Nhân viên bán hàng Online sẽ ghi nhận thông tin đặt hàng của bạn.</span>
                <div className="font-medium"><span className="underline">Cách 2:</span> <span> Đặt hàng trên website</span></div>
                <span>Bước 1: Bạn có thể truy cập vào website PAPKA.VN và thực hiện các cách đặt hàng đơn giản sau:</span>
                <span>
                    - Nhập thông tin khi đã biết sản phẩm vào ô tìm kiếm, bạn sẽ có kết quả ngay sau khi hoàn thành.
                </span>
                <span>
                    - Click vào từng danh mục sản phẩm để tìm kiếm
                </span>
                - Chat để được tư vấn và đặt hàng vào ô chát góc bên phải của màn hình
                <span></span>
                <span>Bước 2: Tìm được sản phẩm cần mua:</span>
                <span>
                    - Sau khi tìm được sản phẩm cần mua, bạn tiến hành đặt hàng hoặc nếu muốn mua thêm các sản phẩm khác bạn hãy thêm sản phẩm vào giỏ hàng và quay trở lại sản phẩm khác để tiến hàng mua thêm.
                </span>
                <i>*Qúa trình này có thể lặp lại cho đến khi quý khách hoàn tất việc bỏ tất cả các sản phẩm cần đặt mua vào giỏ hàng. - Tại trang giỏ hàng, bạn có thể bấm nút "Xoá" nếu muốn huỷ sản phẩm đã chọn để mua sản phẩm khác.
                </i>
                <span>- Sau khi đã chọn được sản phẩm cần mua, bạn bấm vào nút <span className="font-medium">THANH TOÁN</span> và điền đầy đủ thông tin cá nhân bảng thông tin.</span>
                <i>* Thông tin cá nhân người nhận hàng cần được điền chính xác và đầy đủ để sản phẩm đến tay khách hàng nhanh nhất.</i>
                <span>- Chọn hình thức thanh toán</span>
                <span>+ Thanh toán khi nhận hàng</span>
                <span>- Sau khi điền đầy đủ thông tin và kiểm tra lại đơn hàng, giá tiền, bạn hãy bấm vào nút HOÀN TẤT ĐƠN HÀNG gửi về cho PAPKA.</span>
                <span>PAPKA sẽ gọi điện lại để xác nhận đơn hàng và thông tin giao hàng.</span>
                <i className="font-medium underline text-lg">Mọi chi tiết xin liên hệ Bộ phận Chăm Sóc Khách Hàng</i>
                <span>Hotline: <span className="text-red-500">0964 838 828 – ( 028 ) 62 60 25 41</span></span>
                <span>
                Email: cskh-papka@minhgiaphu.com
                </span>
                <span>Website: https://main--fe-fashion.netlify.app/</span>
                <span>Fanpage: ...</span>
            </div>
        </div>
    </div>
}
export default HuongDanMuaHang