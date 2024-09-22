import { User } from "../types/user";
import { instance } from "./axiosConfig";
export interface IUser {
    username: string,
    password: string
}


export interface IFilterUser {
    page?: number,
    size?: number,
}

export const Signin = async (data: IUser) => {
    const { data: response } = await instance.post("/user/signin", data);
    return response;
}

export const Signup = async (data: User) => {
    const { data: response } = await instance.post("/user/signup", data);
    return response;
}

export const UpdateUser = async (data: User) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {password, ...res} = data;    
    const { data: response } = await instance.put("/user/" + res._id, res)
    return response
}

export const GetList = async (filter: IFilterUser) => {
    const { data: response } = await instance.get("/user/getList", {params: filter})
    return response
}