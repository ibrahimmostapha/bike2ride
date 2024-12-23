// function myrequired() {
//     // Get the value of the input field with id="mem"
//     let x = document.getElementById("meme").value;
  
  
//     if (x=="") {
//      document.forms["myForm"]["meme"].placeholder="required information!!!";
//       document.getElementById("remq").style.display='inline-block' ;
     
    
     
//     }
//   }


// function readURL(input) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();

//         reader.onload = function (e) {
//             $('#blah')
//                 .attr('src', e.target.result);
//         };

//         reader.readAsDataURL(input.files[0]);
//     }
// }

////////////////////////////////////////////////////////////////////////////////////
// var form = document.getElementById('myform');

// function myFunctionalert() {
//   if (form.checkValidity()) {
   
   
//     swal({
//       title: "You have successfully added this Product into the data ",
    
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
 
function aletsucc() {
    alert("This item is aded is success");
  }
  function submitForm(form) {
    swal({
  title: "Are you sure that the information/product you want to enter into the data is correct?",

  
  buttons: {
  cancel: "No, I have to make sure",
 
  yes:  "Yes, add this info in data",

}

  

  
  
})
    .then(function (isOkay) {
        if (isOkay) {
            form.submit();
        }
    });
    return false;
}


/////////////////////////////////////////////for remove itemm /////////////////////////////////

//search itrem
// var $rows = $("tr");

// $("#search").keyup(function () {
//   var val = $.trim(this.value);
//   if (val === "")
//     $rows.show();
//   else {
//     $rows.hide();
//     $rows.has("td:contains(" + val + ")").show();
//   }
// });

// end search itrem

// remove search itrem

// let removeRow = (oButton) => {
//   let text = "Click OK if you are sure of your decision to delete this item";
// if (confirm(text) == true) {
// let empTab = document.getElementById('empTable');
//   empTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // buttton -> td -> tr;
// } else {
// text = "You canceled!";
// }
 
// }

//  end remove search itrem


/////////////////////////////////////////////endremove itemm ////////////////////