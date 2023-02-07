function fetchVerbs() {
  var verb = document.getElementById("verbInput").value;
  var url = "https://www.123teachme.com/spanish_verb_conjugation/" + verb;
  
  fetch(url)
    .then(response => response.text())
    .then(htmlContent => {
      var parser = new DOMParser();
      var htmlDoc = parser.parseFromString(htmlContent, "text/html");

      var subjunctiveTable = htmlDoc.querySelector("#conj-menu-subjunctive td.present");
      if (!subjunctiveTable) {
        alert("Verb not found or subjunctive conjugations not available.");
        return;
      }
      
      var conjugations = subjunctiveTable.nextSibling.innerText.split(", ");
      var verbList = document.getElementById("verbList");
      verbList.innerHTML = "";
      conjugations.forEach(conjugation => {
        var listItem = document.createElement("li");
        listItem.innerText = conjugation;
        verbList.appendChild(listItem);
      });
    })
    .catch(error => console.error(error));
}
