import { Breadcrumbs, Link, Typography } from "@mui/material"
import { FormProvider, useForm, useWatch } from "react-hook-form"
import { BiHome } from "react-icons/bi"
import { Link as ActionLink } from 'react-router-dom'
import { FormAutoComplete } from "../components/FormAutoComplete"
import { FormInputText } from "../components/FormInputText"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useEffect } from "react"

const DatHang = () => {
    const methods = useForm()
    const { data: province, isLoading: loadingProvince } = useQuery({
        queryKey: ['get-province'],
        queryFn: () => axios.get('https://open.oapi.vn/location/provinces?page=0&size=100'),
        staleTime: Infinity
    })
    const enumProvince = province?.data?.data?.map((item: { id: string; name: string }) => ({
        code: item?.id,
        label: item.name
    }))

    const provinceId = useWatch({
        control: methods.control,
        name: 'provinceId'
    })
    const { data: district, isLoading: loadingDistrict } = useQuery({
        queryKey: ['get-district', provinceId],
        queryFn: () => axios.get(`https://open.oapi.vn/location/districts?page=0&size=100&provinceId=${provinceId}`),
        staleTime: Infinity,
        enabled: !!provinceId
    })
    const enumDistrict = district?.data?.data?.map((item: { id: string; name: string }) => ({
        code: item?.id,
        label: item.name
    }))

    const districtId = useWatch({
        control: methods.control,
        name: 'districtId'
    })

    const { data: ward, isLoading: loadingWard } = useQuery({
        queryKey: ['get-district', districtId],
        queryFn: () => axios.get(`https://open.oapi.vn/location/wards?page=0&size=100&districtId=${districtId}`),
        staleTime: Infinity,
        enabled: !!districtId
    })
    const enumWard = ward?.data?.data?.map((item: { id: string; name: string }) => ({
        code: item?.id,
        label: item.name
    }))
    useEffect(() => {
        methods.setValue('districtId', undefined)
        methods.setValue('wardId', undefined)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [provinceId])
    useEffect(() => {
        methods.setValue('wardId', undefined)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [districtId])
    return <div className="container mx-auto my-10 px-4">
        <div className="grid grid-cols-2 max-lg:grid-cols-[1fr] gap-x-4">
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
                                <div className="grid grid-cols-3 gap-3  max-lg:grid-cols-[1fr]">
                                    <FormAutoComplete loading={loadingProvince} label="Tỉnh / thành" name="provinceId" options={enumProvince || []} />
                                    <FormAutoComplete loading={loadingDistrict} label="Quận / huyện" name="districtId" options={enumDistrict || []} />
                                    <FormAutoComplete loading={loadingWard} label="Phường / xã" name="wardId" options={enumWard || []} />
                                </div>
                            </div>
                            <div className="my-4 flex justify-between items-center">
                                <button className="py-4 px-20 rounded-md bg-[#338DBC] text-white text-lg">ĐẶT HÀNG</button>
                                <ActionLink className="text-blue-400 text-lg" to="/gio-hang">Giỏ hàng</ActionLink>
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