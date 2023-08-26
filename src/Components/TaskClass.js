class task {
    constructor(taskId, title, creationDate = null, dueDate = null, description = null, completed = false, tags = null) {
        this.taskId = taskId;
        this.title = title;
        this.creationDate = creationDate;
        this.dueDate = dueDate;
        this.description = description;
        this.completed = completed;
        this.tags = tags;
    }
}

export default task;