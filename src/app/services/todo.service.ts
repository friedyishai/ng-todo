import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITodo } from '../models/ITodo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private mockData: ITodo[] = [
    { title: "Pigeon, feral rock", description: "Columba livia", isCompleted: false, isArchived: true, endDate: 4 / 15 / 2021 },
    { title: "Iguana, marine", description: "Amblyrhynchus cristatus", isCompleted: false, isArchived: true, endDate: 8 / 30 / 2021 },
    { title: "Cardinal, red-capped", description: "Paroaria gularis", isCompleted: false, isArchived: true, endDate: 9 / 1 / 2021 },
    { title: "Paca", description: "Agouti paca", isCompleted: true, isArchived: false, endDate: 9 / 15 / 2021 },
    { title: "Gull, southern black-backed", description: "Larus dominicanus", isCompleted: true, isArchived: true, endDate: 4 / 23 / 2021 },
    { title: "Impala", description: "Aepyceros mylampus", isCompleted: true, isArchived: true, endDate: 7 / 18 / 2021 },
    { title: "American bison", description: "Bison bison", isCompleted: true, isArchived: true, endDate: 3 / 31 / 2021 },
    { title: "Burrowing owl", description: "Speotyte cuniculata", isCompleted: false, isArchived: true, endDate: 8 / 30 / 2021 },
    { title: "Long-tailed skua", description: "Stercorarius longicausus", isCompleted: true, isArchived: false, endDate: 8 / 10 / 2021 },
    { title: "Skunk, western spotted", description: "Spilogale gracilis", isCompleted: false, isArchived: false, endDate: 8 / 17 / 2021 }
  ];

  private todosSubject$: BehaviorSubject<ITodo[]> = new BehaviorSubject(this.mockData);
  
  getTodos(): Observable<ITodo[]> {
    return this.todosSubject$.asObservable();
  }

  constructor() { }
}
