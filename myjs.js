var num;
var nameSet;
var numberSet;
var passwordSet;
var codeSet;
function getcode(){
    var codeNum = Math.random().toString().slice(-4);
    num=codeNum;
    alert(codeNum);
}
function finish(){
    // Username
    var getInputName = document.getElementsByTagName("input")[0].value;
    var userNameObj = /^[a-zA-Z_]\w{0,9}$/;
    if (!getInputName){
        document.getElementsByTagName("span")[0].style.visibility="visible";

   
    }else
    if (userNameObj.test(getInputName)){
        nameSet=true;
        document.getElementsByTagName("span")[0].style.visibility="hidden";
    }else{
        nameSet=false;
        document.getElementsByTagName("span")[0].innerHTML="Username is wrong";
        document.getElementsByTagName("span")[0].style.visibility="visible";        
    }
    // phonenumber
    var getInputNumber = document.getElementsByTagName("input")[1].value;
    var numberObj = /^1[3|4|5|7|8][0-9]{9}$/;
    if (!getInputNumber){
        document.getElementsByTagName("span")[1].style.visibility="visible";

    }else
    if (numberObj.test(getInputNumber)){
        numberSet=true;
        document.getElementsByTagName("span")[1].style.visibility="hidden";
    }else{
        numberSet=false;
        document.getElementsByTagName("span")[1].innerHTML="Use China number"
        document.getElementsByTagName("span")[1].style.visibility="visible";
    }
    // password
    var getInputPassword = document.getElementsByTagName("input")[2].value;
    var passwordObj = /^(?=.*[a-z])(?=.*\d)[^]{8,16}$/;
    if (!getInputPassword){
        document.getElementsByTagName("span")[2].style.visibility="visible";        
    }else
    if (passwordObj.test(getInputPassword)){
        passwordSet=true;
        document.getElementsByTagName("span")[2].style.visibility="hidden";
    }else{
        passwordSet=false;
        document.getElementsByTagName("span")[2].innerHTML="Use at least one letter and number and at least 8 digits"
        document.getElementsByTagName("span")[2].style.visibility="visible";
    }
    // code
    var getInputCode = document.getElementsByTagName("input")[3].value;
    if (!getInputCode){
        document.getElementsByTagName("span")[3].style.visibility="visible";
    }else
    if(getInputCode==num){
        codeSet=true;
        document.getElementsByTagName("span")[3].style.visibility="hidden";
    }else{
        codeSet=false;
        document.getElementsByTagName("span")[3].innerHTML="Code is wrong";
        document.getElementsByTagName("span")[3].style.visibility="visible";        
    }
    var check = document.getElementsByTagName("input")[4];  
    console.log(check.checked);  
    if (check.checked==true){
        document.getElementById("haha").style.visibility="hidden";
    }else{
        document.getElementById("haha").style.visibility="visible";        
    }

    if (nameSet==true&&numberSet==true&&passwordSet==true&&codeSet==true){

    }else{
        console.log("sb");
    }
}
function checkidi(){
    var check = document.getElementsByTagName("input")[4];
    if(check.checked==true){
        document.getElementById("haha").style.visibility="hidden";
    }
}