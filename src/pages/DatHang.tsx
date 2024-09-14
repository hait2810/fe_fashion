import { Breadcrumbs, Link, Typography } from "@mui/material"
import { FormProvider, useForm } from "react-hook-form"
import { BiHome } from "react-icons/bi"
import { FormInputText } from "../components/FormInputText"
import { FormAutoComplete } from "../components/FormAutoComplete"

const DatHang = () => {
    const methods = useForm()
    return <div className="container mx-auto my-10 px-4">
        <div className="grid grid-cols-2 gap-x-4">
            <div>
                <h3 className="text-[2rem] font-sans">PAPKA FASHION</h3>
                <Breadcrumbs className="pt-6" aria-label="breadcrumb">
                    <Link
                        underline="hover"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="inherit"
                        href="/"
                    >
                        <div className="flex items-center gap-x-1">
                            <BiHome />
                            Giỏ hàng
                        </div>
                    </Link>
                    <Typography
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="text.primary"
                    >
                        Đặt hàng
                    </Typography>
                </Breadcrumbs>
                <span className="text-xl">Thông tin giao hàng </span>
                <div className="my-4">
                    <FormProvider {...methods}>
                        <form>
                            <div className="flex flex-col gap-4">
                                <FormInputText label="Họ và tên" name="fullName" />
                                <FormInputText label="Số điện thoại" name="phoneNumber" />
                                <FormInputText label="Địa chỉ" name="fullAddress" />
                                <div className="grid grid-cols-3">
                                    <FormAutoComplete label="Tỉnh" name="provider" options={[]} />
                                </div>
                            </div>

                        </form>
                    </FormProvider>
                </div>
            </div>
            <div className="list-product"></div>
        </div>
    </div>
}
export default DatHang