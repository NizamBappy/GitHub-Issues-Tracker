const logInBtn = document.getElementById("login-btn");
const inputValue = document.getElementById("input-value");
const passwordValue = document.getElementById("password-value");

logInBtn.addEventListener("click", function(){
    // console.log('login button click')
    
    const userName = inputValue.value;
    const password = passwordValue.value;
    
    if(userName === "admin" && password === "admin123"){
        alert("login successful")
        // window.location.replace("/home.html")
        window.location.assign("/home.html");
    }else{
        alert("username or pass wrong")
        return;
    }
})