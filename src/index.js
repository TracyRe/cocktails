// import './css/styles.css'; // Should not need this if compiling sass
import $ from 'jquery';
import './scss/styles.scss';
import { DrinkDetails, DrinkList, NonAlcoholicList } from './js/project.js';

$(document).ready(function(){
  $(".cocktail-list").hide();

  $("#non-alcoholic-list").click(() => {
    clearDetails();
    $("#cocktail-list").html("<option value=''>CHOOSE A DRINK --</option>");
    $(".cocktail-list").show();
    let nonAlcList = new NonAlcoholicList();
    let promise3 = nonAlcList.getNonAlcoholicList();

    promise3.then((response) => {
      let body = JSON.parse(response);
      const list = nonAlcList.getList(body.drinks);
      list.forEach( (drink) => {
        $("#cocktail-list").append(`<option value="${drink}">${drink}</option>`)
      });
      $("#specific-surprise").text(`Random Non-Alcoholic Drink`);
      $("#specific-surprise").click(() => {
        getSpecifics(list[Math.floor(Math.random()*list.length)]);
      });
    });
  });


  const alcohols = ["Absinthe", "Beer", "Bourbon", "Brandy", "Campari", "Cider", "Cognac", "Cointreau", "Gin", "Sloe gin", "Green Chartreuse", "Irish cream", "Jägermeister", "Kahlua", "Mezcal", "Ouzo", "Pisco", "Port", "Prosecco", "Rum", "Dark rum", "Light rum", "Spiced rum", "Sambuca", "Scotch", "Blended Scotch", "Tequila", "Vodka", "Whiskey", "Whisky", "Irish whiskey", "Rye whiskey", "Blended whiskey", "Crown Royal"];

  alcohols.forEach((booze) => {
    $("#alcohol-list").append(`<option value="${booze}">${booze}</option>`)
  });

  $("#alcohol-list").change(() => {
    clearDetails();
    $("#cocktail-list").html("<option value=''>CHOOSE A DRINK --</option>");
    $(".cocktail-list").show();

    const ingr = $("#alcohol-list").val();
    let drinkList = new DrinkList();
    let promise2 = drinkList.getDrinkList(ingr);

    promise2.then((response) => {
      let body = JSON.parse(response);
      const list = drinkList.getList(body.drinks);
      list.forEach( (drink) => {
        $("#cocktail-list").append(`<option value="${drink}">${drink}</option>`)
      });
      $("#specific-surprise").text(`Random ${ingr} drink`);
      $("#specific-surprise").click(() => {
        getSpecifics(list[Math.floor(Math.random()*list.length)]);
      });
    });
  });

  $("#cocktail-list").change((event) => {
    event.preventDefault();
    const drinkName = $("#cocktail-list").val();
    getSpecifics(drinkName);
  });
});

function clearDetails() {
  $(".drink-result").hide();
  $(".drink-name").html("");
  $(".drink-image").html("");
  $(".drink-ingredients").empty();
  $(".drink-instructions").html("");
}

function getSpecifics(drinkName) {
  clearDetails();
  $(".drink-result").show();
  let drinkDetails = new DrinkDetails();
  let promise = drinkDetails.getDrinkDetails(drinkName);
  // let name;

  promise.then((response) => {
    let body = JSON.parse(response);
    let name = body.drinks[0].strDrink;
    let image = body.drinks[0].strDrinkThumb;
    let instructions = body.drinks[0].strInstructions;

    $(".drink-name").text(name);
    $(".drink-image").html(`<img src=${image}>`);
    $(".drink-instructions").text(instructions);

    for (let i = 1; i < 10; i++) {
      let ingredients = body.drinks[0][`strIngredient${i}`];
      let measure = body.drinks[0][`strMeasure${i}`];
      if (ingredients.length > 0) {
        $(".drink-ingredients").append(`<li>${measure} ${ingredients}</li>`);
      }
    }
  });
}
// value=${alcohols[j]}


 //
