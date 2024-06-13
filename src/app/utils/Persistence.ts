import { Injectable } from '@angular/core';
import { Crypto } from './Crypto';
import { LocalStorageService } from 'ngx-webstorage';
import { IPersistence } from '../core/models/IPersistence';

@Injectable()
export class Persistence implements IPersistence {

  private readonly crypto$ = new Crypto();
  constructor(
    private readonly storage: LocalStorageService
  ) {
    //this.crypto$ = inject(Crypto);
  }

  SetValue<T>(key: string, data: T): void {

    const _key = this.crypto$.encrypt(key);
    const _value = this.crypto$.encrypt(JSON.stringify(data));
    this.storage.store(_key, _value);
  }

  GetValue<T>(key: string): T | null {
    const _key = this.crypto$.encrypt(key);
    const value = this.storage.retrieve(_key);

    if (value !== null) {
      const descriptvalue = this.crypto$.decrypt(value);
      return JSON.parse(descriptvalue);
    }
    return null;
  }


}
