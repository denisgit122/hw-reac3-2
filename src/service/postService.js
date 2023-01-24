import {axiosUrl} from "./axiosUrl";

const postService={
    getAll:()=>axiosUrl.get('/comments'),
    addComent:(data)=>axiosUrl.post('/comments, data')
}