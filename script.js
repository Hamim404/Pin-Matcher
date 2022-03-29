var generatePinBtn=document.getElementById("generate-pin-btn");
generatePinBtn.addEventListener("click",function(){
    var generateOutput=document.getElementById("generateOutput").value;
    var generateOutputNumber=parseFloat(generateOutput);
    document.getElementById("generateOutput").value=Math.floor(Math.random()*100)*999;
});
var submit=document.getElementById("submit");
submit.addEventListener("click",function(){

    var numberOutputCorrect=document.getElementById("numberOutput").value;
    var generatePin =document.getElementById("generateOutput").value;
    if(numberOutputCorrect===generatePin){
        document.getElementById("correct-alert").style.display="block";
    document.getElementById("wrong-alert").style.display="none";
    }
    else{
        document.getElementById("correct-alert").style.display="none";
        document.getElementById("wrong-alert").style.display="block";
        var submitCount=document.getElementById("submit-count").innerText;
    var submitCountNumber=parseFloat(submitCount);
    document.getElementById("submit-count").innerText=submitCountNumber-1;
    if(submitCountNumber===1){
        var limit=document.getElementById("limit").innerText="Limit exceeded";
        document.getElementById("limit-alert").style.display="block";
        document.getElementById("wrong-alert").style.display="none";
        document.getElementById("submit").disabled=true;
    var numberOutput=document.getElementById("numberOutput").value;
    var numberOutputNumber=parseFloat(numberOutput);
    }
    }
});