import { Component, OnInit } from '@angular/core';

import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task.model';

@Component({
    selector: 'app-todo-task',
    templateUrl: './todo-task.component.html',
    styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {

    tasksList: Array<Task> = [];

    constructor(private tasksService: TasksService) { 
        this.tasksService.getTasksListObs().subscribe(
            (tasks: Array<Task>) => {
                this.tasksList = tasks;
            }
        );
    }

    ngOnInit() {
    }

    onDelete(task: Task) {
        this.tasksService.onDelete(task);
    }

    onDone(task: Task) {
        this.tasksService.onDone(task);
    }

}
