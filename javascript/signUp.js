import navbar from "../components/navbar.js";

let nav_div = document.getElementById("nav_div");

nav_div.innerHTML = navbar()


function signUp(e) {

    e.preventDefault()
    let form = document.getElementById("signUp_form");

    let userData = {
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
        username: form.username.value,
        mobile: form.mobile.value,
        description: form.description.value
    }

    userData = JSON.stringify(userData)

    console.log(userData);

    fetch(`https://masai-api-mocker.herokuapp.com/auth/register`, {

        method: "POST",

        body: userData,

        headers: {
            "Content-Type": "application/json",
        }


    })

        .then((res) => {
            return res.json()
        })
        .then((res) => {
            console.log(res);
            if (res.error == false) {
                alert(res.message);

                let timer = setTimeout(() => {
                    gotoLoginPage() 
                }, 2000)
            }
        })
        .catch((e) => {
            console.log(e);
            alert("Registration failed, user already exists")
        })

}

function gotoLoginPage() {
  window.location.href = "login.html"
}