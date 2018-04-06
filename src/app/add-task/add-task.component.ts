import { Component, OnInit } from '@angular/core';

import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task.model';

@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

    newTask: string;

    constructor(private tasksService: TasksService) {}

    ngOnInit() {
    }

    onAdd() {
        const task: Task = { name: this.newTask, createdDate: new Date() }
        this.tasksService.onAdd(task);
        this.newTask = '';
    }



}
