export interface ICrypto {
  decrypt(encrit: string):string;
  encrypt (data: string):string;
}
