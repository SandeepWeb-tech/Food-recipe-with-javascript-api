async function getData(){
    const dataSearch = document.getElementById("data").value.trim();
    const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${dataSearch}`);
    const data = await resp.json();
    console.log(data.meals);

    giveAccsess(data.meals);
}

function giveAccsess(meals){
    var result = document.getElementById("result");
    result.innerHTML = " ";

    meals.forEach((joke) =>{
        const {strMeal,strMealThumb,idMeal} = joke;
        const jokesE1 = document.createElement("div");
        jokesE1.classList.add("joke");

        jokesE1.innerHTML = `<div class="mealDataShow">
        <div class="DataShow">
            <div class="imagShow">
                <img src="${strMealThumb}" alt="">
            </div>
            <h4>${strMeal}</h4>
            <button class="btn" onclick ="getRespie(${idMeal});">Get Respie</button>
        </div>
    </div>`
        result.appendChild(jokesE1);
    });
}


async function getRespie(idOfMeal){

    const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idOfMeal}`);
    const dataresp = await resp.json();
    console.log(dataresp.meals);

    getAllRespie(dataresp.meals);
}


function getAllRespie(mealsall){
    var respieResult = document.getElementById("respie");

    respieResult.innerHTML = " ";


    mealsall.forEach((mel) =>{

        const {strInstructions,strMealThumb,strMeal} = mel;

        var newrespie = document.createElement("div");

        newrespie.classList.add("mel");
        
        newrespie.innerHTML = `
        <div class="respieallData">
        <button class="btnnn" id="cross" onclick="exitall();">Exit</button>
            <div class="imageResp">
                   <img src="${strMealThumb}" alt="">      
            </div>

            <div class="headerResp">
                <h1>${strMeal}</h1>
                <p>${strInstructions}</p>
            </div>
        </div>`

        respieResult.appendChild(newrespie);

        document.getElementById("respie").style.display= "block";
        document.getElementById("result").style.opacity = "0.3";



    })
}

function exitall(){
    document.getElementById("respie").style.display= "none";
    document.getElementById("result").style.opacity = "1";
   
}

