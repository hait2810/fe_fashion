import { yupResolver } from "@hookform/resolvers/yup"
import { Breadcrumbs, Button, Link, Typography } from "@mui/material"
import { useEffect } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { BiHome } from "react-icons/bi"
import { Link as ActionLink, useNavigate } from 'react-router-dom'
import { toast } from "sonner"
import * as yup from 'yup'
import { Signup } from "../api/user"
import { FormInputText } from "../components/FormInputText"
import useUserStore from "../store/userStore"
interface IFormModel {
    fullname?: string
    username: string
    password: string
}

const schema = yup.object().shape({
    username: yup
        .string()
        .required("Tài khoản không được để trống!!!"),
    fullname: yup
        .string()
        .required("Họ và tên không được để trống!!!"),
    password: yup
        .string()
        .required("Mật khẩu không được để trống!!!"),
    repassword: yup
        .string()
        .oneOf([yup.ref('password'), undefined], "Mật khẩu không khớp!!!")
        .required("Không được để trống!!!")
});

const DangKy = () => {
    const methods = useForm({
        resolver: yupResolver(schema)
    })
    const { data: userLogin } = useUserStore()
    const navigate = useNavigate()
    const handleSubmitForm = async (data: IFormModel) => {
        try {
            await Signup(data)
            toast.success("Đăng ký thành công!!!")
            navigate("/dang-nhap")
        } catch (error: any) {
            toast.error(error?.response?.data?.message)
        }
    }
    useEffect(() => {
        if (userLogin?.username) {
            navigate("/")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userLogin])
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
                                    <FormInputText size="small" type="password" label="Mật khẩu" name="password" />
                                    <FormInputText size="small" type="password" label="Nhập lại mật khẩu" name="repassword" />

                                </div>
                                <div className="my-4 flex justify-between items-center">
                                    <Button type="submit" variant="contained" className="py-2 px-10 rounded-md  text-white text-lg w-full">Đăng ký</Button>
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