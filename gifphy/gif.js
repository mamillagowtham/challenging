let APIKEY = "Hfgo3E146CP6ua2QXI6ogTXERgU1iUFF";

//we can also write as
// async function main()
// {

// }

let main = async () => {

    try{
        let response = await fetch(
            `https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}`
          );
          let data = await response.json();
        
          console.log(data.data);
          append(data.data)
    }
    catch(error){
        console.log(error)
    }
};

let append = (data) => {
  let gifContent = document.getElementById("gif");
  let strikerContent = document.getElementById("striker");
  let main = document.getElementById("main");

  gifContent.innerHTML = "";
  strikerContent.innerHTML = "";


data.forEach((element)=> {

    let image = document.createElement("img");
    image.src= element.images.downsized.url;

    image.addEventListener("click",()=>
    {
        detail_gif(element.id);
    })
     
    main.append(image)
});


};

main()


const detail_gif = (id)=>
{
    localStorage.setItem("details",JSON.stringify(id));

    window.location.href="/git_details.html"
}