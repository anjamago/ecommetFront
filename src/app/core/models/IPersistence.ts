export interface IPersistence {
  SetValue<T>(key: string, value: T): void;
  GetValue<T>(key: string): T | null;
}
