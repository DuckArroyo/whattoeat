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
function getEdamam() {
  var stackeduserentry = document.querySelector("#stacked-userentry").value;

  fetch(
    "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?q=" +
      stackeduserentry +
      "&api_key" +
      "d5705ed4f7msh48cd378e1f7bdcfp184776jsnd69703bb9e74"
  )
    .then((response) => response.json())
    .then(data);
  console.log(data);
}
      .then(function (response) {
      console.log(response.data[0]);

        .catch(err => {console.error(err);})

        var containerEl = document.querySelector("#box"); //! edamam or edamam response in html

        containerEl.innerHTML = null;
        var imgEl = document.createElement("img");
        imgEl.setAttribute("src");
        containerEl.appendChild(imgEl);
      });
      }

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
