class Tarea {
    constructor(titulo) {
        this.titulo = titulo;
        this.creationTime = new Date();
        this.completed = false;
    }
    marcar(){
        this.completed = true;
        this.completedTime = new Date();
    }
}