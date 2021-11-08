function login(e) {

    e.preventDefault()
    let form = document.getElementById("login_form");

    let userData = {

        username: form.username.value,
        password: form.password.value

    }

    userData = JSON.stringify(userData);


    console.log(userData);

    fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {

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
            if( res.error == false){
                alert('Logged in Succesful')

                let timer = setTimeout(()=>{
                    goToHomePage()
                }, 2000)
            }
            profile(userData.username,res.token)
        })
        .catch((e) => {
            console.log(e);
        })

}


function profile(username, token){

    fetch(`https://masai-api-mocker.herokuapp.com/user${username}`,{

        headers: {
            "Content-Type": "application/json",

            "Authorization": `Bearer${token}`
        }

        
    })
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        console.log(res);
    })

}

function goToHomePage(){
    window.location.href = "index.html"
}
