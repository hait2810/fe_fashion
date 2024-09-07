import { Accordion, AccordionDetails, AccordionSummary, Breadcrumbs, Link, Typography } from "@mui/material";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import { BiHome } from "react-icons/bi";
import { HiMinusSm, HiOutlinePlusSm } from "react-icons/hi";
import { MdExpandMore } from "react-icons/md";
import { Link as LinkA } from "react-router-dom";
import { formatCurrency } from "../utils/utils";


interface IFormOrder {
    size: string
    quantity: number
}

const listSize = ['S', 'M', 'L', 'XL', 'XXL']

const ChiTietSanPham = () => {
    const {
        register,
        control,
        getValues,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<IFormOrder>()
    const onSubmit: SubmitHandler<IFormOrder> = (data) => {
        console.log(data);
    }
    const size = useWatch({
        control,
        name: 'size'
    })
    console.log(errors);

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
        <div className="grid grid-cols-1 md:grid-cols-2 my-6 gap-x-10 gap-y-4">
            <div className="border-[1px] rounded-lg border-gray-200 max-h-[500px] mx-auto w-full">
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <span className="text-xl font-medium">Kích thước: <span className="text-red-500">{size}</span> </span>
                        <div className="flex flex-wrap gap-2 my-2">
                            {listSize.map((item, index) => {
                                return <div key={index} className={`item relative py-2 px-4 border-[1px]  ${size === item ? 'border-gray-900' : 'border-gray-300'} rounded-md`}>
                                    <label>{item}   </label>
                                    <input className="absolute left-0 top-0 right-0 bottom-0 opacity-0" type="radio" {...register('size', { required: "Vui lòng chọn size" })} value={item} />
                                </div>
                            })}

                        </div>
                    </div>
                    <div>
                        <span className="text-xl font-medium">Số lượng: </span>
                        <div className="flex gap-x-4 flex-nowrap">
                            <div className="relative">
                                <HiMinusSm onClick={() => {
                                    const quantity = Number(getValues('quantity')) > 1 ? Number(getValues('quantity')) - 1 : 1
                                    setValue('quantity', quantity)
                                }} className="absolute cursor-pointer left-2 right-0 top-2 bottom-0 text-gray-400 w-[25px] h-auto" /><input defaultValue={1} type="number" {...register('quantity', { required: true, min: 1 })} className="text-center border-[1px] border-gray-200 outline-none py-2 w-[130px] rounded-md" /> <HiOutlinePlusSm className="absolute left-[6rem] right-0 top-2 bottom-0 text-gray-400 w-[25px] h-auto cursor-pointer" onClick={() => {
                                    setValue('quantity', Number(getValues('quantity')) + 1)
                                }} />
                            </div>
                            <button className="py-2 px-4 max-w-full w-full rounded-md bg-white text-red-500 outline-none border-[#ff8d22c9] border-[1px] hover:bg-[#ff8d22c9] hover:text-white font-medium" type="button">THÊM ĐƠN HÀNG</button>
                        </div>
                    </div>
                    <button type="submit" className="outline-none w-full bg-red-500 rounded-md py-3 mt-5 text-white">MUA NGAY</button>
                    <div className="mt-4">
                        <Accordion defaultExpanded>
                            <AccordionSummary
                                expandIcon={<MdExpandMore />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                Mô tả sản phẩm
                            </AccordionSummary>
                            <AccordionDetails>
                                Nội dung đang được cập nhật
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<MdExpandMore />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                Chính sách thanh toán, giao hàng
                            </AccordionSummary>
                            <AccordionDetails className="flex flex-col">
                                <strong>
                                    I. Chính sách giao nhận
                                </strong>
                                <strong>
                                    1. Phí ship
                                </strong>
                                <span>
                                    - Phí giao hàng đồng giá 25.000 nội thành TP.HCM
                                </span>
                                <span>
                                    - Phí giao hàng đồng giá 35.000 các tỉnh/thành khác.
                                </span>
                                <strong>
                                    2. Thời gian giao hàng
                                </strong>
                                <span>- Khu vực nội thành TP.HCM: Từ 1 – 3 ngày</span>
                                <span>- Khu vực ngoại thành và các thành phố lớn: 3 – 7 ngày </span>
                                <strong>
                                    II. Chính sách thanh toán
                                </strong>
                                <span>
                                    Khách hàng có thể lựa chọn các hình thức thanh toán sau khi mua sắm trực tuyến tại PAPKA.VN
                                </span>
                                <strong>
                                    1. Thanh toán trực tiếp COD :
                                </strong>
                                <span>
                                    COD (dịch vụ giao hàng nhận tiền):  Nhân viên vận chuyển thu tiền mặt khi giao hàng cho khách.
                                </span>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<MdExpandMore />}
                                aria-controls="panel3-content"
                                id="panel3-header"
                            >
                                Chính sách đổi trả
                            </AccordionSummary>
                            <AccordionDetails className="flex flex-col">
                                <span>
                                    Khách hàng mua Online muốn ĐỔI/TRẢ làm theo các bước sau:
                                </span>
                                <span>
                                    1.Gọi số hotline 0964 838 828 HOẶC NHẮN TIN QUA FANPAGE PAPKA FASHION để được hướng dẫn chi tiết.
                                </span>
                                <span>
                                    2.Đóng gói sản phẩm.
                                </span>
                                <span>
                                    3.Gửi về địa chỉ: Kho Online của PAPKA: 142-144-146 Đường 13, Phường Bình Trị Đông B, Quận Bình Tân, Thành phố Hồ Chí Minh, Việt Nam
                                </span>
                                <strong>
                                    THÔNG TIN CHI TIẾT CHÍNH SÁCH ĐỔI/TRẢ TẠI PAPKA.VN
                                </strong>
                                <span>
                                    Nhằm giúp quý khách an tâm chọn lựa cho mình một sản phẩm ưng ý và phục vụ khách hàng chu đáo, PAPKA thông báo đến quý khách hàng
                                </span>
                                <span>
                                    CHÍNH SÁCH ĐỔI TRẢ SẢN PHẨM chi tiết sau:
                                </span>
                                <strong className="mt-2">
                                    I. ĐIỀU KIỆN ĐỔI - TRẢ:
                                </strong>
                                <span>
                                    - Sản phẩm đổi phải còn đầy đủ hóa đơn, nhãn mác, không bị dơ, không bị hư hỏng kể từ ngày nhận được sản phẩm.
                                </span>
                                <span> - Sản phẩm bị lỗi về chất lượng, quy cách sản xuất của Công ty: ố màu, phai màu, lỗi chất liệu, lỗi đường may, lỗi kiểu dáng,...không đúng theo mô tả và tiêu chuẩn sản phẩm.
                                </span>
                                <span>- Không áp dụng đổi hàng với các sản phẩm đã quá thời gian quy định, sản phẩm đã sử dụng, không còn nguyên vẹn.
                                </span>
                                <span> - Các sản phẩm được thay đổi, chỉnh sửa một số chi tiết theo yêu cầu khách hàng đều không được đổi trả hoặc hoàn tiền lại.
                                </span>
                                <span>- Các sản phẩm Khách hàng tự ý can thiệp sửa chữa không tại Bộ phận Bảo hành của PAPKA sẽ không được đổi trả hoặc hoàn tiền lại.
                                </span>
                                <span>
                                    - Bộ phận Chăm Sóc Khách Hàng sẽ giải quyết khiếu nại của Khách hàng trong vòng từ 01 đến 05 ngày làm việc kể từ ngày tiếp nhận thông tin.Trong mọi trường hợp, quyết định của PAPKA Fashion là quyết định cuối cùng.
                                </span>
                                <strong className="mt-2">
                                    II. THỜI GIAN ĐỔI - TRẢ
                                </strong>
                                <span>2.1/ Hệ thống cửa hàng Offline: Theo qui định đổi/trả của hệ thống Siêu Thị tại nơi mua.
                                </span>
                                <span>2.2/ Hệ thống Online : Đổi trả có phí 1 chiều trong vòng 07 ngày ( Tính từ ngày nhận được đơn hàng) Và chỉ được đổi 01 lần duy nhất với giá trị bằng hoặc cao hơn nếu thấp hơn sẽ không được hoàn tiền.
                                </span>
                                <strong className="mt-2">
                                    III. QUY TRÌNH ĐỔI TRẢ

                                </strong>
                                <span>
                                    3.1/ Áp dụng đổi trả: Đổi trả tại nơi khách mua hàng.
                                </span>
                                <span>
                                    3.2/ Cùng mã sản phẩm (chỉ đổi size, đổi màu): cùng giá, không bù tiền
                                </span>               
                                <span>3.3/ Đổi khác mã sản phẩm: </span>
                                <span>- Giá trị SP mới tại thời điểm đổi hàng lớn hơn Giá trị SP cũ (dựa theo giá trị trên hóa đơn thanh toán): khách hàng sẽ bù thêm tiền phần chênh lệch. Ví dụ: SP mua với giá 250.000d . SP muốn đổi giá trị 300.000d &gt; KH sẽ bù 50.000d.</span>
                                <span>- Giá trị SP mới tại thời điểm đổi hàng nhỏ hơn Giá trị SP cũ (dựa trên giá trị trên hóa đơn thanh toán): PAPKA sẽ KHÔNG hoàn lại tiền thừa.</span>  
                                <span>
                                Ví dụ: SP mua với giá 250.000d, SP muốn đổi giá trị 200.000d ={">"} PAPKA sẽ KHÔNG hoàn lại 50.000d cho khách hàng.
                                </span>
                                <strong>
                                Lưu ý: 
                                </strong>
                                <span>
                                - Online: khách hàng gửi hình ảnh hoặc sản phẩm về cho kho hàng online
                                </span>
                                <span>+ Sản phẩm do lỗi sản xuất: mọi chi phí vận chuyển trả hàng do PAPKA chi trả.</span>
                                <span>+ Lý do khác: mọi chi phí vận chuyển do khách hàng chi trả.
                                </span>
                                           </AccordionDetails>
                        </Accordion>
                    </div>
                </form>
            </div>
        </div>
    </div>
}
export default ChiTietSanPham