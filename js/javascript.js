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
    .then((response) => response.json())
    .then(data);
  console.log(data);

  // .then(function (response) {
  //   console.log(response.data[0]);
  // .then(
  //  function(response){
  //    return response.json()
  //  }
  // ).then(
  //   function(data){
  //     console.log(data)
  //   }
  // )
  // .then(response => {
  // 	return response.json();
  // 	console.log(response.data[0]);
  // })
}
//.then(function (response) {
//console.log(response.data[0]);

//   .catch(err => {console.error(err);})

//   var containerEl = document.querySelector("#box"); //! remove the 1

//   containerEl.innerHTML = null;
//   var imgEl = document.createElement("img");
//   imgEl.setAttribute("src");
//   containerEl.appendChild(imgEl);
// });
// }
containerEl.innerHTML = null;
var imgEl = document.createElement("img");
imgEl.setAttribute("src");
containerEl.appendChild(imgEl);
var btn = document.getElementById("#locate"); //! Add the # for id.

//var el = document.getElementById("pure-button pure-button-primary");

// function firstTest() {
//   confirm("Search for meals");
// }

// btn.addEventListener("click", firstTest);
function firstfunction() {
  return fetch(
    "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?q="
  )
    .then((response) => response.json())
    .then((json) => json.results);
}
btn.addEventListener("click", firstfunction);

//document.getElementById("locate");
//el.addEventListener("click", function() {
//myFunction();
//})

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

// var apiKey = "359d18be100f928817fd7d3a21693376";

// var myHeaders = new Headers();
// myHeaders.append("x-api-key", "359d18be100f928817fd7d3a21693376");

// var requestOptions = {
//   method: "GET",
//   headers: myHeaders,
//   redirect: "follow",
// };

// fetch("https://api.documenu.com/v2/restaurant/4072702673999819", requestOptions)
//   .then((response) => response.text())
//   .then((result) => window.$log.trace(result))
//   .catch((error) => console.error("error", error));

// var getUserCategory = function (category) {
//   var apiUrl =
//     "https://api.documenu.com/v2/restaurants/zip_code/97403?size=20&page=1&exact=true&cuisine=mexican&top_cuisines=true?key=359d18be100f928817fd7d3a21693376";

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
