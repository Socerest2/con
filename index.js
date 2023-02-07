var con;

function updateCon() {
  con = document.getElementById("inputBox").value;
  var url = "https://www.123teachme.com/spanish_verb_conjugation/" + con;
  
  // Create a parser using the createElement() method
  var parser = document.createElement("a");
  parser.href = url;
}
