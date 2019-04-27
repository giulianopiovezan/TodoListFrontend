import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TaskModel } from 'src/app/models/TaskModel';
import { TaskService } from 'src/app/services/task/task-service.service';

@Component({
    selector: 'todo-form',
    templateUrl: 'todoForm.component.html'
})

export class TodoFormComponent implements OnInit {

    @Input() task : TaskModel

    @Output() onCreate : EventEmitter<TaskModel> = new EventEmitter();
    @Output() onUpdate : EventEmitter<TaskModel> = new EventEmitter();

    constructor(private service : TaskService) { 
    }

    adicionar() : void{
        this.onCreate.emit(this.task);
    }

    atualizar(){
        this.onUpdate.emit(this.task);
    }

    ngOnInit() {
     }
}