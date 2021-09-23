//Score
var score = 10;
//var scoreButtonEl = document.querySelector("#locate");
var getDocumenuEl = document.querySelector("#locate");

var scoreEl = document.querySelector("#scoreSpan");

var user = document.querySelector("#aligned-foo");
var category = document.querySelector("#cuisineType");
var state = document.querySelector("#state");
var responseContainerEl = document.querySelector("#response-container");
var edamamResponseEl = document.querySelector("#edamam-response");
var documenuResponseEl = document.querySelector("#documenu-response");

// scoreButtonEl.addEventListener("click", function () {
//   event.preventDefault();
//   console.log("Search button pressed");
//   if (score > 0) {
//     score--;
//     scoreEl.textContent = score;
//   }
// });

getDocumenuEl.addEventListener("click", getDocumenu);
//Documenu fetch
function getDocumenu(category, state) {
  fetch(
    "https://api.documenu.com/v2/restaurants/state/" +
      state +
      "?cuisine=" +
      category +
      "&key=0a3d92451c7ba73ea09adb2814dd9649"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      //buildcard(data)
    });
}

//Edamam fetch
function getEdamam() {
  fetch(
    "https://api.edamam.com/api/recipes/v2?type=public&q=burger&app_id=9d877ffc&app_key=d41009055184f2d73ec327f4ab82da3b&cuisineType=american"
  ) //where burger is var user and cuisineType is category
    .then(function (response) {
      //console.log(response); Works delete when done
      return response.json();
    })
    .then(function (data) {
      console.log("Edamam Success"); //Works delete when done
      buildEdamamCard(data);
    });
}

getEdamam(); //remove when buttons are ready

function buildDocumenuCard(data) {
  console.log(data);
  var title = data.data[0].restaurant_name;
  var htmlTitle = $("h1").text(title);
  $("#documenu").append(htmlTitle);
  //! Bryan write your code here
}

function buildEdamamCard(data) {
  console.log(data);

  responseContainerEl.appendChild(edamamResponseEl);

  //!This loop works. We will use it to loop through the responses
  // for (i = 0; i <= data.hits.length; i++) {
  console.log("0");
  console.log(data.hits[0].recipe);
  //Container for each card
  var card = document.createElement("div");
  card.setAttribute("id", "recipeDiv");
  card.setAttribute("class", "card");
  edamamResponseEl.appendChild(card);
  //Image
  console.log("data.hits[0].recipe.image");
  console.log(data.hits[0].recipe.image);

  var photo = data.hits[0].recipe.image;
  // .attr("src" data.hits[0].recipe.image)
  // .addClass("thumb")
  // label
  console.log("data.hits[0].recipe.label");
  console.log(data.hits[0].recipe.label);
  var recipeName = data.hits[0].recipe.label; //write variables for each item that need to be displayed
  var recipeNameEl = document.createElement("h4");
  recipeNameEl.textContent = recipeName;
  card.appendChild(recipeNameEl);
  //recipe source
  console.log("data.hits[0].recipe.source");
  console.log(data.hits[0].recipe.source);
  var source = data.hits[0].recipe.source;
  var sourceEl = document.createElement("p");
  sourceEl.textContent = source;
  card.appendChild(sourceEl);
  //recipe url - create an href
  console.log("data.hits[0].recipe.shareAs");
  console.log(data.hits[0].recipe.shareAs);
  var url = data.hits[0].recipe.shareAs;
  var urlEl = document.createElement("a");
  urlEl.innerHTML = "<a href='" + url + " target='_blank'>";
  urlEl.textContent = "Link to page";
  card.appendChild(urlEl);
  //} //!KEEP
}

var search = document.getElementById("#locate"); //! Still good
console.log("Bottom of JavaScript");

edmamFetch();