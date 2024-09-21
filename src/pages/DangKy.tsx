import { Breadcrumbs, Link, Typography } from "@mui/material"
import { FormProvider, useForm } from "react-hook-form"
import { BiHome } from "react-icons/bi"
import { Link as ActionLink } from 'react-router-dom'
import { FormInputText } from "../components/FormInputText"
interface IFormModel { 
    fullname?:string
    username?: string
    password?:string
}
const DangKy = () => {
    const methods = useForm()
    const handleSubmitForm = (data: IFormModel) => {
        console.log("-----", data);

    }
    return (
        <div className="mx-auto container p-4">
                 <Breadcrumbs className="pt-2 pb-4" aria-label="breadcrumb">
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
                Đăng ký
            </Typography>
        </Breadcrumbs>
            <div className="flex justify-center">
                <div className="max-w-[600px] w-[600px]">
                <h3 className="text-3xl text-center">ĐĂNG KÝ TÀI KHOẢN</h3>
                <p className="text-center">Bạn đã tài khoản? <ActionLink className="text-blue-500" to={"/dang-nhap"}>Đăng nhập tại đây</ActionLink></p>
                <div className="my-4">
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit(handleSubmitForm)}>
                            <div className="flex flex-col gap-4">
                                <FormInputText size="small" label="Họ và tên" name="fullname" />
                                <FormInputText size="small" label="Tài khoản" name="username" />
                                <FormInputText size="small" label="Mật khẩu" name="password" />
                              
                            </div>
                            <div className="my-4 flex justify-between items-center">
                                <button type="submit" className="py-2 px-10 rounded-md bg-[#338DBC] text-white text-lg w-full">Đăng ký</button>
                            </div>
                        </form>
                    </FormProvider>
                </div>
                </div>
            </div>
        </div>
    )
}
export default DangKy