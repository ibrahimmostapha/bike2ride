

function getinnerText(ref) {
  let text ='<div style="height: 100%;">' +
    '<object type="text/html" data="'+ref+'" width="100%" height="100%"  style="overflow:auto;border:none"> ' +
    '</object>' +
    ' </div> ';
  


  document.getElementById("display").innerHTML = text;
}

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_textcontent_innerhtml_innertext 


///////////////////////
// Add active class to the current button (highlight it)

var header = document.getElementById("myActiveDiv");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_active_element 

// https://www.geckoboard.com/best-practice/dashboard-design/#keep-evolving-your-dashboards







