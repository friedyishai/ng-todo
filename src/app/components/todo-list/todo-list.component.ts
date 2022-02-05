import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/ITodo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {
  currTodo: ITodo;
  todos: ITodo[] = [];
  subscriptions: Subscription = new Subscription();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.subscriptions.add(this.todoService.getTodos().subscribe(
      data => this.todos = data
    ));
    this.subscriptions.add(this.todoService.getSelectedTodo().subscribe(
      todo => this.currTodo = todo
    ));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onTodoClick(todo: ITodo): void {
    this.currTodo.selected = false;
    todo.selected = true;
    this.todoService.setSelectedTodo(todo);
  }

}
