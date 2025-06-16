//  let container=document.querySelector(".container");
//  let inputs=document.querySelector(".inputs");
//  let text=document.querySelector(".text");
//  let inp=document.querySelector("#inp");
 
//  function add(){
//     if(inp.value===""){
//       alert("please Enter Task");
//     }else{
//       let newele=document.createElement("ul");
//       // newele.innerHTML=`${inp.value}<i class="fa-solid fa-delete-left"></i>`;
//       newele.innerHTML = inp.value + '<i class="fa-solid fa-delete-left"></i>';

//       text.appendChild(newele);
//       inp.value="";
//       newele.querySelector("i").addEventListener("click",()=>{
//          newele.remove()
//       })
      
//     }
//  }

// let inp=document.querySelector("#inp");
// let text=document.querySelector(".text");
//  function add(){
//   if(inp.value===""){
//     alert("please enter task");

//   }
//   else{
//        let newele=document.createElement("ul");
//        newele.innerHTML=inp.value +'<i class="fa-solid fa-delete-left"></i>';
//        text.appendChild(newele);
//        inp.value="";

//        newele.querySelector("i").addEventListener("click",()=>{
//         newele.remove();
//        })
//   }
//  }
 
// let inp=document.querySelector("#inp");
// let text=document.querySelector(".text");
// function add(){
//   if(inp.value===""){
//     alert("please enter task");
//   }
//   else{
//    let newele=document.createElement("ul");
//     newele.innerHTML=inp.value +'<i class="fa-solid fa-delete-left"></i>';
//     text.appendChild(newele);
//     inp.value="";

//     newele.querySelector("i").addEventListener("click",()=>{
//        newele.remove();
//     })
    
//   }
// }

let inp=document.querySelector("#inp");
let text=document.querySelector(".text");
function add(){
  if(inp.value===""){
    alert("enter any task")
  }else{
    let newelement=document.createElement("ul");
    newelement.innerHTML=inp.value +'<i class="fa-solid fa-delete-left"></i>';
    text.appendChild(newelement);
    inp.value="";
    
    newelement.querySelector("i").addEventListener("click",()=>{
      newelement.remove();
    })


  }
}