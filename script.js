// alert("Vishal Thakur welcome's you to the LOVE CALCULATOR");
// document.querySelector("h2").innerText("bye");
// $("h2").text("bye");

// function loveCalculate() {
//     var randomNumber = (Math.ceil(Math.random) * 100);
//     alert(randomNumber);
// }
// loveCalculate();


// alert("Welcome to the LOve calculator");
// function loveCalculate() {
//     var a = prompt("Enter ur Name");
//     var b = prompt("Enter ur partner's Name");
//    var c = Math.random();
//     c = Math.round(c * 100);
//     // console.log(c);
//     $("h2").text(c);
// }
// loveCalculate();


// function loveCalculate() {

//     var randomNumber = Math.random();
//     randomNumber  = Math.ceil(randomNumber * 100);

//     if(randomNumber<70){
//         $("h2").text( 'You are a perfect match with' +randomNumber+"%" );    
//     }
//     else if(70<randomNumber>30){
//         $("h2").text( "You can be a perfect match " +randomNumber+"%" );
//     }
//     else if(randomNumber<30){
//         $("h2").text( "SORRY but u are not a match with " +randomNumber+"%" );
//     }
//     $("h2").text(randomNumber);
// }
// loveCalculate();



function loveCalculate() {
    var randomNumber = Math.ceil(Math.random() * 100);
    if (70 < randomNumber) {
        $("h2").text("You are a perfect match with "+ randomNumber+"%");
    }
    else if (70 > randomNumber >= 40) {
        $("h2").text("You CAN be a perfect match " + randomNumber+"%");
    }
    else {
        $("h2").text("SORRY but u are not a match with "+ randomNumber+"%");
    }
}
loveCalculate();