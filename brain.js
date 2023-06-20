let button = document.querySelector('.btn-2');

function alertCall() {

    setTimeout(function () {
        alert("This is under construction");
        //button.style.pointerEvents = "none";
    }, 90); // Delay the execution of the alert by 2000 milliseconds (2 seconds)




}
button.onmousedown = alertCall;


