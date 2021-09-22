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

var btn = document.getElementById("#locate"); //! Still good