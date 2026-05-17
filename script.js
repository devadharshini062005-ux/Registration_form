

let name_v = document.getElementById("name_v")
let email_v = document.getElementById("email_v")
let password_v = document.getElementById("password_v")

let btn = document.getElementById("btn-sub")

btn.addEventListener("click",function(e){
  let namebox = document.getElementById("name").value
let email = document.getElementById("email").value
let password = document.getElementById("Password").value

let nameerror = /^[a-zA-Z]+$/.test(namebox)
let emailerror = /^[a-zA-Z0-9]+@gmail\.com/.test(email)
let passworderror = /[a-zA-Z0-9]{6,}/.test(password)

  e.preventDefault()

    if(!nameerror){
      name_v.textContent = "Fill Container" 
    }else{
      name_v.textContent = ""
    }

    if(!emailerror){
      email_v.textContent="Enter valid Email ID" 
    }else{
      email_v.textContent=""
      
    }

    if(!passworderror){
      password_v.textContent="Password must contain 6 Character"
    }else{
      password_v.textContent=""
    }

    if(nameerror && emailerror && passworderror){
      alert("Login successfully")
    }
})

