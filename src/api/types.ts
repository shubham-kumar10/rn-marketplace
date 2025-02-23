export interface RequestConfig {
  baseURL?: string;
  headers?: Record<string, string>;
  timeout?: number;
  params?: Record<string, any>;
}

export interface APIResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: any;
}
export interface APIError {
  message: string;
  status?: number;
  code?: string;
}

export interface HTTPClient {
  get<T>(url: string, config?: RequestConfig): Promise<APIResponse<T>>;
  post<T>(
    url: string,
    data?: any,
    config?: RequestConfig,
  ): Promise<APIResponse<T>>;
  put<T>(
    url: string,
    data?: any,
    config?: RequestConfig,
  ): Promise<APIResponse<T>>;
  delete<T>(url: string, config?: RequestConfig): Promise<APIResponse<T>>;
  patch<T>(
    url: string,
    data?: any,
    config?: RequestConfig,
  ): Promise<APIResponse<T>>;
}
