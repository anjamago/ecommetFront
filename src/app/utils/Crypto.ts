

import { Injectable } from '@angular/core';
import { ICrypto } from '../core/models/ICrypto';
import { environment } from 'src/enviroments/environment';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class Crypto implements ICrypto{
  protected _iv = CryptoJS.enc.Utf8.parse(environment.secret);
  private readonly options = {
    keySize: 16,
    iv: this._iv,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  };

  public encrypt = (data: string):string =>
    CryptoJS.AES.encrypt(data, this._iv, this.options).toString();
  public decrypt = (encrit: string):string =>
    CryptoJS.AES.decrypt(encrit, this._iv, this.options).toString(
      CryptoJS.enc.Utf8
    );
}
