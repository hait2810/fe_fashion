import { instance } from "./axiosConfig";

export interface ICategory {
    _id?: string
    name?: string
    parentId?: string
    avatar?: string
}
export const GetList = async () => {
    const { data: response } = await instance.get<{data: ICategory[]}>("/category/search")
    return response
}