import {
  Autocomplete,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from '@mui/material';
import { DataGrid, GridColDef, GridPaginationModel } from '@mui/x-data-grid';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { HiMiniWrench } from 'react-icons/hi2';
import { toast } from 'sonner';
import { cartApi, ICart } from '../../../api/cart';
import { formatCurrency, formatTime } from '../../../utils/utils';
interface PropsForm {
  data: ICart[];
}
export type FormDisplayForwardRef = {
  openDialog: (data: ICart, isOpen: boolean) => void;
};

const status: any = {
  0: {
    title: 'Đang chờ xử lý',
    color: 'info'
  },
  1: {
    title: 'Đơn đã được giao',
    color: 'success'
  },
  '-1': {
    title: 'Đơn bị huỷ',
    color: 'error'
  }
};

const FormDisplay = forwardRef<FormDisplayForwardRef, PropsForm>(
  (_props, ref) => {
    const [open, setOpen] = React.useState(false);
    const [cart, setCart] = React.useState<ICart>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    useImperativeHandle(ref, () => ({
      openDialog: (data: ICart, isOpen: boolean) => {
        setCart(data);
        setOpen(isOpen);
      },
    }));

    const handleClose = () => {
      setOpen(false);
    };
    const queryClient = useQueryClient();
    const handleSubmitForm = async () => {
      setIsLoading(true);
      try {
        await cartApi.update({ status: cart?.status, _id: cart?._id });
        queryClient.invalidateQueries({
          queryKey: ['get_all_cart'],
        });
        toast.success('Cập nhật thành công!!!');
        handleClose()
      } catch (error: any) {
        toast.error(error?.response?.data?.message);
      }
      setIsLoading(false);
    };
    const total = cart?.products?.reduce(
      (pre, current) => (pre += (current.priceCurrent ?? 0) * current.quantity),
      0
    );
    return (
      <React.Fragment>
        <Dialog maxWidth="xl" open={open} fullWidth onClose={handleClose}>
          <DialogTitle>{'Thông tin đơn hàng'}</DialogTitle>
          <DialogContent>
            <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
              <div className="flex justify-start item-start space-y-2 flex-col">
                <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                  Mã đơn hàng: {cart?._id}
                </h1>
                <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">
                  Thời gian: {formatTime(cart?.createdAt || new Date())}
                </p>
              </div>
              <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                  <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                    <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
                      Sản phẩm
                    </p>
                    {cart?.products?.map((item) => {
                      return (
                        <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                          <div className="pb-4 md:pb-8 w-full md:w-40">
                            <img
                              className="w-full hidden md:block"
                              src={item?.avatar}
                              alt="dress"
                            />
                            <img
                              className="w-full md:hidden"
                              src={item?.avatar}
                              alt="dress"
                            />
                          </div>
                          <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                            <div className="w-full flex flex-col justify-start items-start space-y-8">
                              <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                                {item?.name}
                              </h3>
                              <div className="flex justify-start items-start flex-col space-y-2">
                                <p className="text-sm dark:text-white leading-none text-gray-800">
                                  <span className="dark:text-gray-400 text-gray-300">
                                    Size:{' '}
                                  </span>{' '}
                                  {item?.size}
                                </p>
                              </div>
                            </div>
                            <div className="flex justify-between space-x-8 items-start w-full">
                              <p className="text-base dark:text-white xl:text-lg leading-6">
                                {formatCurrency(item.priceCurrent || 0)}
                                <span className="text-red-300 line-through">
                                  {' '}
                                  {item.priceOld &&
                                    item.priceOld > 0 &&
                                    formatCurrency(item.priceOld || 0)}
                                </span>
                              </p>
                              <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
                                {item.quantity}
                              </p>
                              <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                                {formatCurrency(
                                  (item.priceCurrent ?? 0) *
                                    Number(item.quantity)
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-center flex-col md:flex-row items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                    <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                      <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
                        Thông tin
                      </h3>
                      <div className="flex justify-between items-center w-full">
                        <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">
                          Tổng tiền
                        </p>
                        <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
                          {formatCurrency(total || 0)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                  <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
                    Khách hàng
                  </h3>
                  <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                    <div className="flex flex-col justify-start items-start flex-shrink-0">
                      <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                        <img
                          className="w-10 h-10 rounded-md"
                          src="https://res.cloudinary.com/dyhw0lclk/image/upload/v1726756023/products/1726756258982.jpg"
                          alt="avatar"
                        />
                        <div className="flex justify-start items-start flex-col space-y-2">
                          <p className="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">
                            {cart?.fullName}
                          </p>
                          <p className="text-sm dark:text-gray-300 leading-5 text-gray-600">
                            {cart?.phoneNumber}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                      <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                        <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                          <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                            Địa chỉ giao hàng
                          </p>
                          <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                            {cart?.fullAddress || ''}
                          </p>
                        </div>
                        <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4">
                          <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                            Địa chỉ thanh toán
                          </p>
                          <p className="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                            {cart?.fullAddress || ''}
                          </p>
                        </div>
                      </div>
                      <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                        <Chip
                          color={status[String(cart?.status)]?.color}
                          label={status[String(cart?.status)]?.title}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Autocomplete
                  disablePortal
                  clearIcon={false}
                  onChange={(_e: any, value) => {
                    setCart((old) => ({ ...old, status: value?.id || 0 }));
                  }}
                  options={[
                    { label: 'Đang chờ xử lý', id: 0 },
                    { label: 'Đơn đã được giao', id: 1 },
                    { label: 'Huỷ đơn', id: -1 },
                  ]}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField
                      variant="outlined"
                      {...params}
                      label="Chọn trạng thái"
                    />
                  )}
                />
              </div>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Đóng</Button>
            <Button
              disabled={isLoading}
              onClick={handleSubmitForm}
              variant='contained'
              type="button"
            >
              {isLoading ? 'Đang thực hiện ...' : 'Xác nhận'}
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
);

const CartList = () => {
  const [filter, setFilter] = useState<{ page?: number; size?: number }>({
    page: 1,
    size: 10,
  });
  const { data } = useQuery({
    queryKey: ['get_all_cart', filter],
    queryFn: () => cartApi.list(filter),
    staleTime: Infinity,
  });
  const modalStateRef = useRef<FormDisplayForwardRef | null>(null);

  const columns: GridColDef[] = [
    {
      field: 'fullName',
      headerName: 'Tên người nhận',
      minWidth: 150,
      hideSortIcons: true,
    },
    {
      field: 'phoneNumber',
      headerName: 'Số điện thoại',
      minWidth: 150,
      hideSortIcons: true,
      renderCell: (props) => props.row.phoneNumber,
    },
    {
      field: 'total',
      headerName: 'Tổng tiền',
      minWidth: 150,
      hideSortIcons: true,
      renderCell: (props) => formatCurrency(props.row.total),
    },
    {
      field: 'fullAddress',
      headerName: 'Địa chỉ',
      minWidth: 150,
      hideSortIcons: true,
    },
    {
      field: 'status',
      headerName: 'Trạng thái',
      minWidth: 180,
      hideSortIcons: true,
      renderCell: (props) => (
        <Chip
          color={status[String(props?.row?.status)]?.color}
          label={status[String(props?.row?.status)]?.title}
        />
      ),
    },
    {
      field: 'description',
      headerName: 'Mô tả',
      minWidth: 150,
      hideSortIcons: true,
    },
    {
      field: 'action',
      headerName: 'Tác động',
      hideSortIcons: true,
      renderCell: (props) => {
        return (
          <div className="flex gap-x-2 items-center">
            <IconButton
              onClick={() => modalStateRef.current?.openDialog(props.row, true)}
              aria-label="edit"
            >
              <HiMiniWrench />
            </IconButton>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <h3 className="text-2xl mb-8">Danh sách đơn hàng</h3>
      <FormDisplay ref={modalStateRef} data={data?.data || []} />
      <DataGrid
        rows={data?.data}
        rowSelection={false}
        rowCount={data?.count ?? 0}
        getRowId={(row) => row?._id}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { page: 0, pageSize: 10 } },
        }}
        onPaginationModelChange={(model: GridPaginationModel) => {
          setFilter((old) => ({
            ...old,
            page: model?.page || 1,
            size: model?.pageSize || 10,
          }));
        }}
        pageSizeOptions={[10, 20, 50, 100]}
        sx={{ border: 0 }}
      />
    </>
  );
};
export default CartList;
