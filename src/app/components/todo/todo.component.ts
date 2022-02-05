import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/ITodo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {
  todo: ITodo;
  private subscriptions: Subscription = new Subscription();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.subscriptions.add(this.todoService.getSelectedTodo().subscribe(
      todo => this.todo = todo
    ));
  }

  ngOnDestroy(): void {
      this.subscriptions.unsubscribe();
  }

  onCompleteTodo(): void {
    this.todo.isCompleted = true;
  }

  onArchvieTodo(): void {
    this.todo.isArchived = true;
  }
  
}
