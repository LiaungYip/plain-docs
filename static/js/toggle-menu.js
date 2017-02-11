// Original (204 bytes)
var b = document.querySelector("#menu-button");
var m = document.querySelector("#menu-inner");
b.addEventListener("click", function(event) {
  if (m.className == "hide-when-small") {
    m.className = "";
    b.innerHTML = "Hide Menu";
  } else {
    m.className = "hide-when-small";
    b.innerHTML = "Show Menu";
  }
});

// Minified (174 bytes)
var a=document.querySelector("#menu-button"),b=document.querySelector("#menu-inner");a.addEventListener("click",function(){"hide-when-small"==b.className?(b.className="",a.innerHTML="Hide Menu"):(b.className="hide-when-small",a.innerHTML="Show Menu")});