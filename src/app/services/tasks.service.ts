import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from 'rxjs/Observable';
import { Task } from '../models/task.model';

@Injectable()
export class TasksService {

    private tasksList: Array<Task> = [];
    private tasksDone: Array<Task> = [];

    private tasksListObs = new BehaviorSubject<Array<Task>>([]);
    private tasksDoneObs = new BehaviorSubject<Array<Task>>([]);

    constructor() {
        this.tasksList = [
            { name: "odkurzanie", createdDate: new Date() },
            { name: "pranie", createdDate: new Date() }, 
            { name: "zakupy", createdDate: new Date() },
            { name: "nauka", createdDate: new Date() }
        ];
        this.tasksListObs.next(this.tasksList);
    }

    onAdd(task: Task) {
        this.tasksList.push(task);
        this.tasksListObs.next(this.tasksList);
    }

    onDelete(task: Task) {
        this.tasksList = this.tasksList.filter( e => e !== task );
        this.tasksListObs.next(this.tasksList);
    }

    onDone(task: Task) {
        this.tasksDone.push(task);
        this.onDelete(task);
        this.tasksDoneObs.next(this.tasksDone);
    }

    getTasksListObs(): Observable<Array<Task>> {
        return this.tasksListObs.asObservable();
    }

    getTasksDoneObs(): Observable<Array<Task>> {
        return this.tasksDoneObs.asObservable();
    }
}
