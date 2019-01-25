import * as fromTodoAction from './todo.actions';
import {Todo} from './model/todo.model';
import {from} from 'rxjs';

const todo1 = new Todo('Buscar a nemo');
const todo2 = new Todo('vencer a thanos');
const todo3 = new Todo('Buscar a Ironman');

todo2.completado = true;

const estadoInicial: Todo[] = [todo1, todo2, todo3];

export function todoReducer(state = estadoInicial, action: fromTodoAction.Acciones): Todo[] {

  switch (action.type) {
    case fromTodoAction.AGREGAR_TODO:
      const todo = new Todo(action.texto);
      return [...state, todo];
    case fromTodoAction.TOGGLE_TODO:
      return state.map((todoEdit) => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            completado: !todoEdit.completado
          };
        } else {
          return todoEdit;
        }
      });
    case fromTodoAction.TOGGLE_ALL_TODO:
      return state.map((todoEdit) => {
        return {
          ...todoEdit,
          completado: action.completado
        };
      });
    case fromTodoAction.EDIT_TODO:
      return state.map((todoEdit) => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            texto: action.text
          };
        } else {
          return todoEdit;
        }
      });
    case fromTodoAction.BORRAR_TODO:
      return state.filter(todoCurrent => todoCurrent.id !== action.id);
    case fromTodoAction.LIMPIAR_DO:
      return state.filter(currentTodo => !currentTodo.completado);
    default:
      return state;
  }
}
