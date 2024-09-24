import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { GetList, ICategory } from '../../../api/cateogry';
import { FormInputText } from '../../../components/FormInputText';

const FormDisplay = ({ data }: { data: ICategory[] }) => {
  console.log(data);
  
  const [open, setOpen] = React.useState(false);
  const methods = useForm();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmitForm = async (data: ICategory) => {
    try {
      console.log(data);
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Thêm mới danh mục
      </Button>
      <Dialog
        open={open}
        fullWidth
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Thêm mới</DialogTitle>
        <DialogContent>
          <FormProvider {...methods}>
            <form id='addcategory' onSubmit={methods.handleSubmit(handleSubmitForm)}>
              <div className="flex flex-col gap-4 mt-2">
                <FormInputText size="small" label="Tên danh mục" name="name" />
                <FormInputText
                  type="password"
                  size="small"
                  label="Mật khẩu"
                  name="password"
                />
              </div>
            </form>
          </FormProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Đóng</Button>
          <Button onClick={methods.handleSubmit(handleSubmitForm)} type="button">Thêm mới</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

const ParentDisplay = ({ data, id }: { data?: ICategory[]; id?: string }) => {
  const category = data?.find((item) => item._id === id);
  return category?.name;
};

const CategoryList = () => {
  const { data } = useQuery({
    queryKey: ['get_all_category'],
    queryFn: () => GetList(),
    staleTime: Infinity,
  });
  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Tên', minWidth: 300, hideSortIcons: true },
    {
      field: 'lastName',
      headerName: 'Parent',
      minWidth: 300,
      hideSortIcons: true,
      renderCell: (props) => {
        return <ParentDisplay data={data?.data} id={props?.row?.parentId} />;
      },
    },
    {
      field: 'action',
      headerName: 'Tác động',
      hideSortIcons: true,
    },
  ];

  return (
    <>
      <h3 className="text-2xl mb-8">Danh sách danh mục</h3>
      <FormDisplay data={data?.data || []} />
      <DataGrid
        rows={data?.data}
        getRowId={(row) => row?._id}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { page: 0, pageSize: 10 } },
        }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
      />
    </>
  );
};
export default CategoryList;
