import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: Todo[] = [];

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(t => t.id != id);
  }

  markCompleted(id: number) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  markUncompleted(id: number) {
    this.todos[id].completed = false;
  }
}
