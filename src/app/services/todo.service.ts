import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodo } from '../models/ITodo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private mockData: ITodo[] = [
    { title: "Pigeon, feral rock", description: "Columba livia", isCompleted: false, isArchived: true, endDate: 4 / 15 / 2021, selected: true },
    { title: "Iguana, marine", description: "Amblyrhynchus cristatus", isCompleted: false, isArchived: true, endDate: 8 / 30 / 2021, selected: false },
    { title: "Cardinal, red-capped", description: "Paroaria gularis", isCompleted: false, isArchived: true, endDate: 9 / 1 / 2021, selected: false },
    { title: "Paca", description: "Agouti paca", isCompleted: true, isArchived: false, endDate: 9 / 15 / 2021, selected: false },
    { title: "Gull, southern black-backed", description: "Larus dominicanus", isCompleted: true, isArchived: true, endDate: 4 / 23 / 2021, selected: false },
    { title: "Impala", description: "Aepyceros mylampus", isCompleted: true, isArchived: true, endDate: 7 / 18 / 2021, selected: false },
    { title: "American bison", description: "Bison bison", isCompleted: true, isArchived: true, endDate: 3 / 31 / 2021, selected: false },
    { title: "Burrowing owl", description: "Speotyte cuniculata", isCompleted: false, isArchived: true, endDate: 8 / 30 / 2021, selected: false },
    { title: "Long-tailed skua", description: "Stercorarius longicausus", isCompleted: true, isArchived: false, endDate: 8 / 10 / 2021, selected: false },
    { title: "Skunk, western spotted", description: "Spilogale gracilis", isCompleted: false, isArchived: false, endDate: 8 / 17 / 2021, selected: false }
  ];

  private todosSubject$: BehaviorSubject<ITodo[]> = new BehaviorSubject(this.mockData);
  private selectedTodo$: BehaviorSubject<ITodo> = new BehaviorSubject(this.mockData[0]);

  constructor() { }

  getTodos(): Observable<ITodo[]> {
    return this.todosSubject$.asObservable();
  }

  getSelectedTodo(): Observable<ITodo> {
    return this.selectedTodo$.asObservable();
  }

  setSelectedTodo(todo: ITodo):void {
    this.selectedTodo$.next(todo);
  }
}
