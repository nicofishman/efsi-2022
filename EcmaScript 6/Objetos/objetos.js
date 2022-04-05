class Pelicula{
    constructor(titulo, id){
        this.titulo = titulo;
        this.id = id;
    }
    Reproducir(){
        return `Reproduciendo ${this.titulo}`;
    }
}

class Serie extends Pelicula{
    constructor(titulo, id, capitulos){
        super(titulo, id);
        this.capitulos = capitulos;
    }
    Reproducir(){
        return `Reproduciendo ${this.titulo} - ${this.capitulos}`;
    }
}

let pelicula1 = new Pelicula('El señor de los anillos', '123');
let pelicula2 = new Pelicula('El señor de los anillos 2', '456');
let pelicula3 = new Pelicula('El señor de los anillos 3', '789');

let peliculas = [pelicula1, pelicula2, pelicula3];

peliculas.map(pelicula => {
    console.log(pelicula.Reproducir());
});

let serie1 = new Serie('Game of Thrones', '123', 8);
let serie2 = new Serie('Breaking Bad', '456', 5);
let serie3 = new Serie('The Walking Dead', '789', 10);

let series = [serie1, serie2, serie3];

series.map(serie => {
    console.log(serie.Reproducir());
});