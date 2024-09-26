import { Breadcrumbs, Link, Typography } from '@mui/material';
import { BiHome } from 'react-icons/bi';
import { Clothing } from './Home';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { category } from '../api/cateogry';

const DanhMucSanPham = () => {
  const { id } = useParams();
  const { data: categoryList } = useQuery({
    queryKey: ['get_all_category'],
    queryFn: () => category.list(),
    staleTime: Infinity,
  });
  const categoryItem = categoryList?.data?.find((item) => item._id === id);
  const categoryListChildren = categoryList?.data?.filter(
    (categoryItemChild) => categoryItemChild.parentId === categoryItem?._id
  );

  return (
    <div className="container mx-auto p-4">
      <Breadcrumbs className="pt-6" aria-label="breadcrumb">
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
          Danh mục sản phẩm
        </Typography>
      </Breadcrumbs>
      <Clothing isPagination title={categoryItem?.name} category={categoryListChildren || []} />
    </div>
  );
};
export default DanhMucSanPham;
