document.querySelector('button').addEventListener('click', getDrink)
function getDrink(){

    let drink = document.querySelector('input').value.split(' ').join('%20') 
    // user-entered value is assigned to this drink variable. Ensures search works even if input has spaces.

    let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink
    // query parameter = user input
    fetch(url) 
        .then(res => res.json()) 
        .then(data => {

            for (let i = 0; i < data.drinks.length; i++){
                (function (i){
                    setTimeout(function(){
                        document.querySelector('#ingred').innerText = "";
                        document.querySelector('#ingred').classList.add('hidden');
                        document.querySelector('h2').innerText = data.drinks[i].strDrink;
                        document.querySelector('img').src = data.drinks[i].strDrinkThumb;
                        document.querySelector('img').alt = data.drinks[i].strDrink;
                        document.querySelector('#ingredTitle').innerText = "Ingredients"
                        let arr = [];
                        for (let num=1; num <=15; num++){
                            if (!(data.drinks[i][`strIngredient${num}`] === null || data.drinks[i][`strIngredient${num}`]=="")){
                                arr.push(data.drinks[i][`strIngredient${num}`])
                            } 
                        }
                        document.querySelector('#ingred').innerText = arr.join(', ')
                        document.querySelector('#ingred').classList.remove('hidden')
                        document.querySelector('#instructTitle').innerText = "Instructions"
                        document.querySelector('#instructions').innerText = data.drinks[i].strInstructions;
                        if (data.drinks[i].strAlcoholic == "Alcoholic"){
                            document.querySelector('#alcohol').classList.remove('hidden')
                        }else{
                            document.querySelector('#alcohol').classList.add('hidden')
                        }
                    }, 5000*i); //delays for reading purposes
                })(i)
            }
        }) 
    .catch(err => {
        console.log(`error ${err}`)
    });

    document.querySelectorAll('.terc').forEach(element => element.classList.toggle('hidden'));
}