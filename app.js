// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var edit = document.getElementsByClassName("edit");

var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    console.log(div)
    div.style.display = "none";
  }
}


// Create a new list item when clicking on the "Add" button
function newElement() {

  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);


  if (inputValue === '') {
    alert("You must write something!");
  } 
  
  else {
    document.getElementById("myUL").appendChild(li);
  }

  document.getElementById("myInput").value = "";
  

  var span1 = document.createElement("SPAN");
  var txt1 = document.createTextNode("\u270F");

  span1.className = "edit";
  console.log(span1)
  span1.appendChild(txt1);
  li.appendChild(span1);


  for (i = 0; i < edit.length; i++) {
    edit[i].onclick = function() {
      var value = this.parentNode.firstChild.nodeValue;
      var editValue = prompt ("Edit", value)
      this.parentNode.firstChild.nodeValue = editValue;
    }
  }


  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);


  for (i = 0; i < close.length; i++) {
    close[i].onclick =   function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


