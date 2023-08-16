import { Action, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { ShowLoading } from './app.actions';

export interface AppStateModel {
  loading: boolean;
  email?: string;
  token?: string;
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    loading: false,
    email:'hrandika@hotmail.com'
  },
})
@Injectable({ providedIn: 'root' })
export class AppState {
    @Action(ShowLoading)
    showLoading(
        {patchState}: StateContext<AppStateModel>, //current state
        {loading}: ShowLoading

    ) {
      return  patchState({loading});
    }
}
