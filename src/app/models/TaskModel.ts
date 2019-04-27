
export class TaskModel{

    id : bigint
    title : string;
    description : string;

    constructor(title ?: string, description ?: string, id ?: bigint){
        this.title = title;
        this.description = description;
        this.id = id;
    }
}