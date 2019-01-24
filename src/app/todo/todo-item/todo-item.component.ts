import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import {Store} from '@ngrx/store';
import {BorrarTodoAction, EditTodoAction, ToggleTodoAction} from '../todo.actions';
import {AppState} from '../../app.reducers';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputFisico') txtInputFisico: ElementRef;

  checkField: FormControl;
  txtInput: FormControl;

  editando: boolean;

  constructor(private store: Store<AppState>) {
   }

  ngOnInit() {
    this.checkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.checkField.valueChanges.subscribe(
      () => {
        const accion = new ToggleTodoAction(this.todo.id);
        this.store.dispatch(accion);
      }
    );
  }

  editar() {
    this.editando = true;
    setTimeout( () => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdition() {
    if (this.txtInput.invalid) {
      return;
    }

    if (this.txtInput.value === this.todo.texto) {
      return;
    }
    this.editando = false;
    const accion = new EditTodoAction(this.todo.id, this.txtInput.value);
    this.store.dispatch(accion);
  }

  eliminarTodo() {
    const accion = new BorrarTodoAction(this.todo.id);
    this.store.dispatch(accion);
  }

}
