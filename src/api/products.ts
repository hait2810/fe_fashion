import { instance } from './axiosConfig';
export interface IProduct {
  _id?: string;
  name?: string;
  priceCurrent?: number;
  priceOld?: number;
  avatar?: string;
  description?: string;
  sizes?: string[];
  categoryId?: string;
  images?: any
  status?: number;
  isDiscounted?: number;
}
const GetList = async (filter?: IProduct, page = 0, size = 10) => {
  const { data: response } = await instance.get<{ data: IProduct[] }>(
    `/product/search?page=${page}&size=${size}`,
    { params: filter }
  );
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

export const products = {
  list: GetList,
  create: CreateProduct,
  delete: deleteProduct,
  update: updateProduct,
};
