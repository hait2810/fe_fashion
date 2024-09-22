import { DataGrid, GridColDef } from "@mui/x-data-grid"

const CategoryList = () => {
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', minWidth: 70 },
        { field: 'firstName', headerName: 'First name', minWidth: 130, hideSortIcons:true },
        { field: 'lastName', headerName: 'Last name', minWidth: 130 , hideSortIcons:true},
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            minWidth: 90,
            hideSortIcons:true
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            minWidth: 160,
            hideSortIcons:true,
            valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];
    return (
      <>
      <h3 className="text-2xl">Danh sách danh mục</h3>
        <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel: { page: 0, pageSize: 10 } } }}
            pageSizeOptions={[5, 10]}
            sx={{ border: 0 }}
        />
      </>
    )
}
export default CategoryList