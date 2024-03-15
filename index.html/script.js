var Istatus=document.querySelector("h2");

 var ButtonContaint= document.querySelector("#add");

var addFriendBtn= document.querySelector("#add");
var check=0;

addFriendBtn.addEventListener("click", ()=>{
if(check===0){
  Istatus.innerHTML="Friend ";
  Istatus.style.color="green";
  ButtonContaint.style.backgroundColor="gray";
  ButtonContaint.innerHTML="Unfriend"
  check=1;
}

else{

  Istatus.innerHTML="Stranger ";
  Istatus.style.color="rgb(186, 102, 50)";
  ButtonContaint.style.backgroundColor="rgb(250, 77, 210)";
  ButtonContaint.innerHTML="Add Friend";
  check =0;
  
}
})
