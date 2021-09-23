//Score
var score = 10;
var scoreButtonEl = document.querySelector("#locate"); //!Check in on submit button id.
var scoreEl = document.querySelector("#scoreSpan");

scoreButtonEl.addEventListener("click", function () {
  event.preventDefault();
  if (score > 0) {
    score--;
    scoreEl.textContent = score;
  }
});

//Documenu fetch
function getRestaurant(category, state) {
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
      buildcard(data);
    });
}

function buildcard(data) {
  console.log(data);
  var title = data.data[0].restaurant_name;
  var htmlTitle = $("h1").text(title);
  $("#documenu").append(htmlTitle);
  //! Bryan write your code here
}

//getRestaurant(Restaurant, State); //remove later

//Edamam fetch
function edmamFetch(category, state) {
  fetch(
    "https://edamam-food-and-grocery-database.p.rapidapi.com/parser" +
      state +
      "?cuisine=" +
      category +
      "&api_key" +
      "d5705ed4f7msh48cd378e1f7bdcfp184776jsnd69703bb9e74"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      buildcard(data);
    });
  //numOfCards++;
  // var rowNum = Math.ceil(numOfCards / 3);

  var newimage = $("<img>")
    .attr("src", response.articles[0].urlToImage)
    .addClass("imgFit");

  var newDiv = $("<div>").addClass("edamam");
  newDiv.append(newimage);

  var header = $("<h2>")
    .addClass("post-header")
    .text(response.articles[0].title);

  var summary = $("<p>").text(response.articles[0].description);
  var categoryTitle = $("<span>")
    .addClass("category")
    .text(response.articles[0].source.name);

  var linktosite = $("<a>")
    .addClass("btn btn-primary siteLink")
    .attr("href", response.articles[0].url)
    .attr("target", "_blank")
    .text("go to article")
    .attr("id", response.articles[0].title);

  var newsContentDiv = $("<div>").addClass("news-content");
  newsContentDiv
    .append(categoryTitle)
    .append(header)
    .append(summary)
    .append(linktosite);

  var cardDiv = $("<div>").addClass("cards");
  cardDiv.append(newDiv).append(newsContentDiv);

  var responsiveDiv = $("<div>").addClass("col-sm-4");
  responsiveDiv.append(cardDiv);
  $(".cardRow" + rowNum).append(responsiveDiv);

  var btn = document.getElementById("#locate"); //! Still good
}

edmamFetch();
