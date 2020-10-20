console.log("Name"+getPar('name'));
console.log("Number"+getPar('number'));
console.log("Password"+getPar('password'));

function keyName(){
var editUsername = document.getElementsByTagName("input")[0].value;
    if(!editUsername){
        document.getElementsByTagName("span")[0].style.visibility="visible"
    }else{
        document.getElementsByTagName("span")[0].style.visibility="hidden"
    }
}
function keyPassword(){
    var editPassword = document.getElementsByTagName("input")[1].value;
    if(!editPassword){
        document.getElementsByTagName("span")[1].style.visibility="visible"
    }else{
        document.getElementsByTagName("span")[1].style.visibility="hidden"
    }
}

function login(){
var editUsername = document.getElementsByTagName("input")[0].value;
var editPassword = document.getElementsByTagName("input")[1].value;
    if(!editUsername){
        document.getElementsByTagName("span")[0].style.visibility="visible";
    }
    
    if(!editPassword){
        document.getElementsByTagName("span")[1].style.visibility="visible";
    }

    if(!!editUsername&&!!editPassword){
        if(getPar('name')==editUsername&&getPar('password')==editPassword){
            setTimeout(go,0);
            function go(){
                location.href="index.html";
            }
        }else{
            document.getElementsByTagName("span")[2].style.visibility="visible"
        }
    }
}