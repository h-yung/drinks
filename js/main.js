//cancellable carousel
const queue = []; 

//show results
const ingred = document.querySelector('#ingred')
const drinkName = document.querySelector('h2')
const img = document.querySelector('img')
const ingredTitle = document.querySelector('#ingredTitle')
const instructTitle = document.querySelector('#instructTitle')
const instructions = document.querySelector('#instructions')
const indicator = document.querySelector('#alcohol')

function getDrink(){
    let drink = document.querySelector('input').value.split(' ').join('%20') 
    // user-entered value is assigned to this drink variable. Ensures search works even if input has spaces.
    let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink
    // query parameter = user input
    fetch(url) 
        .then(res => res.json()) 
        .then(data => {
            for(let i = 0; i < data.drinks.length; i++){
                const time = setTimeout(() => {
                   ingred.innerText = "";
                   ingred.classList.add('hidden');
                   drinkName.innerText = ""
                   img.src = ""
                   img.alt = ""
                   instructions.innerText = ""

                   drinkName.innerText = data.drinks[i].strDrink;
                   img.src = data.drinks[i].strDrinkThumb;
                   img.alt = data.drinks[i].strDrink;
                   ingredTitle.innerText = "Ingredients"
                    let arr = [];
                    for (let num=1; num <=15; num++){
                        if (!(data.drinks[i][`strIngredient${num}`] === null || data.drinks[i][`strIngredient${num}`]=="")){
                            arr.push(data.drinks[i][`strIngredient${num}`])
                        } 
                    }
                   ingred.innerText = arr.join(', ')
                   ingred.classList.remove('hidden')
                   instructTitle.innerText = "Instructions"
                   instructions.innerText = data.drinks[i].strInstructions;
                    if (data.drinks[i].strAlcoholic == "Alcoholic"){
                        indicator.classList.remove('hidden')
                    }else{
                        indicator.classList.add('hidden')
                    }
                    queue.shift();

                }, 5000 * i);
                
                queue.push(time);
            }
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
    
        document.querySelectorAll('.terc').forEach(element => element.classList.toggle('hidden'));
}

document.querySelector('button').addEventListener('click', () => {
	queue.forEach(timer => clearTimeout(timer));
    queue.length = 0;
    getDrink();
})