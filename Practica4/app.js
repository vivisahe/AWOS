const contentData = document.getElementById("contentData");
const inputBuscar = document.getElementById("inputBuscar");
const btnBuscar = document.getElementById("btnBuscar");

const buscarElemento = async(event,idElemnto) =>{
const nombreElemento = inputBuscar.value;
if(nombreElemento == ""){
    contentData.innerHTML=("Campo de texto vacio, ingresa un nombre");
    return
}else{
   const response = await fetch(`https://rickandmortyapi.com/api/character?name=${nombreElemento}`);
console.log(response);
const data = await response.json();
console.log(data);
contentData.innerHTML=("<h2>Elemento(s) Obtenidos</h2>");

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

}
btnBuscar.addEventListener("click",buscarElemento)
