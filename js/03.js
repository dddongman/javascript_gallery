// document.getElementById("pic0").style.left = (1440 * 0) + "px";
// document.getElementById("pic1").style.left = (1440 * 1) + "px";
// document.getElementById("pic2").style.left = (1440 * 2) + "px"; //숫자 + 문자 연결연산자 "2880px"

for(var i=0; i<3; i++){
    document.getElementById("pic" + i).style.left = (1440 * i) + "px";
}

document.getElementById("prev_btn").onclick = function(){
    if(moveNum > 0){
        moveNum--;
    }
    for(var i=0; i<3; i++){
        document.getElementById("pic" + i).style.left = (1440 * (i-moveNum)) + "px";
    }
}
let moveNum = 0;
document.getElementById("next_btn").onclick = function(){
    // document.getElementById("pic0").style.left = (1440 * -1) + "px";
    // document.getElementById("pic1").style.left = (1440 * 0) + "px";
    // document.getElementById("pic2").style.left = (1440 * 1) + "px";
    if(moveNum < 2){
        moveNum++;
    }
    for(var i=0; i<3; i++){
        document.getElementById("pic" + i).style.left = (1440 * (i-moveNum)) + "px";
    }
}