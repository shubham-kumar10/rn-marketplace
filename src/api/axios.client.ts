// src/core/api/client/api-client.ts
import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { APIResponse, HTTPClient, RequestConfig, APIError } from './types';
import ErrorTracker from '../packages/logging/logging';
import { API_CONFIG } from './api.config';

class ApiClient implements HTTPClient {
  private static instance: ApiClient;
  private readonly axiosInstance: AxiosInstance;

  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_CONFIG.BASE_URL,
      timeout: API_CONFIG.TIMEOUT,
      headers: API_CONFIG.HEADERS,
    });

    this.setupInterceptors();
  }

  public static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient();
    }
    return ApiClient.instance;
  }

  private setupInterceptors() {
    // Request interceptor
    this.axiosInstance.interceptors.request.use(
      config => {
        // const token = null;
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
      },
      error => {
        ErrorTracker.captureException(error);
        return Promise.reject(error as Error);
      },
    );

    this.axiosInstance.interceptors.response.use(
      (response: APIResponse) => {
        return this.normalizeResponse(response);
      },
      (error: AxiosError) => {
        const normalizedError = this.normalizeError(error);
        ErrorTracker.captureException(normalizedError as Error);
        return Promise.reject(normalizedError as Error);
      },
    );
  }

  private normalizeResponse(response: AxiosResponse): APIResponse {
    return {
      data: response.data,
      status: response.status,
      headers: response.headers as Record<string, string>,
    };
  }

  private normalizeError(error: AxiosError): APIError {
    if (error.response) {
      return {
        message: error.response.data?.message || 'API Error',
        status: error.response.status,
        code: error.response.data?.code,
      };
    }
    if (error.request) {
      return {
        message: 'No response received from server',
        code: 'NETWORK_ERROR',
      };
    }
    return {
      message: 'Request configuration error',
      code: 'CONFIG_ERROR',
    };
  }

  async get<T>(url: string, config?: RequestConfig): Promise<APIResponse<T>> {
    const response = await this.axiosInstance.get<T>(url, config);
    return this.normalizeResponse(response);
  }

  async post<T>(
    url: string,
    data?: any,
    config?: RequestConfig,
  ): Promise<APIResponse<T>> {
    const response = await this.axiosInstance.post<T>(url, data, config);
    return this.normalizeResponse(response);
  }

  async put<T>(
    url: string,
    data?: any,
    config?: RequestConfig,
  ): Promise<APIResponse<T>> {
    const response = await this.axiosInstance.put<T>(url, data, config);
    return this.normalizeResponse(response);
  }

  async delete<T>(
    url: string,
    config?: RequestConfig,
  ): Promise<APIResponse<T>> {
    const response = await this.axiosInstance.delete<T>(url, config);
    return this.normalizeResponse(response);
  }

  async patch<T>(
    url: string,
    data?: any,
    config?: RequestConfig,
  ): Promise<APIResponse<T>> {
    const response = await this.axiosInstance.patch<T>(url, data, config);
    return this.normalizeResponse(response);
  }
}

const apiClient = ApiClient.getInstance();
export default apiClient;
