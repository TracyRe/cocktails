import { DrinkDetails, DrinkList } from './../src/js/project.js';

const drinkName = "Margarita";
const ingredient = "Bourbon";
let drinkDetails = new DrinkDetails();
let drinkList = new DrinkList();
let promise1 = drinkDetails.getDrinkDetails(drinkName);
let promise2 = drinkList.getDrinkList(ingredient);
let name;
let drink;

function testPromise1(done) {
promise1.then(function(response) {
    let body = JSON.parse(response);
    name = body.drinks[0].strDrink;
    done();
  });
}

function testPromise2(done) {
  promise2.then(function(response) {
    let body = JSON.parse(response);
    drink = body.drinks[1].strDrink;
    done();
  });
}

describe('DrinkDetails', function() {
  beforeEach(function(done) {
    testPromise1(done);
  });
  it('should return drink details when a drink is indicated by name', function() {
    expect(name).toEqual("Margarita");
  });
});

describe('DrinkList', function() {
  beforeEach(function(done) {
    testPromise2(done);
  });
  it('should return a list of drinks when an ingredient is indicated by name', function() {
    expect(drink).toEqual("Bourbon Sour");
  });
});
