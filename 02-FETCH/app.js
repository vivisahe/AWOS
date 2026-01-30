/*console.log("Hola desde app.js");
const datos = fetch("https://jsonplaceholder.typicode.com/posts")
.then((response)=>{
    console.log(response);
    return  response.json();
})
.then((data)=>{
    console.log(data);
})
console.log("Fin del archivo app.js")*/

//. async function getDatos(){}

const btnGetDatos = document.getElementById("btnGetDatos");
const contentData = document.getElementById("contentData");
const btnCreate = document.getElementById("btnCreate");
const formCreate = document.getElementById("formCreate");



const obtenerDatos = async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(response);
    const data = await response.json();
    console.log(data);

    contentData.innerHTML = "<h2>Datos obtenidos</h2>";

    data.forEach(element => {
    const divX = document.createElement("div");
    divX.classList.add("col-md-4");
    
        divX.innerHTML =`<div class="card" style="width: 18rem;">
                        <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">${element.body}</p>
                        <a href="#" class="card-link">Detalles</a>
                        <a href="#" class="card-link" onClick="getPost(event,${element.id})">Editar</a>
                     </div>
                     </div>`;
    contentData.appendChild(divX);
    });

}
/*
btnGetDatos.addEventListener("click", obtenerDatos)*/
/*
//Codigo para crear un post
const createPost = async () =>{
    //hace referencia a los inputs
    const inputTitle = document.getElementById("inputTitle");
    const inputDescription = document.getElementById("inputDescription");
    //aqui sacamos/obtenemos los valores de los inputs

    const titleValue=inputTitle.value
    const descriptionValue = inputDescription.value

    const postData = {
        title : titleValue,
        body : descriptionValue,
        userId : 1,

    }

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: JSON.stringify(
                        postData
                    ),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                     },
                    })
    const data = await response.json();
    console.log ("Respuesta del servidor");
    console.log(data)

}


formCreate.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log("Previniendo el recargar de la pagina");
    createPost();
});
const getPost = async(event,idPost) =>{
    //event.preventDefault();
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`);
    const data = await response.json();
    console.log("Datos del post solicitado");
    console.log(data);
    const inputTitle = document.getElementById("inputTitle");
    const inputDescription = document.getElementById("inputDescription");

    inputTitle.value=data.title;
    inputDescription.value=data.body;

    btnCreate.textContent="Actualizar";
}*/
obtenerDatos();