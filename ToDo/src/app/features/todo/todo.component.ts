import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TodoService } from '../../core/services/todo.service';
import { Todo } from '../../core/model/todo';

@Component({
  selector: 'app-todo',
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  todos: Todo[] = [];

  private todoService = inject(TodoService);

  addTodo(task: string) {
    this.todoService.addTodo({
      id: Date.now(),
      task: task.trim(),
      completed: false
    })
    this.todos = this.todoService.getTodos();
  }

  removeTodo(id: number) {
    this.todoService.removeTodo(id)
    this.todos = this.todoService.getTodos();
  }

  completeTodo(id: number) {
    this.todoService.markCompleted(id)
    this.todos = this.todoService.getTodos();
  }

}
