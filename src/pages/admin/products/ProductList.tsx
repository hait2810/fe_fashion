import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField
} from '@mui/material';
import { DataGrid, GridColDef, GridPaginationModel } from '@mui/x-data-grid';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { FormProvider, useForm, useWatch } from 'react-hook-form';
import { HiMiniArchiveBoxXMark, HiMiniWrench } from 'react-icons/hi2';
import { toast } from 'sonner';
import { category, ICategory } from '../../../api/cateogry';
import { IProduct, products } from '../../../api/products';
import { Upload } from '../../../api/upload';
import { FormAutoComplete, OptionType } from '../../../components/FormAutoComplete';
import { FormInputText } from '../../../components/FormInputText';
import { FormAutoComplateMulti } from '../../../components/FormAutoComplateMulti';
import { formatCurrency, formatNumber } from '../../../utils/utils';
interface PropsForm {
  data: ICategory[]
}
export type FormDisplayForwardRef = {
  openDialog: (data: ICategory, isOpen: boolean) => void
}
const FormDisplay = forwardRef<FormDisplayForwardRef, PropsForm>((props, ref) => {
  const { data } = props
  const [imagePreview, setImagePreview] = useState<string>('')
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const methods = useForm<IProduct>();
  const handleClickOpen = () => {
    setOpen(true);
  };

  useImperativeHandle(ref, () => ({
    openDialog: (data: IProduct, isOpen: boolean) => {
      methods.reset(data)
      setOpen(isOpen);
    },
  }))

  const handleClose = () => {
    methods.reset({
      _id: undefined,
      avatar: undefined,
      images: undefined,
      name: undefined,
      categoryId: undefined,
      description: undefined,
      isDiscounted: undefined,
      priceCurrent: undefined,
      priceOld: undefined,
      sizes: undefined,
      status: undefined
    })
    setImagePreview('')
    setOpen(false);
  };
  const avatar = useWatch({ control: methods.control, name: 'avatar' })
  const id = useWatch({ control: methods.control, name: '_id' })
  const opt = data?.filter(item => item.parentId)
    .map(item => ({ label: item.name, code: item._id })) as OptionType[];
  const optSize = [
    { label: 'S', code: 'S' },
    { label: 'M', code: 'M' },
    { label: 'L', code: 'L' },
    { label: 'XL', code: 'XL' },
    { label: 'XXL', code: 'XXL' },
  ];
  const queryClient = useQueryClient()
  const handleSubmitForm = async (data: ICategory) => {
    setIsLoading(true)
    try {
      if (data?.images) {
        const formData = new FormData();
        formData.append('image', data?.images);
        const upload = await Upload(formData)
        data.avatar = upload?.url || ''
      }
      if (id) {
        await products.update(id, data)
      } else {
        await products.create(data)
      }
      queryClient.invalidateQueries({
        queryKey: ['get_all_products']
      })
      toast.success(id ? "Cập nhật thành công!!!" : "Thêm thành công!!!")
    } catch (error: any) {
      toast.error(error?.response?.data?.message)
    }
    setIsLoading(false)
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Thêm mới sản phẩm
      </Button>
      <Dialog
        open={open}
        fullWidth
        onClose={handleClose}
      >
        <DialogTitle>{id ? "Cập nhật" : "Thêm mới"}</DialogTitle>
        <DialogContent>
          <FormProvider {...methods}>
            <form id='addcategory' onSubmit={methods.handleSubmit(handleSubmitForm)}>
              <div className="flex flex-col gap-4 mt-2">
                <FormInputText size="small" variant='standard' label="Tên sản phẩm" name="name" />
                <FormAutoComplete variant='standard' name='categoryId' label='Chọn danh mục' options={opt || []} />
                <FormInputText size="small" variant='standard' label="Giá bán" type='number' name="priceCurrent" />
                <FormInputText size="small" variant='standard' label="Giá cũ" type='number' name="priceOld" />
                <FormAutoComplateMulti variant='standard' name='sizes' label='Chọn size' options={optSize || []} />
                <FormInputText size="small" variant='standard' label="Mô tả" name="description" />
                <div className='flex gap-x-4'>
                  <label
                    className="bg-white text-gray-500 font-semibold text-base rounded  h-52 flex flex-col w-48 items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed font-[sans-serif]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-11 mb-2 fill-gray-500" viewBox="0 0 32 32">
                      <path
                        d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                        data-original="#000000" />
                      <path
                        d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                        data-original="#000000" />
                    </svg>
                    Upload file
                    <input
                      accept="image/*"
                      type="file"
                      id="uploadFile1"
                      className="hidden"
                      onChange={(e: any) => {
                        setImagePreview(URL.createObjectURL(e?.target?.files?.[0]))
                        methods.setValue("images", e?.target?.files?.[0]);
                      }}
                    />
                    <p className="text-xs font-medium text-gray-400 mt-2">PNG, JPG</p>
                  </label>
                  <div>
                    {(imagePreview || avatar) && <img src={imagePreview ? imagePreview : avatar} alt="" className='max-w-md h-52' />}
                  </div>
                </div>
              </div>
            </form>
          </FormProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Đóng</Button>
          <Button disabled={isLoading} onClick={methods.handleSubmit(handleSubmitForm)} type="button">{isLoading ? 'Đang thực hiện ...' : id ? 'Cập nhật' : 'Thêm mới'}</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
})


const ProductList = () => {
  const { data } = useQuery({
    queryKey: ['get_all_category'],
    queryFn: () => category.list(),
    staleTime: Infinity,
  });
  const [filter, setFilter] = useState<{ page?: number, size?: number, name?: string }>({
    page: 1,
    size: 10
  })
  const { data: product } = useQuery({
    queryKey: ['get_all_products', filter],
    queryFn: () => products.list(filter),
    staleTime: Infinity,
  });
  const modalStateRef = useRef<FormDisplayForwardRef | null>(null)
  const queryClient = useQueryClient()
  const onDelete = async (id: string) => {
    try {
      const confirm = window.confirm("Bạn có chắc chắn muốn xoá không?");
      if (confirm) {
        await products.delete(id)
        queryClient.invalidateQueries({
          queryKey: ['get_all_products']
        })
        toast.success("Xoá thành công!!!")
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message)
    }
  }
  const columns: GridColDef<IProduct>[] = [
    { field: 'name', headerName: 'Tên', minWidth: 300, hideSortIcons: true },
    {
      field: 'priceCurrent', headerName: 'Giá bán', minWidth: 100, hideSortIcons: true, renderCell: (props) => {
        return formatCurrency(props.row.priceCurrent || 0)
      },
    },
    {
      field: 'priceOld', headerName: 'Giá cũ', minWidth: 100, hideSortIcons: true, renderCell: (props) => {
        return formatCurrency(props.row.priceOld || 0)
      },
    },
    {
      field: 'sizes', headerName: 'Sizes', minWidth: 100, hideSortIcons: true, renderCell: (props) => {
        return props.row.sizes?.map((item) => item).join(', ')
      },
    },
    {
      field: 'sold', headerName: 'Đã bán', minWidth: 100, hideSortIcons: true, renderCell: (props) => {
        return formatNumber(props.row.sold || 0)
      },
    },
    {
      field: 'categoryId', headerName: 'Danh mục', minWidth: 100, hideSortIcons: true, renderCell: (props) => {
        return data?.data?.find((item) => item?._id === props?.row?.categoryId)?.name
      },
    },
    {
      field: 'description', headerName: 'Mô tả', minWidth: 200, hideSortIcons: true,
    },
    {
      field: 'avatar',
      headerName: 'Ảnh',
      minWidth: 150,
      hideSortIcons: true,
      renderCell: (props) => {
        return <img  src={props?.row?.avatar} className='h-16 w-16 rounded-sm' />;
      },
    },
    {
      field: 'action',
      headerName: 'Tác động',
      hideSortIcons: true,
      renderCell: (props) => {
        return <div className='flex gap-x-2 items-center'>
          <IconButton onClick={() => onDelete(props.row._id || '')} aria-label="delete">
            <HiMiniArchiveBoxXMark />
          </IconButton>
          <IconButton onClick={() => modalStateRef.current?.openDialog(props.row, true)} aria-label="edit">
            <HiMiniWrench />
          </IconButton>
        </div>;
      },
    },
  ];

  return (
    <>
      <h3 className="text-2xl mb-8">Danh sách sản phẩm</h3>
      <div className='flex  items-center justify-between'>
        <FormDisplay ref={modalStateRef} data={data?.data || []} />
        <TextField
          label={"Tìm kiếm theo tên"}
          variant={"standard"}
          onChange={(e: any) => {
            setFilter((old) => ({ ...old, name: e?.target?.value || '' }))
          }}
        />
      </div>
      <DataGrid
        rows={product?.data}
        rowSelection={false}
        getRowId={(row) => row?._id || ''}
        rowCount={product?.count ?? 0}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { page: 0, pageSize: 10 } },
        }}
        onPaginationModelChange={(model: GridPaginationModel) => {
          setFilter((old) => ({ ...old, page: model?.page || 1, size: model?.pageSize || 10 }))
        }}
        pageSizeOptions={[10, 20, 50, 100]}
        sx={{ border: 0 }}
      />
    </>
  );
};
export default ProductList;