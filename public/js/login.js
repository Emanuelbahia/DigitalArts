/*window.addEventListener("load", function () {
  let form = document.querySelector("form");
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");
  let div1 = document.querySelector(".div1");
  let div2 = document.querySelector(".div2");
  console.log(email);

  form.addEventListener("submit", function (e) {
    //let errors = [];

    if ((email.value = "")) {
      e.preventDefault();
      email.style.border = "red 3px solid";
      div1.innerHTML = "tienes que poner un email";
      div1.style.color = "red";
      //errors.push("Email requerido");
    } else {
      email.style.border = "green 3px solid";
      div1.innerHTML = "campo completo";
      div1.style.color = "green";
    }
    if ((password.value = "")) {
      e.preventDefault();
      password.style.border = "red 3px solid";
      div2.innerHTML = "tienes que poner una contraseña";
      div2.style.color = "red";
      //errors.push("Email requerido");
    } else {
      password.style.border = "green 3px solid";
      div2.innerHTML = "campo completo";
      div2.style.color = "green";
    }

    //errors.push("Contraseña requerida");
  });
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
   }); 
});*/
