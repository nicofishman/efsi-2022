class Tarea {
    static count = 0
    constructor(titulo) {
        this.id = ++this.constructor.count;
        this.titulo = titulo;
        this.creationTime = new Date();
        this.completed = false;
    }
    marcar(){
        this.completed = true;
        this.spentTime = new Date().getTime() - this.creationTime.getTime();
    }
}