window.addEventListener("load", function(){
    let form = document.querySelector(".formValid");
    
   form.addEventListener("submit", function(e){
   
        let errors = [];
        let email = document.querySelector("#email");
        let password = document.querySelector("#password")
        if(email.value ="") {
            errors.push("Email requerido");
        }
        if(password.value ="") {
            errors.push("Contraseña requerida");
        }
        if(errors.length > 0){
            e.preventDefault()
            let ulerrors = document.querySelector(".errores")
            ulerrors.innerHTML = ""
            errors.forEach(function(error){
                ulerrors.innerHTML += "<li>" + error + "</li>"
            })
        } 
        else{
            alert("Estas logueado!!")
        } 
     })
    
    })