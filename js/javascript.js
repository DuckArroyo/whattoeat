//Score
var score = 10;
var scoreButtonEl = document.querySelector("#locate");
var scoreEl = document.querySelector("#scoreSpan");

//buttons
var getDocumenuEl = document.getElementById("#locate");
var getEdamamEl = document.getElementById("#locate");

var user = document.querySelector("#userInput").value;
// console.log(user);
var cuisine = document.querySelector("#cuisineType").value;
// console.log(cuisine);
var state = document.querySelector("#state").value;
//console.log(state);

//container for API responses
var responseContainerEl = document.querySelector("#response-container");
//containers to reset html
var edamamResponseEl = document.querySelector("#edamam-response");
var documenuResponseEl = document.querySelector("#documenu-response");
//smallest containers
var edamamEl = document.querySelector("#edamam");
var documenuEl = document.querySelector("#documenu");

//Documenu fetch
function getDocumenu() {
  fetch(
    "https://api.documenu.com/v2/restaurants/search/fields?state=oregon&cuisine=mexican&top_cuisines=false&zip_code=97403&key=359d18be100f928817fd7d3a21693376"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (answer) {
      buildDocumenuCard(answer);
    });
}

//getDocumenu(); //remove when buttons are ready

//Edamam fetch
function getEdamam() {
  fetch(
    "https://api.edamam.com/api/recipes/v2?type=public&q=" +
      user +
      "&app_id=9d877ffc&app_key=d41009055184f2d73ec327f4ab82da3b&cuisineType=" +
      cuisine
  ) //where user is user input and cuisineType is cuisine
    .then(function (response) {
      // console.log(response); //Works delete when done
      // console.log(user);
      // console.log(cuisine);
      return response.json();
    })
    .then(function (data) {
      //console.log("Edamam Success"); //Works delete when done
      buildEdamamCard(data);
    });
}

getEdamam(); //remove when buttons are ready

function buildDocumenuCard(answer) {
  console.log(answer.data);
  console.log(answer.data[0]);

  responseContainerEl.appendChild(documenuResponseEl);
  documenuResponseEl.appendChild(documenuEl);

  for (i = 0; i <= answer.data.length; i++) {
    //Container for each card
    var card = document.createElement("div");
    card.setAttribute("id", "restaurantDiv");
    card.setAttribute("class", "documenu");
    documenuEl.appendChild(card);
    console.log("answer.data[i].restaurant_name");
    console.log(answer.data[i].restaurant_name);
    var restaurantName = answer.data[0].restaurant_name;
    var restaurantNameEl = createElement("h4");
    restaurantNameEl.textContent = restaurantName;
    card.appendChild(restaurantNameEl);
  }
}

function buildEdamamCard(data) {
  // console.log(data);

  responseContainerEl.appendChild(edamamResponseEl);
  edamamResponseEl.appendChild(edamamEl);
  // console.log(data.hits);

  for (i = 0; i <= data.hits.length; i++) {
    //Container for each card
    var card = document.createElement("div");
    card.setAttribute("id", "recipeDiv");
    card.setAttribute("class", "edamam");
    edamamEl.appendChild(card);
    //Image
    // console.log(data.hits[i].recipe.image);
    //var photo = data.hits[i].recipe.image;
    // .attr("src" data.hits[i].recipe.image)
    // .addClass("thumb")
    // label
    var recipeName = data.hits[i].recipe.label; //write variables for each item that need to be displayed
    var recipeNameEl = document.createElement("h4");
    recipeNameEl.textContent = recipeName;
    card.appendChild(recipeNameEl);
    //recipe source
    var source = data.hits[i].recipe.source;
    var sourceEl = document.createElement("p");
    sourceEl.textContent = source;
    card.appendChild(sourceEl);
    //recipe url - create an href
    var url = data.hits[i].recipe.shareAs;
    var urlEl = document.createElement("a");
    urlEl.textContent = '<a href="' + url + '" target="_blank">';
    //urlEl.textContent = "Link to page";
    card.appendChild(urlEl);
    //Makes
    var makes = data.hits[i].recipe.yield;
    var makesEl = document.createElement("p");
    makesEl.textContent = "Makes: " + makes + " servings.";
    card.appendChild(makesEl);
  } //!KEEP
}

function reset() {
  // event.preventDefault();
  edamamResponseEl.innerHTML = "";
  documenuResponseEl.innerHTML = "";
}

//getEdamamEl.addEventListener("click", getEdamam);
//getDocumenuEl.addEventListener("click", getDocumenu);
scoreButtonEl.addEventListener("click", function () {
  event.preventDefault();
  console.log("Search button pressed");
  if (score > 0) {
    score--;
    scoreEl.textContent = score;
  }
});
//console.log("Bottom of JavaScript");
