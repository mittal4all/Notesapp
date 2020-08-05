window.addEventListener('load',init);
function init(){
    isLogin();
}
function isLogin(){

    if(localStorage.username && localStorage.username.trim().length>0){
        document.querySelector('#userid').innerText = localStorage.username;
    }
    else{
        location.href="register.html";
    }
}