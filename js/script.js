// text change
function textChange(){
    document.getElementById("event").innerHTML="Hello World";
}
// date
function disDate(){
    document.getElementById("demo").innerHTML= Date();
}
// hover
function mOver(obj){
    obj.innerHTML="Thank You";
}
function mOut(obj){
    obj.innerHTML="Mouse Over me";
}
// mouse up down
function mDown(obj){
    obj.style.backgroundColor="teal";
    obj.innerHTML="realse Me"
}
function mUp(obj){
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="Thank You";
}

// mouse leave and out
let test = document.getElementById("test");
test.addEventListener("mouseleave", function( event ) {
    event.target.style.color="blue";
    setTimeout(function(){
        event.target.style.color="green";
    }, 1000);}, false);

test.addEventListener("mouseout", function(event){
    event.target.style.color="orange";
    setTimeout(function(){
        event.target.color="";}, 500);},
        false);