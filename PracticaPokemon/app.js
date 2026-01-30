

const contentData = document.getElementById("contentData");
const inputBuscar = document.getElementById("nombredigimon");
const btnBuscar = document.getElementById("btnBuscar");

const obtenerDatos = async()=>{
    const response = await fetch ("https://digimon-api.vercel.app/api/digimon");
    const data = await response.json();
    contentData.innerHTML="<h2>Digimons</h2>";

    data.forEach(element => {
        const divX = document.createElement("div");
        divX.classList.add("col-md-4");

        divX.innerHTML=`
        <div class="card" style="width: 18rem;">
                        <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <img src="${element.img}" class="card-img-top">
                        <a href="#" class="card-link">Detalles</a>
                     </div>
                     </div>`;
                     contentData.appendChild(divX);
    });
}

const buscarDigimon = async(event,idDigimon)=>{
const nombreDigimon = inputBuscar.value;
const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${nombreDigimon}`);
console.log(response)
const data = await response.json();
console.log(data)
contentData.innerHTML="";
data.forEach(element => {
        const divX = document.createElement("div");
        divX.classList.add("col-md-4");

        divX.innerHTML=`
        <div class="card" style="width: 18rem;">
                        <div class="card-body">
                        <h5 class="card-title">${element.name}</h5>
                        <img src="${element.img}" class="card-img-top">
                        <a href="#" class="card-link">Detalles</a>
                     </div>
                     </div>`;
                     contentData.appendChild(divX);
    })

}

btnBuscar.addEventListener("click",buscarDigimon);
obtenerDatos();