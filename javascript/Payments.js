let removeRow = (oButton) => { /// remove a row product 
             
           
    let tableProduct = document.getElementById('tableProduct');
    tableProduct.deleteRow(oButton.parentNode.parentNode.parentNode.rowIndex); // buttton -> td -> tr;
   
}

// let removeRow = (oButton) => {
//     let text = "Click OK if you are sure of your decision to delete this item";
//     if (confirm(text) == true) {
//       let empTab = document.getElementById('tableProduct');
//       empTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // buttton -> td -> tr;
//     } else {
//       text = "You canceled!";
//     }

//   }

// ffofr quantite fffjfjfjjfjfjfj


let max=20; // for the max input 
var input = document.getElementById("number");
input.setAttribute("max",max); // set a new value; 



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



///////////////swal 
// let form = document.getElementById('formpay');

// function myFunctionalert() {
//   if (form.checkValidity()) {
   
   
//     swal({
//       title: "You have successfully added this item",
    
//       icon: "success",
//       buttons: {
//       cancel: "CONTINUE SHOPPING",
     
//       cart:  "Order Now",
  
//     },cartButtonColor: "black",
  
      
  
      
      
//   }).then((value) => {
//     switch (value) {
   
//    case "cart":
//    window.location.href = `cart.html` ;}
    
  
  
//   });
//   }
// }

// 
// let submitCart = (oButton) => {
//     let text = "Click OK if you are sure of your decision to delete this item";
//     if (confirm(text) == true) {
//      // buttton -> td -> tr;
//     } else {
//       text = "You canceled!";
//     }

//   }