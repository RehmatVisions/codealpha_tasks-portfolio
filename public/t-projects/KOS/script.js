// let costume=document.querySelector(".costume");
// console.log(costume);
// costume.addEventListener("scroll",()=>{
//     costume.style.transform="scale(3,3)";
// })


// window.addEventListener("scroll", function () {
//     let img = document.querySelector(".costume");
//     let moveRight = window.scrollY / 7; // Scroll value ka division taake smooth move ho
//     img.style.transform = `translateX(${moveRight}px)`;
    
//   });
 
let card = document.querySelector(".card-heading");
let text = document.getElementById("text");

card-heading.addEventListener("mouseover", function() {
if(text.style.display==="none"){
    text.style.display="block";
}
else{
    text.style.display="none";
}
});
 
