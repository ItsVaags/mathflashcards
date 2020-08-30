var myStylesheet = document.querySelector('#styles');
myStylesheet.onerror = function() {
  alert("An error occurred loading the stylesheet!");
}