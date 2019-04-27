import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../../../services/task/task-service.service';
import { Task } from 'src/app/services/task/task';

@Component({
    selector: 'todo-table',
    templateUrl: 'todoTable.component.html'
})

export class TodoTableComponent{

    @Output() onClose : EventEmitter<bigint> = new EventEmitter();
    @Output() onReopen : EventEmitter<bigint> = new EventEmitter();
    @Output() onRemove : EventEmitter<bigint> = new EventEmitter();
    @Output() onEdit : EventEmitter<Task> = new EventEmitter(); 
    @Input() action : string = 'create'

    @Input() private tasks : Promise<Task[]>;

    constructor(private service : TaskService) { }

    close(id : bigint) : void{
        this.onClose.emit(id);
    }

    reopen(id : bigint) : void{
        this.onReopen.emit(id);
    }

    remove(id : bigint) : void{
        this.onRemove.emit(id);
    }

    edit(task : Task) : void{
        this.onEdit.emit(task);
    }
}