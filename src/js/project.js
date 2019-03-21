export class DrinkDetails {
  getDrinkDetails(name) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}

export class DrinkList {
  getDrinkList(ingr) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingr}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
  getList(drink) {
    const cocktails = [];
    drink.forEach((drink) => {
      cocktails.push(drink.strDrink);
    });
    return cocktails;
  }
}

export class NonAlcoholicList {
  getNonAlcoholicList(name) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
  getList(drink) {
    const cocktails = [];
    drink.forEach((drink) => {
      cocktails.push(drink.strDrink);
    });
    return cocktails;
  }
}
