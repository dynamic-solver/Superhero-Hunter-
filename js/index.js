const form = document.getElementById("form");
const searchChar = document.getElementById("search-character");
var superHeroList = document.getElementById("superhero-list");
let container = document.getElementById("container");
let searchHero = document.getElementById("search-character").value;

// http request url
function getUrl() {
  var query = searchChar.value;

  if (!query) {
    return "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=44c52d1348c225bab37611e2bcdc0bac&hash=1ffba55964a8385cc1c2dbd614c55a77";
  } else {
    return `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${query}&apikey=44c52d1348c225bab37611e2bcdc0bac&hash=1ffba55964a8385cc1c2dbd614c55a77&ts=1`;
  }
}


form.addEventListener("keyup", function () {
  var url = getUrl();
  var xhrRequest = new XMLHttpRequest();
  xhrRequest.open("get", url, true);
  xhrRequest.send();
  xhrRequest.onload = function () {
    var data = JSON.parse(xhrRequest.responseText);
    display(data);
  };
});


function createNode(element) {
  return document.createElement(element);
}
function append(parent, element) {
  return parent.appendChild(element);
}


// function to display the results

function display(data) {
  superHeroList.innerHTML = "";
  var results = data.data.results;

  if (!results) {
    searchChar.value = "";
    window.alert("OOPS! No super hero found");
  } else {
    // iterate over nodelist
    for (let result of results) {
      var card = container.content.cloneNode(true);

      card.getElementById("name").innerHTML = "Name : " + result.name;
      card.getElementById("id").innerHTML = "Id : " + result.id;

      card.getElementById("fav").addEventListener("click", function () {
        var index = localStorage.length;
        var data = JSON.stringify(result);
        localStorage.setItem(result.id, data);
        window.alert("Added to favourite");
      });

      card.getElementById("more-info").addEventListener("click", function () {
        localStorage.setItem("id", result.id);
        window.location.assign("./about.html");
      });

      superHeroList.appendChild(card);
    }
  }
}
