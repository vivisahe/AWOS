
const contentData = document.getElementById("contentData");
const btnBuscar = document.getElementById("btnBuscar");
const inputPersonaje = document.getElementById("nombrePersonaje");

const obtenerDatos = async()=>{
    const response = await fetch("https://rickandmortyapi.com/api/character");
    console.log(response)
    const data = await response.json();
    console.log(data);
    contentData.innerHTML="<h2>Personajes</h2>";

    data.results.forEach(element => {
        const divX = document.createElement("div");
        divX.classList.add("col-md-4");

        divX.innerHTML=`<div class="card" style="width: 18rem;">
                        <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <p class="card-text">Especie: ${element.species}</p>
                        <p class="card-text">Estado : ${element.status}</p>
                        <p class="card-text">Genero : ${element.gender}</p>
                        <img src="${element.image}" class="card-img-top">
                        <a href="#" class="card-link">Detalles</a>
                     </div>
                     </div>`;
    contentData.appendChild(divX);
        
    });

}

const buscarPersonaje = async(event,idPersonaje) =>{
    const nombrePersonaje = inputPersonaje.value;
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombrePersonaje}`);
    const data = await response.json();
    console.log("Datos encontrados")
    console.log(data)
    contentData.innerHTML="";
    data.results.forEach(element => {
        const divX = document.createElement("div");
        divX.classList.add("col-md-4");
         divX.innerHTML=`<div class="card" style="width: 18rem;">
                        <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <p class="card-text">Especie: ${element.species}</p>
                        <p class="card-text">Estado : ${element.status}</p>
                        <p class="card-text">Genero : ${element.gender}</p>
                        <img src="${element.image}" class="card-img-top">
                        <a href="#" class="card-link">Detalles</a>
                     </div>
                     </div>`;
                     contentData.appendChild(divX);
    })
}

btnBuscar.addEventListener("click",buscarPersonaje)
obtenerDatos();