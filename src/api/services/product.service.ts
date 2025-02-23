import { API_CONFIG } from '../api.config';
import apiClient from '../axios.client';
import { ProductDetails } from '../models/product.model';

export class ProductService {
  private readonly baseUrl = API_CONFIG.ENDPOINTS.PRODUCTS;

  async getProductById(id: number): Promise<ProductDetails> {
    const response = await apiClient.get<ProductDetails>(
      `${this.baseUrl}/${id}`,
    );
    return response.data;
  }

  async getProducts(): Promise<ProductDetails> {
    console.log(this.baseUrl);
    const response = await apiClient.get<ProductDetails>(`${this.baseUrl}`);
    return response.data;
  }

  async searchProducts(query: string): Promise<ProductDetails[]> {
    const response = await apiClient.get<ProductDetails[]>(
      API_CONFIG.ENDPOINTS.SEARCH,
      {
        params: { q: query },
      },
    );
    return response.data;
  }

  async getAllCategories(): Promise<Category[]> {
    const response = await apiClient.get<Category[]>(
      API_CONFIG.ENDPOINTS.CATEGORIES,
    );
    return response.data;
  }
}

export const productService = new ProductService();
