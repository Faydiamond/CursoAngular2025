export interface ApiResponse<T> {
  result: boolean;
  message: string;
  data: T;
  token?: string;
}
