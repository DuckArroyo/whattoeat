function myFunction(){

var stackeduserentry = document.querySelector('#stacked-userentry').value

// fetch("https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "edamam-food-and-grocery-database.p.rapidapi.com",
// 		"x-rapidapi-key": "d5705ed4f7msh48cd378e1f7bdcfp184776jsnd69703bb9e74"
// 	}
// })

fetch(
	'https://edamam-food-and-grocery-database.p.rapidapi.com/parser?q=' + 
	stackeduserentry + '&api_key' + 'd5705ed4f7msh48cd378e1f7bdcfp184776jsnd69703bb9e74'
 )

// .then(response => {
// 	return response.json();
// 	console.log(response.data[0]);
// })

.then(function(response) {
	console.log(response.data[0]);

// .catch(err => {
// 	console.error(err);
// })

var containerEl = document.querySelector('#box1')

containerEl.innerHTML = null;
var imgEl = document.createElement('img');
imgEl.setAttribute('src')
containerEl.appendChild(imgEl);
})
}