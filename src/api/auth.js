import axios from "axios";

const url = 'http://127.0.0.1:5000';

const Authenticationapi  = axios.create({
    baseURL:url,
    headers:{
        'content-type':'application/json',

    },
});

export const getLogin = (userData)=> Authenticationapi.post('/login',userData);
export const getRegister = (userData)=> Authenticationapi.post('/reg',userData);