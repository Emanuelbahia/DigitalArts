window.addEventListener("load", function () {
  let form = document.querySelector("form");
  let div1 = document.querySelector(".div1");
  let div2 = document.querySelector(".div2");
  console.log(email);

  email.addEventListener("blur", function (e) {
    if (email.value == "") {
      email.style.border = "red 3px solid";
      div1.innerHTML = "Tienes que poner un email !!";
      div1.style.color = "red";
    } else {
      form.email.style.border = "green 3px solid";
      div1.innerHTML = "Campo completo !";
      div1.style.color = "green";
    }
  });
  //campo password
  form.password.addEventListener("blur", function (e) {
    if (form.password.value == "") {
      form.password.style.border = "red 3px solid";
      div2.innerHTML = "Tienes que poner una contraseña !!";
      div2.style.color = "red";
    } else {
      form.password.style.border = "green 3px solid";
      div2.innerHTML = "Campo completo !";
      div2.style.color = "green";
    }
  });

  form.addEventListener("submit", function (e) {
    let errores = [];

    if (email.value == "") {
      email.style.border = "red 3px solid";
      div1.innerHTML = "tienes que poner un email";
      div1.style.color = "red";
      errores.push("Email requerido");
    } else {
      form.email.style.border = "green 3px solid";
      div1.innerHTML = "campo completo";
      div1.style.color = "green";
    }
    if (password.value == "") {
      password.style.border = "red 3px solid";
      div2.innerHTML = "tienes que poner una contraseña";
      div2.style.color = "red";
      errores.push("Contraseña requerida");
    } else {
      form.password.style.border = "green 3px solid";
      div2.innerHTML = "campo completo";
      div2.style.color = "green";
    }
  });
  if (errores.length > 0) {
    e.preventDefault();

    /* let ulerrors = document.querySelector(".errores");
    for (let i = 0; i < errores.length; i++) {
      ulerrors.innerHTML += "<li>" + errores[i] + "</li>"; 
    }*/
  } else {
    alert("Estas logueado!!");
  }
});
