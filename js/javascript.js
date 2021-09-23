<<<<<<< HEAD
function myFunction() {
  var stackeduserentry = document.querySelector("#stacked-userentry").value;

  // fetch("https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple", {
  // 	"method": "GET",
  // 	"headers": {
  // 		"x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
  // 		"x-rapidapi-key": "d5705ed4f7msh48cd378e1f7bdcfp184776jsnd69703bb9e74"
  // 	}
  // })

  fetch(
    "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?q=" +
      stackeduserentry +
      "&api_key" +
      "d5705ed4f7msh48cd378e1f7bdcfp184776jsnd69703bb9e74"
  )
  .then(
   function(response){
     return respomse.json()
   }
  ).then(
    function(data){
      console.log(data)
    }
  )
    // .then(response => {
    // 	return response.json();
    // 	console.log(response.data[0]);
    // })




}
    //.then(function (response) {
      //console.log(response.data[0]);

      // .catch(err => {
      // 	console.error(err);
      // })

      var containerEl = document.querySelector("#box1");

      containerEl.innerHTML = null;
      var imgEl = document.createElement("img");
      imgEl.setAttribute("img");
      containerEl.appendChild(imgEl);
    ;


var locateBtn = document.getElementById("#locate");

//var el = document.getElementById("pure-button pure-button-primary");

function firstfunction() {
  return fetch("https://edamam-food-and-grocery-database.p.rapidapi.com/parser?q=")
.then(response => response.json())
.then(json => (json.results))
}
locateBtn.addEventListener("click", firstfunction);
console.log(json.results)
function secondfunction () {
  return fetch()
}

//document.getElementById("locate");
//el.addEventListener("click", function() {
//myFunction();
//})

=======
//Score
>>>>>>> Develop
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

getRestaurant(Restaurant, State); //remove later

//Edamam fetch
function edmamFetch (category, state){
  fetch("https://edamam-food-and-grocery-database.p.rapidapi.com/parser"
  +state+"?cuisine="+category+"&api_key" +
  "d5705ed4f7msh48cd378e1f7bdcfp184776jsnd69703bb9e74")
  .then(
   function(response){
     return response.json()
   }
 ).then(
   function(data){
     console.log(data)
     buildcard(data)
   }
 )
 numOfCards++;
 var rowNum = Math.ceil(numOfCards / 3);

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

<<<<<<< Updated upstream
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

<<<<<<< HEAD
<<<<<<< HEAD
//   // make a get request to url
//   fetch(
//     "https://api.documenu.com/v2/restaurant/4072702673999819",
//     requestOptions
//   )
//     .then(function (response) {
//       // request was successful
//       if (response.ok) {
//         console.log(response);
//         response.json().then(function (data) {
//           console.log(data);
//           displayRepos(data, user);
//         });
//       } else {
//         alert("Error: " + response.statusText);
//       }
//     })
//     .catch(function (error) {
//       alert("Unable to connect to Documenu");
//     });
// };

var categoregy = $("#cuisinetype") .val;

 
=======
var btn = document.getElementById("#locate"); //! Still good
>>>>>>> Develop
=======
            var responsiveDiv = $("<div>").addClass("col-sm-4");
            responsiveDiv.append(cardDiv);
            $(".cardRow" + rowNum).append(responsiveDiv);
  
var btn = document.getElementById("#locate"); //! Still good
}
>>>>>>> Develop
=======
var btn = document.getElementById("#locate"); //! Still good

var category = $("#cuisinetype"()).val;

var state = $("#stcked-state"()).val;
>>>>>>> Stashed changes
