var centerWidth = document.getElementById("afterWindow").getBoundingClientRect().width;

let width = ((window.innerWidth - centerWidth) / 2);
 
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

console.log(isSafari)
if (isSafari == true){
  document.getElementById("windowPath").setAttribute("d", "M575 0H0V1117H575V0ZM288 224C145.511 224 30 339.511 30 482V653C30 795.489 145.511 911 288 911C430.489 911 546 795.489 546 653V482C546 339.511 430.489 224 288 224Z")
}


document.getElementById("left").style.width = width + "px";
document.getElementById("right").style.width = width + "px";

s

// Get the center and left elements
const centerEl = document.getElementById("center");
const leftEl = document.getElementById("left");

// Function to calculate the left width
function calculateLeftWidth() {
  // Get the center width 
  const centerWidth = document.getElementById("afterWindow").getBoundingClientRect().width;
  let width = ((window.innerWidth - centerWidth) / 2);
  document.getElementById("left").style.width = width + "px";
  document.getElementById("right").style.width = width + "px";

}

// Call the function initially 
calculateLeftWidth();

// Add resize listener to recalculate on resize
window.addEventListener("resize", calculateLeftWidth);



// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

initialWindow = document.getElementById("window");
var s = Snap(initialWindow);
console.log(s)


var picture = document.getElementById("image"); 

// document.addEventListener("scroll", function() { 
//   var scroll = window.scrollY; 
//   console.log(scroll)
//   // picture.style.height = 100 + scroll + "px"; 
// });


const demoDiv = document.querySelector("image");

console.log(picture)


document.addEventListener("keydown", function(event) {
 event.preventDefault()
 // console.log(event)
 if ((event.metaKey && event.keyCode == 186) || (event.metaKey && event.shiftKey && event.keyCode == 187)) {
  // Command + Shift + + pressed 

  let scale = parseFloat(window.getComputedStyle(document.getElementById("mydiv")).transform.match(/^matrix\(([^,]*)/)[1]); 
  // console.log(scale)
  scale += 0.1;

  document.getElementById("mydiv").style.transform = "scale(" + scale + ")";

  // demoDiv.setAttribute('style', 'transform: scale('+0.01+');'); 
  console.log("+") 
   } 
   if (event.metaKey && event.keyCode == 189) {
    // Command + Shift + - pressed 
    // let scale = parseFloat(window.getComputedStyle(document.getElementById("picture")).transform.match(/^matrix\(([^,]*)/)[1]);
    // scale -= 0.1; 
    // document.getElementById("picture").style.transform = "scale(" + scale + ")"; 
    console.log("-")

    let scale = parseFloat(window.getComputedStyle(document.getElementById("mydiv")).transform.match(/^matrix\(([^,]*)/)[1]); 
    // console.log(scale)
    scale -= 0.1;

    document.getElementById("mydiv").style.transform = "scale(" + scale + ")";

    // demoDiv.setAttribute('style', 'transform: scale('+0.01+');'); 

  } });