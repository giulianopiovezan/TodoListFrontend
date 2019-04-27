import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Task } from 'src/app/services/task/task';
import { TaskService } from 'src/app/services/task/task-service.service';
import { TaskModel } from 'src/app/models/TaskModel';

@Component({
    selector: 'todo',
    templateUrl: 'todolist.component.html'
})

export class TodoListComponent implements OnInit {

    private tasks : Promise<Task[]>;
    private task : TaskModel = new TaskModel();
    private action : string;
    private message : string;

    constructor(private service : TaskService) { }

    async ngOnInit() { 
        this.loadTasks();
    }

    create(task : TaskModel) : void{
        this.service.create(task).subscribe((response : Task) => {
            this.task = new TaskModel();
            this.message = 'Tarefa criada com sucesso!';
            this.loadTasks();
        });
    }

    update(task : TaskModel) : void{
        this.service.update(task).subscribe((response : Task) => {
            this.task = new TaskModel();
            this.loadTasks();
            this.message = 'Tarefa atualizada com sucesso!';
            this.action = 'create';
        });
    }

    close(id : bigint) : void{
        this.service.close(id).subscribe((response : Task) => {
            this.loadTasks();
            this.message = 'Tarefa finalizada com sucesso!';
        });
    }

    reopen(id : bigint) : void{
        this.service.reopen(id).subscribe((response : Task) => {
            this.loadTasks();
            this.message = 'Tarefa reaberta com sucesso!';
        });
    }

    remove(id : bigint) : void{
        this.service.remove(id).subscribe((response : Task) => {
            this.loadTasks();
            this.message = 'Tarefa removida com sucesso!';
        });
    }

    edit(task : Task) : void{
        this.task = new TaskModel(task.title, task.description, task.id);
        this.action = 'update';
    }

    async loadTasks(){
        this.tasks = this.service.getAllTasks();
    }
}