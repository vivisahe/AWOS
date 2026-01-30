const btnGetDatos = document.getElementById("btnGetBebida");
const contentData = document.getElementById("contentData");
const inputBebida = document.getElementById("inputBebida");

const obtenerBebida = async (event,idPost) =>{
    const nombreBebida=inputBebida.value;
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nombreBebida}`);
    const data = await response.json();
    console.log("datos solicitados")
    console.log(data);
    /*console.log(data);*/
    contentData.innerHTML ="";
    data.drinks.forEach(element => {
        const divX = document.createElement("div");
         divX.classList.add("col-md-4");
        divX.innerHTML =`<div class="card" style="width: 18rem;">
                        <div class="card-body">
                        <h5 class="card-title">${element.strDrink}</h5>
                        <img src="${element.strDrinkThumb}" class="card-img-top" alt="${element.strDrink}">                      
                     </div>
                     </div>`;
    contentData.appendChild(divX);
    });
}
btnGetDatos.addEventListener("click",obtenerBebida)


