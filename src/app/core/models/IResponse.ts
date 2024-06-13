export interface IResponse<T> {
  code: number;
  message: string;
  data: T;
  errors: IError[];
}

export interface IError {
  codigo: number;
  mensaje: string;
  detalle: string;
}
