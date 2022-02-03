/*
  toggle which answer is open, adjust illustration
  x = previous open answer
  y = new answer
  x=y, new answer already open, close it
 */
var x = 0;
function changeColor(y) {
  //close previous answer:
  if (0 < x && x < 6) {
    var ix = document.getElementById("i" + x);
    var px = document.getElementById("p" + x);
    var hx = document.getElementById("hq" + x);
    px.style.maxHeight = "0";
    px.style.color = "transparent";
    ix.setAttribute("style", "transform: rotate(" + 0 + "deg)");
    hx.style.color = "var(--Dark-grayish-blue)";
    hx.style.fontSize = "12px";
  }
  //open new answer if its not the old one, otherwise close the old one. Adjust box.
  if (y != x) {
    var iy = document.getElementById("i" + y);
    var py = document.getElementById("p" + y);
    var hy = document.getElementById("hq" + y);
    iy.setAttribute("style", "transform: rotate(" + 180 + "deg)");
    hy.style.color = "var(--Very-dark-grayish-blue)";

    hy.style.fontSize = "13px";

    py.style.maxHeight = "100px";
    py.style.color = "var(--Dark-grayish-blue)";
    x = y;
    desbox.setAttribute("style", "transform: translateX(" + -20 + "px)");
  } else {
    desbox.setAttribute("style", "transform: translateX(" + 0 + "px)");
    x = 0;
  }
}
