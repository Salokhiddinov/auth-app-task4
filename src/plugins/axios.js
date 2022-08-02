import axios from "axios";
// import {state} from '../store/store'
// const getToken = ()=>{
//     return  token;
// }

axios.defaults.baseURL = "https://auth-app-itransition.herokuapp.com/";
// axios.interceptors.request.use(async(config) =>{
//     console.log(getToken());
//     // const token =
// })

export default axios;
