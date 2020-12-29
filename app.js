var btnOne = document.querySelector("#inc");
var btnTwo = document.querySelector("#dec");
var outpurCounter = document.querySelector("#output");

var count = 0;
function clickHandlerOne(){
    count++ ;
    outpurCounter.innerText = count;
}

function clickHandlerTwo(){
    count--;
    outpurCounter.innerText = count;

}

btnOne.addEventListener("click", clickHandlerOne);
btnTwo.addEventListener("click", clickHandlerTwo);