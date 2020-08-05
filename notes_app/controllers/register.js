let sigin = document.querySelector("#signIn");
sigin.addEventListener('click', dosignIn);
function dosignIn() {
    var name = document.querySelector('#inputname');
    var pwd = document.querySelector('#inputPassword');
    if (name.value != "" && pwd.value != "" && (pwd.value).length >= 6) {
        if (localStorage.username != name.value) {
            localStorage.setItem("username", name.value);
            localStorage.setItem("userpassword", pwd.value);
            window.location.href = "index.html";
        }
    }
    else if (localStorage.username == name.value) {
        document.querySelector("#result").innerHTML = "you are already register";
    }
    else {
        document.querySelector("#result").innerHTML = "please provide a correct details";
        name.value = "";
        pwd.value = "";
    }
}