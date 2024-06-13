import { Inject, Injectable } from '@angular/core';
import { IAuthModel } from '../models/IAuth.interface';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { IPersistence } from '../models/IPersistence';


@Injectable({
  providedIn: 'root'
})
export class AuthService extends ComponentStore<IAuthModel> {
  private userModel: IAuthModel = this.ResetUser();
  constructor(
    @Inject('IPersistence') private readonly persistence$: IPersistence
  ) {
    super({
      NombreUsuario: '',
      Token: '',
      IdUsuario: '',

    });
    this.initStateUser();
  }
  private initStateUser(): void {
    const user = this.persistence$.GetValue<IAuthModel>('user');
    if (user !== null) {
      this.addStateUserAndToken(user);
    }
  }

  readonly addStateUserAndToken = this.updater((state, stateUser: IAuthModel) => {
    return {
      ...state,
      ...stateUser,
    };
  });

  public ResetUser(): IAuthModel {
    return {
      NombreUsuario: '',
      Token: '',
      IdUsuario: '',

    };
  }
  readonly getId: Observable<string> = this.select((state) => state.IdUsuario);

  readonly getToken: Observable<string> = this.select(
    (state) => state.Token,
  );
  
  
  readonly addUser = this.updater((state, user: IAuthModel) => {
    this.persistence$.SetValue<IAuthModel>('user', user);
    return {
      ...state,
      IdUsuario: user.IdUsuario,
      NombreUsuario:user.NombreUsuario,
      Token:user.Token

    };

  });

}
