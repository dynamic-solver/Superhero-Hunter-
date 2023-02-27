var container = document.getElementById("container");

for (let i = 0; i < localStorage.length; i++) {
  if (localStorage.key(i) == "id") {
    continue;
  }
  let temp = JSON.parse(localStorage.getItem(localStorage.key(i)));

  var card = container.content.cloneNode(true);

  //fav hero addition
  card.getElementById("name").innerHTML = "Name : " + temp.name;
  card.getElementById("id").innerHTML = "Id : " + temp.id;

  card.getElementById("more-info").addEventListener("click", function () {
    localStorage.setItem("id", temp.id);
    window.location.assign("./about.html");
  });

  //Remove from fav list & local storage also
  card.getElementById("fav").addEventListener("click", function () {
    card.innerHTML = null;
    localStorage.removeItem(localStorage.key(i));
    window.location.assign("./favourites.html");
    window.alert("Removing from Favourite");
  });

  // appending to the list
  document.getElementById("superhero-list").appendChild(card);
}
