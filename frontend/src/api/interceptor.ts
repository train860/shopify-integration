import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getSessionToken } from '@shopify/app-bridge-utils';

export interface HttpResponse<T = unknown> {
  status: number;
  msg: string;
  code: number;
  data: T;
}

axios.defaults.baseURL='/'

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return getSessionToken(window['app-bridge-app'])
    .then((token:string) => {     
        // Append your request headers with an authenticated token
        if(!config.headers){
          config.headers={}
        }
        config.headers.Authorization = `Bearer ${token}`
        return config
    })
  },
  (error) => {
    // do something
    return Promise.reject(error);
  }
);
// add response interceptors
axios.interceptors.response.use(
  (response: AxiosResponse<HttpResponse>) => {
    return response;
  },
  (error) => {
   
    return Promise.reject(error);
  }
);
