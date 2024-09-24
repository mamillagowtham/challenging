let display = document.getElementById("display")

let keys = document.querySelectorAll("#keyboard > div");
let bag = "";

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener("click", calculator);
}

function calculator() {
  let trigger = event.target.innerText;

  if (trigger == "AC")
    {
    bag = "";
    display.innerText = bag;
    } 
  else if (trigger == "=")
    {
      display.innerText =eval(bag);
    } 
    else
   {
      bag = bag + trigger;
      display.innerText = bag;
   }
 }