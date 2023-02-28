let counter = 10;
setInterval(function(){
    counter--;
    if(counter >= 0){
        id = document.querySelector(".count")
        id.innerHTML = counter;
    }
    if(counter === 0){
        id.innerHTML = "Happy Independence Day"
    }
}, 1000);