const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
container.classList.remove("sign-up-mode");
});
const usernamearr=[]
const emailarr=[]
const passwordarr=[]

function signup(){
    var username=document.getElementById("username").value
    var email=document.getElementById("email").value
    var password=document.getElementById("password").value
    var val = 1
    for (let i=0;i<usernamearr.length;i++){
        if( username==usernamearr[i]){
            alert("username taken")
            val=0
        }
    }
    if (val==1){
        usernamearr[usernamearr.length]=username
        emailarr[emailarr.length]=email
        passwordarr[passwordarr.length]=password
        const myarray = JSON.parse(usernamearr);
        const myarray2 = JSON.parse(emailarr);
        const myarray3 = JSON.parse(passwordarr);
        localStorage.setItem("user",myarray)
        localStorage.setItem("email",myarray2)
        localStorage.setItem("pass",myarray3)
        alert("sign in successfull")
    }
    console.log(usernamearr)
    console.log(emailarr)
    console.log(passwordarr)
}
 function login(){
    var usernamelog=document.getElementById("usernamelog").value
    var passlog=document.getElementById("passlog").value
    const userify=localStorage.getItem("user")
	const user = JSON.parse(userify)
    const emailrify=localStorage.getItem("email")
	const email = JSON.parse(emailrify)
    const passrify=localStorage.getItem("pass")
	const pass = JSON.parse(passrify)
    for (let i=0;i<user.length;i++){
        if( usernamelog==user[i]){
            if (passlog==pass[i]){
                window.location.href = form.getAttribute("action");
                
            }
            else{
                alert("invalid password")
            }
        }
    }
}
