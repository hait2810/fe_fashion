import { instance } from "./axiosConfig";

export interface ICategory {
    _id?: string
    name?: string
    parentId?: string
    avatar?: string
    productCount?: number
    images?: any
}
const GetList = async () => {
    const { data: response } = await instance.get<{data: ICategory[]}>("/category/search")
    return response
}
const CreateCategory = async (data:ICategory) => {
    const { data: response } = await instance.post<{data: ICategory[]}>("/category/create", data)
    return response
}
const deleteCategory = async (id:string) => {
    const { data: response } = await instance.delete<{data: ICategory[]}>("/category/"+id)
    return response
}

const updateCategory = async (id:string, data: ICategory) => {
    const { data: response } = await instance.put<{data: ICategory[]}>("/category/"+id, data)
    return response
}

export const category = {
    list: GetList,
    create: CreateCategory,
    delete: deleteCategory,
    update: updateCategory
}