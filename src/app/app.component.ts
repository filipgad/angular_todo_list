import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    tasksList: Array<string> = [];
    tasksDone: Array<string> = [];

    onAdd(task: string) {
        this.tasksList.push(task);
    }

    onDelete(task: string) {
        this.tasksList = this.tasksList.filter( e => e !== task );
    }

    onDone(task: string) {
        this.tasksDone.push(task);
        this.onDelete(task);
    }
}
