import { Breadcrumbs, Link, Typography } from "@mui/material";
import { BiHome } from "react-icons/bi";
import { Link as LinkA } from "react-router-dom";
import { formatCurrency } from "../utils/utils";


const ChiTietSanPham = () => {
    return <div className="container mx-auto p-4">
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
                Chi tiết sản phẩm
            </Typography>
            <Typography
                sx={{ display: 'flex', alignItems: 'center' }}
                color="text.primary"
            >
                Áo phông abc
            </Typography>
        </Breadcrumbs>
        <div className="grid grid-cols-2 my-6 gap-x-10">
                <div className="border-[1px] rounded-lg border-gray-200">
                    <img className="p-2 mx-auto" src="https://product.hstatic.net/1000235488/product/1045_9_ae47b370893f4dcc807b41b13dfe191e_large.jpg" alt="" />
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="font-medium text-2xl">Quần Short Nam ICONDENIM Brushed Terry Fabric </h3>
                    <div className="bg-red-500 w-fit px-2 rounded-sm ml-2">
                        <p className="text-white text-center text-sm">Còn hàng</p>
                    </div>
                    <div className="flex gap-x-2 text-lg mt-2">
                        <div><span>Loại: </span><LinkA className="font-medium" to="">Quần Short</LinkA></div>
                        <div>
                            |
                        </div>
                            <span>MSP: <span className="font-medium">QH012013</span></span>
                    </div>
                    <p className="font-medium text-xl border-b-2">{formatCurrency(289912)}</p>
                </div>
        </div>
    </div>
}
export default ChiTietSanPham