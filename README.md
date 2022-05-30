# drinks
Conveniently searchable and lightweight drink recipe recommendations (alcoholic and nonalcoholic) using the public CocktailDB API. Disclaimer here that a majority of recipes are not recommended for those below legal drinking age. These are marked by a special cocktail glass icon. 


**Demo:** https://h-yung.github.io/drinks/

![drink recipe demo](https://i.postimg.cc/J08VwzK2/drinks-demo.jpg)

**Tech used:** HTML, CSS, JavaScript.

## Additional features
The display rotates on timeout through a sequence of search results from user input. 
It would be functionally more useful to have it either turn out one random choice from the search results, or sequentially allow the user to progress through them and see the number of results or names from the list.

## Optimizations
1. Change the timed rotation to carousel that advances with user input - actually would be easier technically than the current setup with autorotate. This could be more of a 'on user input, pause and allow browsing forward and backward in list results' change for next version.
2. Language translation options for recipes (DE, IT, ES) as well as option to revert "back".
3. Some corrective processing of ingredient list and grammar - would need to rinse data through this step.
4. Allow user to choose to see video if it exists for a drink (though few of the drinks have this).
5. Filtering option for user and correct results display per above note on "additional features".
6. Suggested pairings (other API).
7. (Ongoing) Refactoring to streamline.

## Lessons learned
It's clear I get carried away with CSS /styling even a very simple website...

Asynchronous API calls with timeouts can wreak havoc on search result presentation. Isolate the timeout or promise so that the remaining results of the earlier calls do not keep appearing in the current call. (Thanks [Arquimidio](https://github.com/Arquimidio)!)

## Related projects
The more practical approach to this recipe recommendation (as noted above) was applied to a [business marketing website](https://unplanned-diversion-59th-st.netlify.app/).
