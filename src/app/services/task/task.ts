export interface Task{
    id : bigint
    title : string;
    description : string;
    status : TaskStatus;
    createTime : Date;
    updateTime : Date;
    removeTime : Date;
    isRetired : Boolean
}

enum TaskStatus{
    OPEN = 'OPEN',
    CLOSED = 'CLOSED',
    REMOVED = 'REMOVED'
}