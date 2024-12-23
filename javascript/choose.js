// let inseam = document.getElementById('inseam-input');
// let bikeSize = document.getElementById('size-output');

// inseam.onkeyup = function () {
//     bikeSize.value = Math.round(inseam.value * 0.67 / 2.54);
// }

// function res(bikeSize) {
//     if (bikeSize <= 18) {
//         document.getElementById("demo").innerHTML = "Your bike size is small";
//     } else if ((bikeSize > 18) && (bikeSize < 22)) {
//         document.getElementById("demo").innerHTML = "Your bike size is medium";
//     } else {
//         document.getElementById("demo").innerHTML = "Your bike size is large";
//     }
// }




function res() {
    let inseam = document.getElementById('inseam-input').value;
    let bikeSize = Math.round(inseam * 0.67 / 2.54);
    document.getElementById("size-output").value = bikeSize + " Inch";

    if (bikeSize <= 18) {
        document.getElementById("demo").innerHTML = "Your bike size is small";
    } else if ((bikeSize > 18) && (bikeSize < 22)) {
        document.getElementById("demo").innerHTML = "Your bike size is medium";
    } else {
        document.getElementById("demo").innerHTML = "Your bike size is large";
    }
}



// document.getElementById("demo").innerHTML = bikeSize;

// document.getElementById("demo").innerHTML = bikeSize.value;

// let a = bikeSize.value
// document.getElementById("demo").innerHTML = a;

// let b = bikeSize
// document.getElementById("demo").innerHTML = b;




// if (bikeSize <= 18) {
//     document.getElementById("demo").innerHTML = "your bike size is small"
// } else if (bikeSize > 18 && bikeSize < 22){
//     document.getElementById("demo").innerHTML = "your bike size is medium"
// } else {
//     document.getElementById("demo").innerHTML = "your bike size is large"
// }