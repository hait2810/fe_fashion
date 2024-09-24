import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useQuery } from '@tanstack/react-query';
import { GetList } from '../../../api/cateogry';
import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';


const FormDisplay = () => { 
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Thêm mới danh mục
      </Button>
      <Dialog
        open={open}
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
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

const ParentDisplay = ({ data, id }: { data?: any[]; id?: string }) => {
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
      <FormDisplay />
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
