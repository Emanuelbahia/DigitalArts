window.addEventListener("load", function () {
  let form = document.querySelector("form");
  let div1 = document.querySelector(".div1");
  let div2 = document.querySelector(".div2");
  let div3 = document.querySelector(".div3");
  let div4 = document.querySelector(".div4");
  let div5 = document.querySelector(".div5");
  let div6 = document.querySelector(".div6");
  let name = document.querySelector("#name");
  let password = document.getElementById("password");
  let p1 = document.querySelector(".p1");
  let p2 = document.querySelector(".p2");
  let p3 = document.querySelector(".p3");
  let p4 = document.querySelector(".p4");
  let characterCount = document.querySelector("#character-count");

  //Validaciones online
  //Campo name
  name.addEventListener("blur", function () {
    if (name.value == "") {
      name.style.border = "red 3px solid";
      div1.innerHTML = "Ingresa tu nombre";
      div1.style.color = "red";
    } else {
      name.style.border = "green 3px solid";
      div1.innerHTML = "Campo completo";
      div1.style.color = "green";
    }
  });
  
  //Campo surname
  form.surname.addEventListener("blur", function () {
    if (form.surname.value == "") {
      form.surname.style.border = "red 3px solid";
      div2.innerHTML = "Ingresa tu apellido";
      div2.style.color = "red";
    } else {
      form.surname.style.border = "green 3px solid";
      div2.innerHTML = "Campo completo";
      div2.style.color = "green";
    }
  });
  
  //Campo email
  form.email.addEventListener("blur", function () {
    if (form.email.value == "") {
      form.email.style.border = "red 3px solid";
      div3.innerHTML = "Ingresa tu email";
      div3.style.color = "red";
    } else {
      form.email.style.border = "green 3px solid";
      div3.innerHTML = "Campo completo";
      div3.style.color = "green";
    }
  });
  
  //Campo password
  form.password.addEventListener("blur", function () {
    console.log(password.value.match(/[0-9]/).input);
    if (form.password.value == "") {
      form.password.style.border = "red 3px solid";
      div4.innerHTML = "Ingresa una contraseña";
      div4.style.color = "red";
    } else {
      form.password.style.border = "green 3px solid";
      /* div4.innerHTML = "campo completo"; */
      div4.style.color = "green";
    }
  });
  
  //Campo confirmacion password
  form.confirmPassword.addEventListener("blur", function () {
    if (form.confirmPassword.value == "") {
      form.confirmPassword.style.border = "red 3px solid";
      div5.innerHTML = "Confirma tu contraseña";
      div5.style.color = "red";
    } else {
      form.confirmPassword.style.border = "green 3px solid";
      div5.style.color = "green";
    }
  });
  
  //Campo avatar
  form.avatar.addEventListener("blur", function () {
    if (form.avatar.value == "") {
      form.avatar.style.border = "red 3px solid";
      div6.innerHTML = "Ingresa tu foto de perfil";
      div6.style.color = "red";
    } else {
      form.avatar.style.border = "green 3px solid";
      div6.innerHTML = "Campo completo";
      div6.style.color = "green";
    }
  });
  
  //Validacion formulario
  form.addEventListener("submit", (e) => {
    let errores = [];
    console.log(errores);

    if (form.name.value == "") {
      errores.push();
    }
    if (form.surname.value == "") {
      errores.push();
    }
    if (form.email.value == "") {
      errores.push();
    }
    if (form.password.value == "") {
      errores.push();
    }
    if (form.confirmPassword.value == "") {
      errores.push();
    }
    if (form.avatar.value == "") {
      errores.push();
    }
    if (errores.length > 0) {
      e.preventDefault();
    } else {
      form.submit();
    }
  });
  let numeros = "0123456789";
  let symbol = "@|°?¡!¿{}[,.]";
  /* Confirmacion de la contraseña */
  check = function () {
    //para contar la cantidad de caracteres de la contraseña
    characterCount.innerHTML = password.value.length;

    //igualo la contraseña con la confirmacion de la contraseña
    if (
      document.getElementById("password").value ==
      document.getElementById("checkPassword").value
    ) {
      document.getElementById("alertPassword").style.color = "green";
      document.getElementById("alertPassword").innerHTML =
        '<span><i class="fas fa-check-circle"></i> Las contraseñas concuerdan</span>';
    } else {
      document.getElementById("alertPassword").style.color = "red";
      document.getElementById("alertPassword").innerHTML =
        '<span><i class="fas fa-exclamation-triangle"></i> Las contraseñas no concuerdan</span>';
    }

    if (
      password.value.length > 0 &&
      password.value.length < 10 &&
      password.value.match(/[0-9]/) >= 3 &&
      password.value.match(symbol)
    )
      p4.innerHTML = "bajo !";

    if (
      password.value.length > 10 &&
      password.value.length < 15 &&
      password.value.match(/[0-9]/) > 3
    )
      p4.innerHTML = "medio!";
    //mientras escribo voy completando los requisitos! cantidad de caracteres, q tenga un numero y mayuscula
    if (password.value.length < 6 || password.value.length > 20) {
      p1.style.color = "red";
    } else {
      p1.style.color = "green";
    }

    if (password.value.match(/[0-9]/) > 0) {
      p3.style.color = "green";
    } else {
      p3.style.color = "red";
    }

    if (password.value.match(/[A-Z]/)) {
      p2.style.color = "green";
    } else {
      p2.style.color = "red";
    }
  };

  /* para mostrar la contraseña */
  passToggle = () => {
    if (
      document.getElementById("password").type === "password" &&
      document.getElementById("checkPassword").type === "password"
    ) {
      document.getElementById("password").type = "text";
      document.getElementById("checkPassword").type = "text";
      document.querySelector(".fa-eye-slash").style.visibility = "visible";
      document.querySelector(".fa-eye").style.visibility = "hidden";
    } else {
      document.getElementById("password").type = "password";
      document.getElementById("checkPassword").type = "password";
      document.querySelector(".fa-eye-slash").style.visibility = "hidden";
      document.querySelector(".fa-eye").style.visibility = "visible";
    }
  };
});
