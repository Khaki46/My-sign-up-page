var num;
var nameSet;
var numberSet;
var passwordSet;
var codeSet;
var checkSet;
function getcode(){
    var codeNum = Math.random().toString().slice(-4);
    num=codeNum;
    alert(codeNum);
}
var wait = 60;
var test = true;
function time(btn) {
    if(wait == 0) {
        btn.removeAttribute("disabled");//no ban the button
        btn.value = "Get the code";
        wait = 60;
    } else {
        btn.setAttribute("disabled", "true");//ban the button
        btn.value = "Resend(" + wait + ")";
        wait--;
        // one seconds use one XD
        setTimeout(function() {
                time(btn)},
            1000)
            
  }
}
function keyname(){
     // Username
     var userNameObj = /^[a-zA-Z_]\w{0,9}$/;
     var getInputName = document.getElementsByTagName("input")[0].value;
        if (!getInputName){
            document.getElementsByTagName("span")[0].innerHTML="Hey your name";
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
    }
function keyphonenumber(){
        // phonenumber
        var numberObj = /^1[3|4|5|7|8][0-9]{9}$/;
        var getInputNumber = document.getElementsByTagName("input")[1].value;
        if (!getInputNumber){
            document.getElementsByTagName("span")[1].innerHTML="You number guys";
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
    
}
function keypassword(){
        // password
        var passwordObj = /^(?=.*[a-z])(?=.*\d)[^]{8,16}$/;
        var getInputPassword = document.getElementsByTagName("input")[2].value;
        if (!getInputPassword){
            document.getElementsByTagName("span")[2].innerHTML="Enter your password";
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
}
function finish(){
    var getInputName = document.getElementsByTagName("input")[0].value;
    var getInputNumber = document.getElementsByTagName("input")[1].value;
    var getInputPassword = document.getElementsByTagName("input")[2].value;
    if (!getInputName){
        document.getElementsByTagName("span")[0].innerHTML="Hey your name";
        document.getElementsByTagName("span")[0].style.visibility="visible";
        nameSet=false;
    }
    if (!getInputNumber){
        document.getElementsByTagName("span")[1].innerHTML="You number guys";
        document.getElementsByTagName("span")[1].style.visibility="visible";
        numberSet=false;
    }
    if (!getInputPassword){
        document.getElementsByTagName("span")[2].innerHTML="Enter your password";
        document.getElementsByTagName("span")[2].style.visibility="visible";        
        passwordSet=false;
    }
    // code
    var getInputCode = document.getElementsByTagName("input")[3].value;
    if (!getInputCode){
        document.getElementsByTagName("span")[3].style.visibility="visible";
        codeSet=false;
    }else
    if(getInputCode==num){
        codeSet=true;
        document.getElementsByTagName("span")[3].style.visibility="hidden";
    }else{
        codeSet=false;
        document.getElementsByTagName("span")[3].innerHTML="Code is wrong";
        document.getElementsByTagName("span")[3].style.visibility="visible";        
    }
    var check = document.getElementsByTagName("input")[5];  
    console.log(check.checked);  
    if (check.checked==true){
        document.getElementById("haha").style.visibility="hidden";
        checkSet=true;
    }else{
        document.getElementById("haha").style.visibility="visible";       
        checkSet=false; 
    }

    if (nameSet==true&&numberSet==true&&passwordSet==true&&codeSet==true&&checkSet==true){
        alert("Welcome you get a account!")
    }else{
        console.log("sb");
    }
}
function checkidi(){
    var check = document.getElementsByTagName("input")[5];
    if(check.checked==true){
        document.getElementById("haha").style.visibility="hidden";
    }
}