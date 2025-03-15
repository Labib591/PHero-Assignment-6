document.getElementById("login-btn").addEventListener("click", () => {
    const name = document.getElementById("name").value;
const password = document.getElementById("password").value;

console.log(name, password);
    if(name !== "" && password === "123456"){
        document.getElementById("learn-vocabularies").classList.remove("hidden");
        document.getElementById("faq").classList.remove("hidden");
    }
    else if(name === "" && password === ""){
        alert("Please tell me your name first");
    }
    else if(name !== "" && password !== "123456"){
        alert("Wrong Password. Contact with Admin");
    }
});