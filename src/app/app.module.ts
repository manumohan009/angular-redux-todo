import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgRedux, NgReduxModule, DevToolsExtension  } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';


import { AppComponent } from './app.component';
import { TodoOverviewComponent } from './todo-overview/todo-overview.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TodoOverviewComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, private devTools: DevToolsExtension) {

    let enhancers = [];
    if (environment.production === false && devTools.isEnabled() {
      enhancers = [ ...enhancers, devTools.enhancer() ];
    }
    ngRedux.configureStore(rootReducer, INITIAL_STATE,[], enhancers);
  }
 }
