import { Component, OnInit } from '@angular/core';

import { TasksService } from '../services/tasks.service';

@Component({
    selector: 'app-todo-task',
    templateUrl: './todo-task.component.html',
    styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

    tasksList: Array<string> = [];

    constructor(private tasksService: TasksService) { 
        this.tasksService.getTasksListObs().subscribe(
            (tasks: Array<string>) => {
                this.tasksList = tasks;
            }
        );
    }

    ngOnInit() {
    }

    onDelete(task: string) {
        this.tasksService.onDelete(task);
    }

    onDone(task: string) {
        this.tasksService.onDone(task);
    }

}
