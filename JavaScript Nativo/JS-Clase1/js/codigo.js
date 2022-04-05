//change #parrafo onclick
window.addEventListener("click", () => {    
    document.getElementById("parrafo").innerHTML = "Cambio de texto"
    let p = document.createElement('img')
    p.setAttribute("id", "parrafo2")
    document.querySelector(".container").appendChild(p)
    ids = document.querySelectorAll("#parrafo2")
    ids.forEach((id,idx) => {
        id.src = "https://upload.wikimedia.org/wikipedia/commons/e/ea/Martin_Liberman.jpg";
        id.style.width = "100px";
        id.style.height = "100px";
    })
})