import { instance } from './axiosConfig';
export interface IProduct {
  _id?: string;
  name?: string;
  priceCurrent?: number;
  priceOld?: number;
  avatar?: string;
  description?: string;
  sold?: number;
  sizes?: string[];
  categoryId?: string;
  images?: any;
  status?: number;
  isDiscounted?: number;
  page?: number;
  pageSize?: number;
}
const GetList = async (filter?: IProduct) => {
  const { data: response } = await instance.get<{
    data: IProduct[];
    count: number;
  }>(`/product/search`, { params: {...filter, size: filter?.pageSize} });
  return response;
};
const CreateProduct = async (data: IProduct) => {
  const { data: response } = await instance.post<{ data: IProduct[] }>(
    '/product/create',
    data
  );
  return response;
};
const deleteProduct = async (id: string) => {
  const { data: response } = await instance.delete<{ data: IProduct[] }>(
    '/product/' + id
  );
  return response;
};

const updateProduct = async (id: string, data: IProduct) => {
  const { data: response } = await instance.put<{ data: IProduct[] }>(
    '/product/' + id,
    data
  );
  return response;
};
const findProduct = async (id: string) => {
  const { data: response } = await instance.get<{ data: IProduct }>(
    '/product/' + id
  );
  return response;
};

export const products = {
  list: GetList,
  create: CreateProduct,
  delete: deleteProduct,
  update: updateProduct,
  detail: findProduct,
};
