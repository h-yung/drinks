//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
// make the following work with drinks that have spaces in the name. Try building without a template literal
// then make it cycle through drinks - carousel
// ask on discord






document.querySelector('button').addEventListener('click', getDrink)
// specify the drink, not hard code

// put fetch inside a function b/c you only want it called after you have a value from the input
function getDrink(){

    let drink = document.querySelector('input').value.split(' ').join('%20') 
    // user gets to enter a value and that is assigned to this drink variable
    // the above has to be set AFTER the user had a chance to put a value in. therefore must be inside the function that is called only once button pressed
   

    let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink
    // now the query parameter is no longer hardcoded but references user-entered value

    

    fetch(url) 
        .then(res => res.json()) 
        .then(data => {

            console.log(data.drinks) //get one of the drinks, using the index
            // from the object logged to the console, you can see the property "drinks" contains an array of drinks
            
            
            for (let i = 0; i < data.drinks.length; i++){
                
                (function (i){
                    // document.querySelector('#ingred').add('hidden')
                    setTimeout(function(){
                        // document.querySelector('input').value = data.drinks[i].strDrink;
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
                        
                    }, 5000*i);
                })(i)

            }
        
            
        }) 

    .catch(err => {
        console.log(`error ${err}`)
    });

    document.querySelectorAll('.terc').forEach(element => element.classList.toggle('hidden'));
    // make language trans buttons available


}




/*
HARD CODED MARGARITA BEFORE with  

function getDrink(){

    let drink = document.querySelector('input').value.split(' ').join('%20') 
    // the above has to be set AFTER the user had a chance to put a value in. therefore must be inside the function that is called only once button pressed

    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita") 
    // if you paste this url into browser, you will see the whole object and its properties thanks to the console.log() call below
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            // once you see the object in the console, you can see the property "drinks" contains an array of drinks
            console.log(data.drinks[0]) //get one of the drinks, using the index
            document.querySelector('input').value = data.drinks[0].strDrink;
            document.querySelector('h2').innerText = data.drinks[0].strDrink;
            document.querySelector('img').src = data.drinks[0].strDrinkThumb;
            document.querySelector('img').alt = data.drinks[0].strDrink;
            document.querySelector('p').innerText = data.drinks[0].strInstructions;
        }
        ) //edited the part after the arrow
            
        .catch(err => {
            console.log(`error ${err}`)
        });
}

*/

// make it provide different language swap options (see what is available from object)


