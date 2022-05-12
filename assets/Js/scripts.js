var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var currentSpan = document.getElementsByTagName("span")[0];
function increment() {
    currentNumber = currentNumber + 1;
    stoped();
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    stoped();
    currentNumberWrapper.innerHTML = currentNumber;
}

function stoped() {
    if (currentNumber < 0) {
        currentNumber = 0;
        currentSpan.style.color = "red";
        } else if ((currentNumber > 0 ) && (currentSpan.style.color != "black")) {
            currentSpan.style.color = "black";

        } else if(currentNumber > 10){
        currentNumber = 10;
        
    }
}