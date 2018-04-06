import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TasksService {

    private tasksList: Array<string> = [];
    private tasksDone: Array<string> = [];

    private tasksListObs = new BehaviorSubject<Array<string>>(this.tasksList);
    private tasksDoneObs = new BehaviorSubject<Array<string>>(this.tasksDone);

    constructor() {
        this.tasksList = ["odkurzanie", "pranie", "zakupy", "nauka"];
        this.tasksListObs.next(this.tasksList);
    }

    onAdd(task: string) {
        this.tasksList.push(task);
        this.tasksListObs.next(this.tasksList);
    }

    onDelete(task: string) {
        this.tasksList = this.tasksList.filter( e => e !== task );
        this.tasksListObs.next(this.tasksList);
    }

    onDone(task: string) {
        this.tasksDone.push(task);
        this.onDelete(task);
        this.tasksDoneObs.next(this.tasksDone);
    }

    getTasksListObs(): Observable<Array<string>> {
        return this.tasksListObs.asObservable();
    }

    getTasksDoneObs(): Observable<Array<string>> {
        return this.tasksDoneObs.asObservable();
    }
}
