import { IInfo } from "../store/useCart";
import { instance } from "./axiosConfig";

interface IFilter {
    page?: number;
    size?: number;
}
export type ICart = {
    _id?:string;
    fullName?: string;
    phoneNumber?: string;
    fullAddress?: string;
    description?: string;
    createdAt?: Date
    total?: number;
    status?: number;
    provinceId?: number
    districtId?:number
    wardId?: number
    products?: IInfo[];
  };
const apiGetList = async (params: IFilter) => {
    const { data: response } = await instance.get("/cart/getList", {params});
    return response;
}

const apiAdd = async (data: ICart) => {
    const { data: response } = await instance.post("/cart/add", data);
    return response;
}


const apiUpdate = async (data: ICart) => {
    const { data: response } = await instance.put("/cart/"+data._id, data);
    return response;
}

export const cartApi = {
    list: apiGetList,
    create: apiAdd,
    update: apiUpdate
}