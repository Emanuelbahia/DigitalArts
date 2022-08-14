window.addEventListener("load", function () {
  let form = document.querySelector("form");
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");
  let div1 = document.querySelector(".div1");
  let div2 = document.querySelector(".div2");
  console.log(email);

  email.addEventListener("blur", function (e) {
    if (email.value == "") {
      // alert("tenes que poner un nombre");
      email.style.border = "red 3px solid";
      div1.innerHTML = "Tienes que poner un email !!";
      div1.style.color = "red";
    } else {
      email.style.border = "green 3px solid";
      div1.innerHTML = "Campo completo !";
      div1.style.color = "green";
    }
  });

  password.addEventListener("blur", function (e) {
    if (password.value == "") {
      password.style.border = "red 3px solid";
      div2.innerHTML = "Tienes que poner una contraseña !!";
      div2.style.color = "red";
    } else {
      password.style.border = "green 3px solid";
      div2.innerHTML = "Campo completo !";
      div2.style.color = "green";
    }
  });

  /*  form.addEventListener("submit", function (e) {
    let errores = [];

    if ((email.value = "")) {
      // e.preventDefault();
      email.style.border = "red 3px solid";
      div1.innerHTML = "tienes que poner un email";
      div1.style.color = "red";
      errores.push("Email requerido");
    } else {
      email.style.border = "green 3px solid";
      div1.innerHTML = "campo completo";
      div1.style.color = "green";
    }
    if ((password.value = "")) {
      //e.preventDefault();
      password.style.border = "red 3px solid";
      div2.innerHTML = "tienes que poner una contraseña";
      div2.style.color = "red";
      errores.push("Contraseña requerida");
    } else {
      password.style.border = "green 3px solid";
      div2.innerHTML = "campo completo";
      div2.style.color = "green";
    }
  });
  if (errores.length > 0) {
    e.preventDefault();
    this.alert("no te podes loguear !");
    let ulerrors = document.querySelector(".errores");
    for (let i = 0; i < errores.length; i++) {
      ulerrors.innerHTML += "<li>" + errores[i] + "</li>";
    }
  } else {
    alert("Estas logueado!!");
  } */
});
