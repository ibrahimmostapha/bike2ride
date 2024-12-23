
let max=1; // for the max input 
var input = document.getElementById("number");
input.setAttribute("max",max); // set a new value; 
document.getElementById("subm").disabled = true;
document.getElementById("number").disabled = true;

// end default valu 



/////////////for quantite +   -
function incrementValue()
{
    var value = parseInt(document.getElementById('number').value);
    value = isNaN(value) ? 0 : value;
    if(value<max){
        value++;
            document.getElementById('number').value = value;
    }
}
function decrementValue()
{
    var value = parseInt(document.getElementById('number').value);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.getElementById('number').value = value;
    }

}

////////////////////////////////////////////////////////// for button style and backround
/* Add the active class to the button passed in */
function setThisButtonActive(button) {
    button.classList.add("portfolio-buttons-active");
  }
  
  /* select all active buttons, and remove the active class from them */
  function resetActiveButton() {
    document.querySelectorAll(".portfolio-buttons-active").forEach((button) => {
      button.classList.remove("portfolio-buttons-active");
    });
  }
  
  document.querySelectorAll(".portfolio-buttons").forEach((button) => {
    button.addEventListener("click", function() {
      resetActiveButton();
      setThisButtonActive(button);
    });
  });
  /* Style the buttons */


//////////////////////////////for size  max and quantite max 


const size = {S:20, M:30, L:0} ; //for size of product 





// if size small /////////////////////////////////////////////////////////

  function fnS(){
    document.getElementById("inp").innerHTML =" <input type='text' name='size' value='S' hidden>";
     max = size.S;
     document.getElementById("subm").disabled = false;
      document.getElementById("number").disabled = false;
      
      
     if(max<1) {// is quantite is 0 
      document.getElementById("qn").innerHTML = "<span style='font-size: 12px;'> This size is no longer available </span>";
      document.getElementById("subm").disabled = true;
      document.getElementById("number").disabled = true;
      document.getElementById("subm").style.background = "#9ba7c0";

     } else{ 
      document.getElementById("qn").innerHTML = max +" pieces";
      document.getElementById("subm").style.background = "rgb(59, 117, 184)";


     }

     var input = document.getElementById("number");
input.setAttribute("max",max); // set a new value;
    
    

  }



//////if size is mediam //////////////////////////////////////////////////////


  function fnM(){
    document.getElementById("inp").innerHTML =" <input type='text' name='size' value='M'hidden>";
    max = size.M;
    document.getElementById("subm").disabled = false;
    document.getElementById("number").disabled = false;


    if(max<1) { // is quantite is 0 
      document.getElementById("qn").innerHTML = "<span style='font-size: 12px;'> This size is no longer available </span>";
      document.getElementById("subm").disabled = true;
      document.getElementById("number").disabled = true;
      document.getElementById("subm").style.background = "#9ba7c0";

     } else{
      document.getElementById("qn").innerHTML = max+" pieces" ;
      document.getElementById("subm").style.background = "rgb(59, 117, 184)";

     }
     var input = document.getElementById("number");
input.setAttribute("max",max); // set a new value;
   

  }




// if size is large //////////////////////////////////////////////////////////

  function fnL(){
    document.getElementById("inp").innerHTML =" <input type='text' name='size' value='L'hidden>";
    max = size.L;
    document.getElementById("subm").disabled = false;
    document.getElementById("number").disabled = false;


    if(max<1) {  // is quantite is 0 // is quantite is 0 
      document.getElementById("qn").innerHTML = "<span style='font-size: 12px;'> This size is no longer available </span>";
      document.getElementById("subm").disabled = true;
      document.getElementById("number").disabled = true;
      document.getElementById("subm").style.background = "#9ba7c0";

     } else{
      document.getElementById("qn").innerHTML = max+" pieces" ;
      document.getElementById("subm").style.background = "rgb(59, 117, 184)";

     }
     var input = document.getElementById("number");
input.setAttribute("max",max); // set a new value;

   }
////////////////////////////rolad a page dont 
// $(document).ready(function() {
//   $(document).on('submit', '#cart', function() {
//     // do your things
//     return false;
//    });
// });alkert by exemmple 


var form = document.getElementById('cart');

function myFunctionalert() {
  if (form.checkValidity()) {
   
   
    swal({
      title: "You have successfully added this item",
    
      icon: "success",
      buttons: {
      cancel: "CONTINUE SHOPPING",
     
      cart:  "Order Now",
  
    },cartButtonColor: "black",
  
      
  
      
      
  }).then((value) => {
    switch (value) {
   
   case "cart":
   window.location.href = `cart.html` ;}
    
  
  
  });
  }
}



// function ratlert() {
 
   
   
//   Swal.fire({
//     title: 'Login Form',
//     html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
//     <input type="password" id="password" class="swal2-input" placeholder="Password">`,
//     confirmButtonText: 'Sign in',
//     focusConfirm: false,
//     preConfirm: () => {
//       const login = Swal.getPopup().querySelector('#login').value
//       const password = Swal.getPopup().querySelector('#password').value
//       if (!login || !password) {
//         Swal.showValidationMessage(`Please enter login and password`)
//       }
//       return { login: login, password: password }
//     }
//   }).then((result) => {
//     Swal.fire(`
//       Login: ${result.value.login}
//       Password: ${result.value.password}
//     `.trim())
//   }) ;
  
//   }






/////////////////test

// $(document).on('click', '#subm', function(e) {
//   e.preventDefault();
//   swal({
//       title: 'Confirm',
//       input: 'checkbox',
//       inputValue: 0,
//       inputPlaceholder: ' I agree with the Terms',
//       confirmButtonText: 'Continue',
//       inputValidator: function (result) {
//           return new Promise(function (resolve, reject) {
//               if (result) {
//                   resolve();
//               } else {
//                   reject('You need to agree with the Terms');
//               }
//           })
//       }
//   }).then(function (result) {
//       $('#cart').submit();
//   });
// });







