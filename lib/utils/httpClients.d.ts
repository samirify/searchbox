export interface HttpClient {
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
export declare class DefaultHttpClient implements HttpClient {
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
export declare class AxiosHttpClient implements HttpClient {
    private axios;
    constructor(axiosInstance: any);
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
export declare function createAxiosClientWithInterceptors(axiosInstance?: any): Promise<DefaultHttpClient | AxiosHttpClient>;
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