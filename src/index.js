// import './css/styles.css'; // Should not need this if compiling sass
import $ from 'jquery';
import './scss/styles.scss';
import { DrinkDetails, DrinkList, NonAlcoholicList } from './js/project.js';

$(document).ready(function(){
  $(".cocktail-list").hide();




  const alcohols = ["Absinthe", "Beer", "Bourbon", "Brandy", "Campari", "Cider", "Cognac", "Cointreau", "Gin", "Sloe gin", "Green Chartreuse", "Irish cream", "Jägermeister", "Kahlua", "Mezcal", "Ouzo", "Pisco", "Port", "Prosecco", "Rum", "Dark rum", "Light rum", "Spiced rum", "Sambuca", "Scotch", "Blended Scotch", "Tequila", "Vodka", "Whiskey", "Whisky", "Irish whiskey", "Rye whiskey", "Blended whiskey", "Crown Royal"];

  alcohols.forEach((booze) => {
    $("#alcohol-list").append(`<option value="${booze}">${booze}</option>`)
  });

  let cocktailList;
  let nonAlcoholList;

  $("#alcohol-list").change(() => {
    clearDetails();
    $("#cocktail-list").html("<option value=''>-- CHOOSE A DRINK --</option>");
    $(".cocktail-list").show();
    // $("#specific-surprise").removeAttr('id');

    const ingr = $("#alcohol-list").val();
    let drinkList = new DrinkList();
    let promise2 = drinkList.getDrinkList(ingr);

    promise2.then((response) => {
      let body = JSON.parse(response);
      cocktailList = drinkList.getList(body.drinks);
      cocktailList.forEach( (drink) => {
        $("#cocktail-list").append(`<option value="${drink}">${drink}</option>`)
      });
      $("#specific-surprise").html('<button id="alc" type="button" name="button"></button>');
      $("#alc").text(`Or, Random ${ingr} drink`);
      $("#alc").click(() => {
        console.log(cocktailList);
        getSpecifics(cocktailList[Math.floor(Math.random()*cocktailList.length)]);
      });
    });
  });


  $("#non-alcoholic-list").click(() => {
    clearDetails();
    $("#specific-surprise").empty();
    $("#cocktail-list").html("<option value=''>CHOOSE A DRINK --</option>");
    $(".cocktail-list").show();
    let nonAlcList = new NonAlcoholicList();
    let promise3 = nonAlcList.getNonAlcoholicList();

    promise3.then((response) => {
      let body = JSON.parse(response);
      const nonAlcoholList = nonAlcList.getList(body.drinks);
      nonAlcoholList.forEach( (drink) => {
        $("#cocktail-list").append(`<option value="${drink}">${drink}</option>`)
      });
      $("#specific-surprise").html('<button id="non-alc" type="button" name="button">Or, Random Non-Alcoholic Drink</button>');
      $("#non-alc").click(() => {
        console.log(nonAlcoholList);
        getSpecifics(nonAlcoholList[Math.floor(Math.random()*nonAlcoholList.length)]);
      });
    });
  });


  $("#cocktail-list").change((event) => {
    event.preventDefault();
    clearDetails();
    const drinkName = $("#cocktail-list").val();
    getSpecifics(drinkName);
  });
});

function clearDetails() {
  $(".drink-result").hide();
  $(".drink-name").html("");
  $(".drink-image").html("");
  $(".drink-ingredients").html("");
  $(".drink-instructions").html("");
}

function getSpecifics(drinkName) {
  clearDetails();
  $(".drink-result").show();
  let drinkDetails = new DrinkDetails();
  let promise = drinkDetails.getDrinkDetails(drinkName);

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
