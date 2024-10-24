export interface PaginatedApiResponse<T> {
    data?: PaginatedResult<T>;
    isSuccess: boolean;
    error?: {
        code: number;
        message: string;
    };
}

export interface PaginatedResult<T>{
    entityList: T[];  
    pageIndex: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}