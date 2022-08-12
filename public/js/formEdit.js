window.addEventListener("load", function () {
  let form = document.querySelector("form");
  let category = document.querySelector("#category");
  let name = document.querySelector("#name");
  let description = document.querySelector("#description");
  let size = document.querySelector("#size");
  let material = document.querySelector("#material");
  let price = document.querySelector("#price");
  let div1 = document.querySelector(".div1");
  let div2 = document.querySelector(".div2");
  let div3 = document.querySelector(".div3");

  console.log(form);

  form.addEventListener("submit", (e) => {
    let errores = [];
    console.log(errores);

    if ((name.value = "")) {
      errores.push("tenes que completar el campo del nombre!");
    }

    if ((size.value = "")) {
      errores.push("tenes que completar el campo del tamaño!");
    }

    if ((price.value = "")) {
      errores.push("tenes que completar el campo del precio!");
    }

    if (errores.length > 0) {
      e.preventDefault();
      let ulErrores = document.querySelector(".errores");
      for (let i = 0; i < errores.length; i++) {
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
      }
    } else {
      alert("La validación fué exitosa");
      form.submit();
    }
  });

  category.addEventListener("change", function (e) {
    alert("¿ estas seguro que es esa categoria ?");
  });

  description.addEventListener("change", function (e) {
    alert("¿ estas seguro que es esa tecnica de pintura ?");
  });

  material.addEventListener("change", function (e) {
    alert("¿ estas seguro que es ese material ?");
  });

  /* name.addEventListener("blur", function (e) {
    if (name.value == "") {
      // alert("tenes que poner un nombre");
      name.style.border = "red 3px solid";
      div1.innerHTML = "Tienes que poner un nombre";
      div1.style.color = "red";
    } else {
      name.style.border = "green 3px solid";
      div1.innerHTML = "Campo completo !";
      div1.style.color = "green";
    }
  });

  size.addEventListener("blur", function (e) {
    if (size.value == "") {
      size.style.border = "red 3px solid";
      div2.innerHTML = "Tienes que ponerle un tamaño !";
      div2.style.color = "red";
    } else {
      size.style.border = "green 3px solid";
      div2.innerHTML = "Campo completo !";
      div2.style.color = "green";
    }
  });

  price.addEventListener("blur", function (e) {
    if (price.value == "") {
      price.style.border = "red 3px solid";
      div3.innerHTML = "Tienes que poner un precio !";
      div3.style.color = "red";
    } else {
      price.style.border = "green 3px solid";
      div3.innerHTML = "Campo completo !";
      div3.style.color = "green";
    }
  }); */
});
