const heading = document.getElementById("heading");
var power = document.getElementById("power");
const bio = document.getElementById("bio");
var resultId = localStorage.getItem("id");

fetch();
// getting all the data of the superhero
function fetch() {
  var xhrRequest = new XMLHttpRequest();

  var url = `https://gateway.marvel.com/v1/public/characters/${resultId}?apikey=44c52d1348c225bab37611e2bcdc0bac&hash=1ffba55964a8385cc1c2dbd614c55a77&ts=1`;
  xhrRequest.open("get", url, true);
  xhrRequest.send();

  xhrRequest.onload = function () {
    var response = JSON.parse(xhrRequest.response);

    heading.innerText = " " + response.data.results[0].name;

    // creating paragrapg which contain feaure of super hero
    var p = document.createElement("p");
    p.innerText = "Description : " + response.data.results[0].description;
    power.appendChild(p);

    var p = document.createElement("p");
    p.innerText = "Status : " + response.status;
    power.appendChild(p);

    var p = document.createElement("p");
    p.innerText = "Modified : " + response.data.results[0].modified;
    power.appendChild(p);

    var p = document.createElement("p");
    p.innerText =
      "Series Available : " + response.data.results[0].series.available;
    power.appendChild(p);

    var p = document.createElement("p");
    p.innerText =
      "Stories Available : " + response.data.results[0].stories.available;
    power.appendChild(p);

    var p = document.createElement("p");
    p.innerText = "Count : " + response.data.count;
    bio.appendChild(p);

    var p = document.createElement("p");
    p.innerText = "Total : " + response.data.total;
    bio.appendChild(p);

    var p = document.createElement("p");
    p.innerText = "Limit : " + response.data.limit;
    bio.appendChild(p);

    var p = document.createElement("p");
    p.innerText = "Offset : " + response.data.offset;
    bio.appendChild(p);

    var p = document.createElement("p");
    p.innerText = p.innerText = "Code : " + response.code;
    bio.appendChild(p);
  };
}
