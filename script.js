function makeBubble() {
    var clutter = "";
    for (var i = 1; i < 71; i++) {
        var num = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${num}</div>`;
    }
    document.querySelector(".pbtm").innerHTML = clutter;
}
var timer = 60;
function runTimer() {
    var timerint = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer;
        } else {
            clearInterval(timerint); // clear the build up memory for timerInterval function calling
        }
    }, 1000);
}
var hitrn =0;
function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}
var score = 0;
function increaseScore() {
    score += 10;
    console.log(score);
    document.querySelector("#scoreval").textContent = score;
}
function decreaseScore() {
    if(score>0){
    score -= 10;
    console.log(score);
    document.querySelector("#scoreval").textContent = score;

    }    
}
// targeting the event listerner to the parent of bubble element
document.querySelector(".pbtm").addEventListener("click", function (dets) {
    console.log(dets);
    console.log(dets.target);
    console.log(dets.target.textContent); //  string 
    console.log(Number(dets.target.textContent)); // number
    let clickNo = Number(dets.target.textContent);
    if(clickNo === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
    else{
        decreaseScore();
        makeBubble();
        getNewHit();
    }
})
runTimer();





