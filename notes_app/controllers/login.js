let login = document.querySelector("#login");
login.addEventListener('click', dologinIn);
function dologinIn() {
    var name = document.querySelector('#inputname');
    var pwd = document.querySelector('#inputPassword');
    if (name.value == localStorage.username && pwd.value == localStorage.userpassword) {
        window.location.href = "index.html"
    }
    else {
        document.querySelector('#result').innerHTML = "your name and password are wrong";
        document.querySelector('#inputname').value = "";
        document.querySelector('#inputPassword').value = "";

    }
}