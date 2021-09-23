//Score
var score = 10;
var scoreButtonEl = document.querySelector("#locate");
var scoreEl = document.querySelector("#scoreSpan");

var user = document.querySelector("#aligned-foo");
var category = document.querySelector("#cuisineType");
var state = document.querySelector("#state");
var responseContainerEl = document.querySelector("#response-container");
var edamamResponseEl = document.querySelector("#edamam-response");
var documenuResponseEl = document.querySelector("#documenu-response");

scoreButtonEl.addEventListener("click", function () {
  event.preventDefault();
  console.log("Search button pressed");
  if (score > 0) {
    score--;
    scoreEl.textContent = score;
  }
});

//Documenu fetch
function getDocumenu() {
  fetch(
    "https://api.documenu.com/v2/restaurants/state/" +
      state +
      "?cuisine=" +
      category +
      "&key=359d18be100f928817fd7d3a21693376"
  )
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      if (data == 200) {
        console.log("Documenu Success");
        // buildDocumenuCard(data);
      } else {
        alert("document fetch Error");
      }
    });
}

//getDocumenu(); //remove when buttons are ready

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
  var title = data.hits[0].recipe;
  console.log("data.hits[0].recipe.label");
  console.log(data.hits[0].recipe.label);
  console.log("data.hits[0].recipe.source");
  console.log(data.hits[0].recipe.source);
  console.log("data.hits[0].recipe.shareAs");
  console.log(data.hits[0].recipe.shareAs);
  console.log("data.hits[0].recipe.source");
  console.log(data.hits[0].recipe.source);

  var htmlTitle = title;
  $("#edamam").append(htmlTitle);

  //!This loop works. We will use it to loop through the responses
  // for (i = 0; i <= history.length; i++) {
  //   console.log("0");
  //   console.log(data.hits[0].recipe);
  // }
  //!KEEP
}

var search = document.getElementById("#locate"); //! Still good
console.log("Bottom of JavaScript");
