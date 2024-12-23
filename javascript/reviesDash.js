let btn1 =document.querySelector('#btbDivh');
let dv1 =document.querySelector('.divvA');


btn1.addEventListener('click', () =>{
  if(dv1.style.display == 'none'){
    dv1.style.display = 'block';
    dv1.style.display = 'block';
  }else{
    dv1.style.display = 'none';
  }
});


let ADMinButoonReplay = document.querySelector('#AdminrepleyA');
let AdminTExtA = document.querySelector('#AdminTextReley');
let userPragraphA = document.querySelector('#userPragraphA');
let AdinTextArea = document.querySelector('#AdminTextReley');


ADMinButoonReplay.addEventListener('click', () =>{
  // console.log(AdminTExtA.value);

if(AdinTextArea.value != ""){
  userPragraphA.insertAdjacentHTML("afterend",
    `<div><h3 class="titleAdminClassName">Admin Replay</h3><p class="RtextNormalStyle">${AdminTExtA.value}</p></div>`
);
btn1.innerText = "Done";
btn1.style.backgroundColor = "green";
btn1.style.pointerEvents = "none";
dv1.style.display = 'none';
}
else{
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
  })
  alert("You clicked the coffee cup!");
}
}

)







