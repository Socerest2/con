var con;

function updateCon() {
  con = document.getElementById("inputBox").value;
  var url = "https://www.123teachme.com/spanish_verb_conjugation/" + con;
  
  // Create a parser using the createElement() method
  var parser = document.createElement("a");
  parser.href = url;

  fetch(url)
    .then(response => response.text())
    .then(htmlContent => {
      var parser = new DOMParser();
      var htmlDoc = parser.parseFromString(htmlContent, "text/html");

      // Find a specific element in the HTML
      var desiredElement = htmlDoc.getElementById("some-element-id");
      console.log(desiredElement.innerHTML);
    })
    .catch(error => console.error(error));
}
