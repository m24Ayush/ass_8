let myform = document.querySelector("#myForm")
let errormsg = document.querySelector("#errormsg")

myform.addEventListener("submit", (e) => {
    e.preventDefault();

    errormsg.innerHTML = ""

    let fname = document.querySelector("#fname").value.trim()
    let lname = document.querySelector("#lname").value.trim()
    let email = document.querySelector("#email").value.trim()
    let pass = document.querySelector("#pass").value.trim()
    let phoneno = document.querySelector("#phoneno").value.trim()
    let checkbox = document.querySelector("#checkbox").checked

    let anyerror=false

    if(fname===""&&lname===""){
        errormsg.innerHTML+="<p>*Name cannot be empty</p>"
        anyerror=true    
        document.querySelector("#fname").style.borderColor="red"
        document.querySelector("#lname").style.borderColor="red"
    }
    if(phoneno.length!=10){
        errormsg.innerHTML+="<p>*Please enter a valid phone number</p>"
        anyerror=true
        document.querySelector("#phoneno").style.borderColor="red"
    }
    if(!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        errormsg.innerHTML+="<p>*Please enter a valid email address</p>"
        anyerror=true
        document.querySelector("#email").style.borderColor="red"
    }

    if (!pass.match(/^(?=.*\d)(?=.*[A-Z])[a-zA-Z\d]{8,}$/)) {
        errormsg.innerHTML += '<p>*Password must be at least 8 characters long and must contain at least one numeric value and one uppercase value</p>';
        anyerror=true;
        document.querySelector("#pass").style.borderColor="red"
      }
    if(!checkbox){
        errormsg.innerHTML+="<p>*You must agree to the Terms and Conditions</p>"
        anyerror=true
    }

    if(anyerror)
    return;
    
    console.log({
        fname,
        lname,
        phoneno,
        pass,
        email,
        checkbox,
    });

    alert("Form submitted successfully")
    myform.reset();
})
