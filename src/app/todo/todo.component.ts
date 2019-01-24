import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {ToggleAllTodo} from './todo.actions';
import {AppState} from '../app.reducers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completado = false;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  toggleAll() {
    this.completado = !this.completado;
    const accion = new ToggleAllTodo(this.completado);
    this.store.dispatch(accion);
  }

}
