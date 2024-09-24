import { instance } from "./axiosConfig";


export const GetList = async () => {
    const { data: response } = await instance.get("/category/search")
    return response
}