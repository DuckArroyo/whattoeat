// score code needs to be pulled

var apiKey = "359d18be100f928817fd7d3a21693376";

var myHeaders = new Headers();
myHeaders.append("x-api-key", "359d18be100f928817fd7d3a21693376");

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch("https://api.documenu.com/v2/restaurant/4072702673999819", requestOptions)
  .then((response) => response.text())
  .then((result) => window.$log.trace(result))
  .catch((error) => console.error("error", error));

var getUserCategory = function (category) {
  var apiUrl =
    "https://api.documenu.com/v2/restaurants/zip_code/97403?size=20&page=1&exact=true&cuisine=mexican&top_cuisines=true?key=359d18be100f928817fd7d3a21693376";

  // make a get request to url
  fetch(
    "https://api.documenu.com/v2/restaurant/4072702673999819",
    requestOptions
  )
    .then(function (response) {
      // request was successful
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
          displayRepos(data, user);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Unable to connect to Documenu");
    });
};
