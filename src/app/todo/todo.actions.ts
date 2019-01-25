import { Action } from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] Agregar todo';

export const TOGGLE_TODO = '[TODO] Toggle todo';
export const TOGGLE_ALL_TODO = '[TODO] Toggle all todo';

export const EDIT_TODO = '[TODO] Edit todo';
export const BORRAR_TODO = '[TODO] Borrar todo';
export const LIMPIAR_DO = '[TODO] Limpiar do';


export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;

    constructor(public texto: string) {}
}

export class EditTodoAction implements Action {
    readonly type = EDIT_TODO;

    constructor(public id: number, public text: string) {}
}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor(public id: number) {}
}

export class BorrarTodoAction implements Action {
  readonly type = BORRAR_TODO;

  constructor(public id: number) {}
}

export class ToggleAllTodo implements Action {
  readonly type = TOGGLE_ALL_TODO;

  constructor(public completado: boolean) {}
}

export class LimpiarDo implements Action {
  readonly type = LIMPIAR_DO;
}




export type Acciones = AgregarTodoAction |
                       ToggleAllTodo |
                       ToggleTodoAction  |
                       EditTodoAction |
                       BorrarTodoAction |
                       LimpiarDo;
