import { yupResolver } from "@hookform/resolvers/yup";
import { Breadcrumbs, Button, Link, Typography } from "@mui/material";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { BiHome } from "react-icons/bi";
import { Link as ActionLink, useNavigate } from 'react-router-dom';
import { toast } from "sonner";
import * as yup from 'yup';
import { Signin } from "../api/user";
import { FormInputText } from "../components/FormInputText";
import useUserStore from "../store/userStore";

interface IFormModel {
    username: string
    password: string
}
const schema = yup.object().shape({
    username: yup
        .string()
        .required("Tài khoản không được để trống!!!"),
    password: yup
        .string()
        .required("Mật khẩu không được để trống!!!")
})
const DangNhap = () => {
    const methods = useForm({
        resolver: yupResolver(schema)
    })
    const { setUser, data: userLogin } = useUserStore()
    const navigate = useNavigate()
    const handleSubmitForm = async (data: IFormModel) => {
        try {
            const { data: user } = await Signin(data)
            setUser(user)
            toast.success("Đăng nhập thành công!!!")
            navigate("/")
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
                    Đăng nhập
                </Typography>
            </Breadcrumbs>
            <div className="flex justify-center">
                <div className="max-w-[600px] w-[600px]">
                    <h3 className="text-3xl text-center">ĐĂNG NHẬP TÀI KHOẢN</h3>
                    <p className="text-center">Bạn chưa có tài khoản? <ActionLink className="text-blue-500" to={"/dang-ky"}>Đăng ký tại đây</ActionLink></p>
                    <div className="my-4">
                        <FormProvider {...methods}>
                            <form onSubmit={methods.handleSubmit(handleSubmitForm)}>
                                <div className="flex flex-col gap-4">
                                    <FormInputText size="small" label="Tài khoản" name="username" />
                                    <FormInputText type="password" size="small" label="Mật khẩu" name="password" />

                                </div>
                                <div className="my-4 flex justify-between items-center">
                                    <Button type="submit" variant="contained" className="py-2 px-10 rounded-md  text-white text-lg w-full">Đăng nhập</Button>
                                </div>
                            </form>
                        </FormProvider>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DangNhap