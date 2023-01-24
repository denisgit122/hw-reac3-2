import {axiosUrl} from "./axiosUrl";

const userService={
    getAll:()=>axiosUrl.get('/users'),
    create:(data)=>axiosUrl.post('/users',data)
}
export {userService}