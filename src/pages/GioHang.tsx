import { Breadcrumbs, Link, Typography } from "@mui/material"
import { BiHome } from "react-icons/bi"
import { IoIosClose } from "react-icons/io"
import { Link as ActionLink } from 'react-router-dom'
import { formatCurrency } from "../utils/utils"
import { HiMinusSm, HiOutlinePlusSm } from "react-icons/hi"
const GioHang = () => {
    return <div className="container mx-auto p-2">
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
                Giỏ hàng
            </Typography>
        </Breadcrumbs>
        <h3 className="text-3xl font-normal my-4">Giỏ hàng</h3>
        <div className="grid grid-cols-[70%_1fr] max-lg:grid-cols-[1fr] my-6 gap-10">
            <div className="items flex flex-col gap-2 max-h-[500px] overflow-y-auto">
                <div className="item flex items-center gap-x-4">
                    <div className="flex gap-x-4 items-center">
                        <button type="button"><IoIosClose className="h-7 w-7 text-gray-400" /></button>
                        <img className="max-h-32 max-w-32 max-lg:w-20 max-lg:h-20" src="https://product.hstatic.net/1000235488/product/1123_soc_be_7b561dcc8fde49b891c87f7be3c86190_compact.png" alt="" />
                    </div>
                    <div className="flex gap-x-2 justify-between max-lg:flex-col">
                        <div className="flex flex-col">
                            <ActionLink className="text-xl hover:text-blue-400 outline-none" to="">Áo sơ mi Nam tay ngắn Papka 1123 sọc be</ActionLink>
                            <span className="text-gray-400">XXL</span>
                        </div>
                        <div className="flex gap-x-2 text-ellipsis whitespace-normal overflow-hidden">
                            <span className="text-xl text-red-400">
                                {formatCurrency(29392)}
                            </span>
                            <div className="relative">
                                <HiMinusSm className="absolute cursor-pointer left-2 right-0 top-1 bottom-0 text-gray-400 w-[25px] h-auto" /><input defaultValue={1} type="number" className="text-center border-[1px] border-gray-200 outline-none py-1 w-[130px] rounded-md" /> <HiOutlinePlusSm className="absolute left-[6rem] right-0 top-1 bottom-0 text-gray-400 w-[25px] h-auto cursor-pointer" />
                            </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className="info bg-gray-100 p-4 rounded-sm max-lg:bg-inherit max-lg:px-0 max-lg:pt-6 max-lg:border-t-2">
                <span className="text-2xl">THÔNG TIN</span>
                <div className="flex item-center justify-between mt-8">
                    <span className="text-xl">TỔNG CỘNG</span>
                    <span className="text-red-300 text-xl">{formatCurrency(12020120)}</span>
                </div>
                <i className="text-gray-400 flex justify-end">(Đã bao gồm VAT nếu có)</i>
                <button className="bg-black text-white py-2 px-4 max-lg:px-0 mt-3 w-full">THANH TOÁN</button>
            </div>
        </div>
    </div>
}
export default GioHang