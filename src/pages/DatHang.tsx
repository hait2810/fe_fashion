import { Breadcrumbs, Link, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { BsCart } from 'react-icons/bs';
import { Link as ActionLink, useNavigate } from 'react-router-dom';
import { FormAutoComplete } from '../components/FormAutoComplete';
import { FormInputText } from '../components/FormInputText';
import { formatCurrency } from '../utils/utils';
import useCartStore from '../store/useCart';
import { toast } from 'sonner';
import { cartApi } from '../api/cart';
interface IFormModel {
  fullName?: string;
  phoneNumber?: string;
  fullAddress?: string;
  provinceId?: number;
  districtId?: number;
  wardId?: number;
}
const DatHang = () => {
  const { cart = [], clearCart } = useCartStore();
  const methods = useForm<IFormModel>();
  const { data: province, isLoading: loadingProvince } = useQuery({
    queryKey: ['get-province'],
    queryFn: () =>
      axios.get('https://open.oapi.vn/location/provinces?page=0&size=100'),
    staleTime: Infinity,
  });
  const enumProvince = province?.data?.data?.map(
    (item: { id: string; name: string }) => ({
      code: item?.id,
      label: item.name,
    })
  );

  const provinceId = useWatch({
    control: methods.control,
    name: 'provinceId',
  });
  const { data: district, isLoading: loadingDistrict } = useQuery({
    queryKey: ['get-district', provinceId],
    queryFn: () =>
      axios.get(
        `https://open.oapi.vn/location/districts?page=0&size=100&provinceId=${provinceId}`
      ),
    staleTime: Infinity,
    enabled: !!provinceId,
  });
  const enumDistrict = district?.data?.data?.map(
    (item: { id: string; name: string }) => ({
      code: item?.id,
      label: item.name,
    })
  );

  const districtId = useWatch({
    control: methods.control,
    name: 'districtId',
  });

  const { data: ward, isLoading: loadingWard } = useQuery({
    queryKey: ['get-district', districtId],
    queryFn: () =>
      axios.get(
        `https://open.oapi.vn/location/wards?page=0&size=100&districtId=${districtId}`
      ),
    staleTime: Infinity,
    enabled: !!districtId,
  });
  const enumWard = ward?.data?.data?.map(
    (item: { id: string; name: string }) => ({
      code: item?.id,
      label: item.name,
    })
  );
  useEffect(() => {
    methods.setValue('districtId', undefined);
    methods.setValue('wardId', undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provinceId]);
  useEffect(() => {
    methods.setValue('wardId', undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [districtId]);
  const total = cart.reduce(
    (pre, current) => (pre += (current.priceCurrent ?? 0) * current.quantity),
    0
  );
  const navigate = useNavigate()
  const handleSubmitForm = async (data: IFormModel) => {
    try {   
        await cartApi.create({
            ...data, products: cart || [],
            total: total
        })
      toast.success("Đặt hàng thành công!!!");
      navigate("/")
      clearCart()
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };
 
  return (
    <div className="container mx-auto my-10 px-4">
      <h3 className="text-[2rem] font-sans">PAPKA FASHION</h3>
      <Breadcrumbs className="pt-2 pb-4" aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
        >
          <div className="flex items-center gap-x-1">
            <BsCart />
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
      <div className="flex flex-col lg:grid lg:grid-cols-2 max-lg:flex-col-reverse gap-x-8">
        <div>
          <span className="text-xl">Thông tin giao hàng </span>
          <div className="my-4">
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(handleSubmitForm)}>
                <div className="flex flex-col gap-4">
                  <FormInputText label="Họ và tên" name="fullName" />
                  <FormInputText label="Số điện thoại" name="phoneNumber" />
                  <FormInputText label="Địa chỉ" name="fullAddress" />
                  <FormInputText label="Thông tin bổ sung" name="description" />
                  <div className="grid grid-cols-3 gap-3  max-lg:grid-cols-[1fr]">
                    <FormAutoComplete
                      loading={loadingProvince}
                      label="Tỉnh / thành"
                      name="provinceId"
                      options={enumProvince || []}
                    />
                    <FormAutoComplete
                      loading={loadingDistrict}
                      label="Quận / huyện"
                      name="districtId"
                      options={enumDistrict || []}
                    />
                    <FormAutoComplete
                      loading={loadingWard}
                      label="Phường / xã"
                      name="wardId"
                      options={enumWard || []}
                    />
                  </div>
                </div>
                <div className="my-4 flex justify-between items-center">
                  <button
                    type="submit"
                    className="py-2 px-10 rounded-md bg-[#338DBC] text-white text-lg"
                  >
                    ĐẶT HÀNG
                  </button>
                  <ActionLink className="text-blue-400 text-lg" to="/gio-hang">
                    Giỏ hàng
                  </ActionLink>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
        <div className="list-product bg-gray-50 p-4 rounded-sm">
          <div className="items">
            <table className="w-[100%]">
              <thead></thead>
              <tbody>
                {cart.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="py-2 w-[70px] h-[70px]">
                        <div className="w-[70px] h-[70px] relative bg-white rounded-lg border-[1px] border-gray-200">
                          <div className="w-[100%] h-[100%] rounded-lg  overflow-hidden ">
                            <img
                              className="w-full rounded-lg h-full object-contain absolute left-0 right-0 top-0 bottom-0 m-auto"
                              src={item.avatar}
                              alt=""
                            />
                            <div className="bg-gray-400 rounded-full absolute text-center h-[20px] w-[20px] leading-[20px] text-white z-2  text-[12px] top-[-0.75em] right-[-0.75em] whitespace-nowrap ">
                              {item.quantity}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-2">
                        <span className="block text-lg max-lg:text-sm pl-2">
                          {item.name}
                        </span>
                        <span className="text-gray-400 block pl-2">
                          {item.size}
                        </span>
                      </td>
                      <td className="py-2">
                        <span className="text-md text-[#000000a6] font-medium pl-2 text-left">
                          {formatCurrency(item.priceCurrent || 0)}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="border-t-[1px] border-gray-300">
                  <td className="py-4 text-2xl text-nowrap">Tổng cộng</td>
                  <td className="py-4"></td>
                  <td className="text-xl py-4 text-left text-[#000000a6] font-medium">
                    {formatCurrency(total || 0)}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DatHang;
