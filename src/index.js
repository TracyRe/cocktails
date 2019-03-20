// import './css/styles.css'; // Should not need this if compiling sass
import $ from 'jquery';
import './scss/styles.scss';
import { DrinkDetails, DrinkList } from './js/project.js';

$(document).ready(function(){

  const alcohols = ["Absinthe", "Amaretto", "Beer", "Blended whiskey", "Bourbon", "Brandy", "Campari", "Cider", "Cognac", "Cointreau", "Crown Royal", "Dark rum", "Gin", "Green Chartreuse", "Irish cream", "Irish whiskey", "Jägermeister", "Kahlua", "Light rum", "Mezcal", "Ouzo", "Pisco", "Port", "Prosecco", "Rum", "Rye whiskey", "Sambuca", "Scotch", "Blended Scotch", "Sloe gin", "Spiced rum", "Tequila", "Vodka", "Whiskey", "Whisky"];

  for(let j = 0; j < alcohols.length; j ++) {
    $("#alcohol-list").append(`<option value="${alcohols[j]}">${alcohols[j]}</option>`)
  }



  $("#alcohol").submit(function(event){
    event.preventDefault();
    $("#cocktail-list").empty();
    console.log("hello");
    const ingr = $("#alcohol-list").val();
    let drinkList = new DrinkList();
    let promise2 = drinkList.getDrinkList(ingr);

    promise2.then(function(response) {
      let body = JSON.parse(response);
      const list = drinkList.getList(body.drinks);
      console.log(list);
      for(let i = 0; i < list.length; i ++) {
        $("#cocktail-list").append(`<option value="${list[i]}">${list[i]}</option>`)
      }
    });
  });

  $("#cocktails").submit(function(event) {
    event.preventDefault();
    $(".drink-name").val("");
    $(".drink-image").val("");
    $(".drink-ingredients").val("");
    $(".drink-instructions").val("");
    const drinkName = $("#cocktail-list").val();
    let drinkDetails = new DrinkDetails();
    let promise = drinkDetails.getDrinkDetails(drinkName);
    // let name;

    promise.then(function(response) {
      let body = JSON.parse(response);
      let name = body.drinks[0].strDrink;
      let image = body.drinks[0].strDrinkThumb;
      let instructions = body.drinks[0].strInstructions;
      console.log(body.drinks);

      $(".drink-name").text(name);
      $(".drink-image").html(`<img src=${image}>`);
      $(".drink-instructions").text(instructions);

      for (let k = 1; k < 16; k++) {
        let ingred = body.drinks[0].strIngredient[k];
        console.log(ingred);
      }
    });

  });

});
// value=${alcohols[j]}


 //
