export interface ResponseApi<T> {
  statusCode: number;
  message: string;
  errors: string[];
  data: T;
}