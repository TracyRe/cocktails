# Cocktails

#### API project for Epicodus

_Published_ **March 20 2019**<br>
_Authors_ **Tracy Reith** and **Kim McConnell**

1. [Description](#description)
1. [Learning Objective](#learning-objective)
1. [Target Audience/Users](#target-audience/users)
1. [User Stories](#user-stories)
1. [Product Requirements](#product-requirements)
1. [Non-technical Requirements](#non-technical-requirements)
1. [Development Specs](#development-specs)
1. [Stretch Goals](#stretch-goals)
1. [Installation](#installation)
1. [Known Bugs](#known-bugs)
1. [Technologies Used](#technologies-used)
1. [License](#license)

### Description
A website using an API for www.thecocktaildb.com, letting the user select a cocktail based on entry criteria. Created for Epicodus Front End Development course.

### Learning Objective
Use API to get information and deliver it to the user. Separate business logic from UI logic.

### Target Audience/Users
* People who like to party

### User Stories
**As a** _archetype_,<br>
**I want** _to be able to do something_,<br>
**So that** _I can achieve a goal_.

### Product Requirements
* Let the user enter some search terms
* Return the name of a cocktail from https://www.thecocktaildb.com/
* Return a picture of the cocktail
* Return a list the cocktail's details

### Non-technical Requirements
* Do it fast
* Make it look good

### Development Specs

Specification | Input | Output
------------- | ----- | ------
User can request type of liquor in cocktail | "Tequila" | API get filter.php?i=tequila
User can request non-alcoholic drink | "Non-alcoholic" | API get filter.php?a=Non_Alcoholic
User can select drink from list | "Margarita" | API get lookup.php?i=11007
Send cocktail id to cocktail database and get full details | 11007 | {"drinks":[{"idDrink":"11007","strDrink":"Margarita","strDrinkAlternate":null,"strDrinkES":null,"strDrinkDE":null,"strDrinkFR":null,"strDrinkZH-HANS":null,"strDrinkZH-HANT":null,"strTags":"IBA,ContemporaryClassic","strVideo":null,"strCategory":"Ordinary Drink","strIBA":"Contemporary Classics","strAlcoholic":"Alcoholic","strGlass":"Cocktail glass","strInstructions":"Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.","strInstructionsES":null,"strInstructionsDE":null,"strInstructionsFR":null,"strInstructionsZH-HANS":null,"strInstructionsZH-HANT":null,"strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/wpxpvu1439905379.jpg","strIngredient1":"Tequila","strIngredient2":"Triple sec","strIngredient3":"Lime juice","strIngredient4":"Salt","strIngredient5":"","strIngredient6":"","strIngredient7":"","strIngredient8":"","strIngredient9":"","strIngredient10":"","strIngredient11":"","strIngredient12":"","strIngredient13":"","strIngredient14":"","strIngredient15":"","strMeasure1":"1 1\/2 oz ","strMeasure2":"1\/2 oz ","strMeasure3":"1 oz ","strMeasure4":"","strMeasure5":"","strMeasure6":"","strMeasure7":"","strMeasure8":"","strMeasure9":"","strMeasure10":"","strMeasure11":"","strMeasure12":"","strMeasure13":"","strMeasure14":"","strMeasure15":"","dateModified":"2015-08-18 14:42:59"}]}
From cocktail details, display name, photo, ingredients, and instructions | 11007 | Margarita<br><img src="https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg" width="100px"><br>Tequila<br>Triple sec<br>Lime juice<br>Salt<br>Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.

### Stretch Goals
* Dynamically generate droplist of alcohol options from API call
* Random cocktail from database of cocktails
* Random cocktail from returned set of cocktails

### Installation
* Clone from https://github.com/TracyRe/<< repo >>.git
* Run `$ npm install`


### Known Bugs
* None identified

### Technologies Used
* HTML
* Sass with variables and mixins
* Javascript with jQuery
* Tested with Karma and Jasmine

### License
[MIT](./LICENSE.txt)

Copyright (c) 2019 Tracy Reith and Kim McConnell
