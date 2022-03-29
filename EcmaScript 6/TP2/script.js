let tareas = [];

function refrescarTareas() {
    let lista = document.querySelector("#tareas");
    lista.innerHTML = "";
    tareas.forEach((tarea, idx) => {
        //agregar tareas a la lista
        let item = document.createElement(```<div class="tarea" id=${idx}>
        <input type="checkbox" onclick="completarTarea(${idx})">
        <p class="textoTarea">${tarea.titulo}</p>
    </div>
    ```);
        lista.appendChild(item);
    });
}


function agregarTarea(){
    let tareaNombre = document.querySelector("#tareaInput").value;
    let tarea = new Tarea(tareaNombre);
    tareas.push(tarea);
    console.log(tareas);
    refrescarTareas();
}