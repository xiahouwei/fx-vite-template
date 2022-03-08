import axios from 'axios'
declare module 'axios' {
  export interface FxAxiosRequestConfig extends AxiosRequestConfig {
    successToast?: boolean
  }
  export interface AxiosInstance {
    <T = any>(config: FxAxiosRequestConfig): Promise<any>;
    request<T = any> (config: FxAxiosRequestConfig): Promise<T>;
    get<T = any>(url: string, successToast?: boolean, config?: FxAxiosRequestConfig): Promise<T>;
    delete<T = any>(url: string, successToast?: boolean, config?: FxAxiosRequestConfig): Promise<T>;
    head<T = any>(url: string, config?: FxAxiosRequestConfig): Promise<T>;
    post<T = any>(url: string, data?: any, successToast?: boolean, config?: FxAxiosRequestConfig): Promise<T>;
    put<T = any>(url: string, data?: any, successToast?: boolean, config?: FxAxiosRequestConfig): Promise<T>;
    patch<T = any>(url: string, data?: any, successToast?: boolean, config?: FxAxiosRequestConfig): Promise<T>;
  }
}