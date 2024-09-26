import { Pagination, Tab, Tabs } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { SyntheticEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { category, ICategory } from '../api/cateogry';
import { products } from '../api/products';
import icon1 from '../assets/icon/policies_icon_1.webp';
import icon2 from '../assets/icon/policies_icon_2.webp';
import icon3 from '../assets/icon/policies_icon_3.webp';
import icon4 from '../assets/icon/policies_icon_4.webp';
import Banner from '../layouts/Banner';
import { formatCurrency } from '../utils/utils';

export const ProductDisplay = ({ tab, isPagination = false}: { tab: string, isPagination?:boolean }) => {
  const [page, setPage] = useState<number>(1)
  const { data } = useQuery({
    queryKey: ['get_all_products', tab, page],
    queryFn: () => products.list({ page: page, pageSize: 8, categoryId: tab }),
    staleTime: 5 * 60 * 1000,
  });
  return (
    <>
      <div className="mt-4">
        <div className="grid grid-cols-1 p-2 md:grid-cols-2 md:p-0 lg:p-0 lg:grid-cols-4 gap-3">
          {data?.data.map((item, index) => {
            return (
              <div key={index} className="item">
                <div className="border-[1px] rounded-md border-sky-100">
                  <img
                    src={item.avatar}
                    className="mx-auto p-2 hover:scale-95 cursor-pointer transition-all duration-500 ease-in"
                    alt=""
                  />
                </div>
                <div className="mt-2 px-1">
                  <Link to={`/san-pham/${item._id}`}>
                    <h3 className="text-xl z-40 font-semibold text-[#0000009c] hover:text-blue-500">
                      {item.name}
                    </h3>
                  </Link>
                  <div className="flex gap-x-4 items-center">
                    <p className="font-medium text-red-500">
                      {formatCurrency(item?.priceCurrent || 0)}
                    </p>{' '}
                    <span className="text-sm text-gray-500 italic">
                      {item.sold} Đã bán
                    </span>
                  </div>
                  <div className="flex gap-x-4">
                    {item.priceOld && item.priceOld > 0 && (
                      <span className="line-through text-gray-400">
                        {formatCurrency(item?.priceOld || 0)}
                      </span>
                    )}
                    {item.priceOld && item.priceOld > 0 && (
                      <div className="px-2 text-white text-[12px] flex justify-center items-center bg-red-500 rounded-full">
                        {Math.round(
                          ((item.priceOld - (item.priceCurrent ?? 0)) /
                            item.priceOld) *
                            100
                        )}
                        %
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {isPagination && <Pagination
        count={Math.round((Number(data?.count)) / 8)}
        color="primary"
        onChange={(_e, page) => {
          setPage(page)
        }}
        className="mt-8 flex justify-center"
      />}
    </>
  );
};

export const Clothing = ({
  title,
  category,
  isPagination = false
}: {
  title?: string;
  category: ICategory[];
  isPagination?: boolean
}) => {
  const [value, setValue] = useState<string>();
  const handleChange = (_event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  useEffect(() => {
    setValue(category[0]?._id)
  }, [category])
  return (
    <div className="my-6 container mx-auto">
      <h3 className="text-center font-light text-5xl">Bộ sưu tập {title}</h3>
      <Tabs value={value} onChange={handleChange} centered>
        {category.map((item, index) => {
          return <Tab value={item._id} key={index} label={item.name} />;
        })}
      </Tabs>
      <ProductDisplay tab={value || ''} isPagination={isPagination}/>
    </div>
  );
};

const Home = () => {
  const { data: categoryList } = useQuery({
    queryKey: ['get_all_category'],
    queryFn: () => category.list(),
    staleTime: Infinity,
  });
  const optParent = categoryList?.data?.filter((item) => !item.parentId);

  const opt = categoryList?.data?.filter((item) => item.parentId);

  return (
    <>
      <Banner />
      <section className="my-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 place-items-center">
            <div className="flex flex-col xl:flex-row gap-x-2 w-[234px] items-center justify-center">
              <img src={icon1} className="w-10 h-10" alt="" />
              <div className="flex flex-col">
                <h3 className="font-medium text-lg text-center xl:text-left">
                  Giao hàng toàn quốc
                </h3>
                <p className="text-sm">Nhiều ưu đãi khuyến mãi hot</p>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row gap-x-2 w-[234px] items-center justify-center">
              <img src={icon2} className="w-10 h-10" alt="" />
              <div className="flex flex-col">
                <h3 className="font-medium text-lg text-center xl:text-left">
                  Quà tặng hấp dẫn{' '}
                </h3>
                <p className="text-sm">Nhiều ưu đãi khuyến mãi hot</p>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row gap-x-2 w-[234px] items-center justify-center">
              <img src={icon3} className="w-10 h-10" alt="" />
              <div className="flex flex-col">
                <h3 className="font-medium text-lg text-center xl:text-left">
                  Bảo đảm chất lượng
                </h3>
                <p className="text-sm">Sản phẩm đã được kiểm định</p>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row gap-x-2 w-[234px] items-center justify-center">
              <img src={icon4} className="w-10 h-10" alt="" />
              <div className="flex flex-col">
                <h3 className="font-medium text-lg text-center xl:text-left">
                  Hotline: 0964838828
                </h3>
                <p className="text-sm">Dịch vụ hỗ trợ bạn 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <div className="container mx-auto">
          <div>
            <h3 className="text-5xl text-center font-light">
              Thời trang PAPKA
            </h3>
            <div className="flex flex-nowrap gap-x-16 mt-9 overflow-x-auto justify-center">
              {opt?.map((item) => {
                return (
                  <Link to={''} className="p-1">
                    <div className="flex gap-y-3 flex-col justify-center items-center flex-nowrap w-[150px]">
                      <img
                        className="object-cover transition-transform duration-700 transform hover:scale-105"
                        src={item.avatar}
                        alt=""
                      />
                      <div>
                        <h3 className="text-xl text-center">{item.name}</h3>
                        <p className="text-gray-500 text-center">
                          {item.productCount} sản phẩm
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section>
        {optParent?.map((item, index) => {
          const category = opt?.filter(
            (categoryItem) => categoryItem.parentId === item._id
          );
          return (
            <Clothing
              key={index}
              title={item?.name}
              category={category || []}
            />
          );
        })}
      </section>
    </>
  );
};
export default Home;
