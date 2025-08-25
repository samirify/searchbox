import { HttpClient } from '../types/search-box.types';
export declare class AxiosHttpClient implements HttpClient {
    private axiosInstance;
    constructor(axiosInstance?: any);
    private initializeAxios;
    request<T = any>(config: {
        url: string;
        method?: string;
        headers?: Record<string, string>;
        data?: any;
        params?: Record<string, any>;
        timeout?: number;
        signal?: AbortSignal;
    }): Promise<{
        data: T;
        status: number;
        statusText: string;
    }>;
}
export declare function createAxiosClientWithInterceptors(axiosInstance?: any): Promise<AxiosHttpClient>;
export declare function createAuthenticatedHttpClient(baseConfig?: {
    baseURL?: string;
    headers?: Record<string, string>;
    getAuthToken?: () => string | null;
    onUnauthorized?: () => void;
}): {
    request<T = any>(config: {
        url: string;
        method?: string;
        headers?: Record<string, string>;
        data?: any;
        params?: Record<string, any>;
        timeout?: number;
        signal?: AbortSignal;
    }): Promise<{
        data: T;
        status: number;
        statusText: string;
    }>;
};
//# sourceMappingURL=httpClients.d.ts.map