 
//  first button
 
 document.getElementById("one").addEventListener("click",change);

function change()
{
   let button = document.getElementById("one");
   if(button.style.backgroundColor==="white" )
   {
      button.style.backgroundColor="red";
   }
   else
   {
      button.style.backgroundColor= "white";
   }
   // else if(button.style.backgroundColor==="red")
   // {
   //   button.style.backgroundColor= "green";
   // }
   // else if(button.style.backgroundColor==="green")
   // {
   //   button.style.backgroundColor= "orange";
   // }
   // else if(button.style.backgroundColor==="orange")
   // {
   //   button.style.backgroundColor= "violet";
   // }
}

// second button
document.getElementById("two").addEventListener("click",twochange);
  
function twochange()
{
   let button = document.getElementById("two");
   if(button.style.backgroundColor==="white" )
   {
      button.style.backgroundColor="red";
   }
   else
   {
      button.style.backgroundColor= "white";
   }
}

// third button
document.getElementById("three").addEventListener("click",threechange);
  
function threechange()
{
   let button = document.getElementById("three");
   if(button.style.backgroundColor==="white" )
   {
      button.style.backgroundColor="red";
   }
   else
   {
      button.style.backgroundColor= "white";
   }
}

// forth button
document.getElementById("four").addEventListener("click",fourchange);
function fourchange()
{
   let button = document.getElementById("four");
   if(button.style.backgroundColor==="white" )
   {
      button.style.backgroundColor="red";
   }
   else
   {
      button.style.backgroundColor= "white";
   }
}