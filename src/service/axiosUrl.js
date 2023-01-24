import axios from "axios";

const axiosUrl=axios.create({baseURL:'https://jsonplaceholder.typicode.com/'})

export {axiosUrl}