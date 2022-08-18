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

    if (name.value == "") {
      errores.push("tenes que completar el campo del nombre!");
    }

    if (size.value == "") {
      errores.push("tenes que completar el campo del tamaño!");
    }

    if (price.value == "") {
      errores.push("tenes que completar el campo del precio!");
    }

    if (errores.length > 0) {
      e.preventDefault();
      /*  let ulErrores = document.querySelector(".errores");
      for (let i = 0; i < errores.length; i++) {
        ulErrores.innerHTML += "<li>" + errores[i] + "</li>";
      } */
    } else {
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

  name.addEventListener("blur", function (e) {
    if (name.value == "") {
      name.classList.add("is-invalid");
      div1.innerHTML = "Tienes que poner un nombre";
      div1.style.color = "red";
    } else {
      name.classList.add("is-valid");
      name.classList.remove("is-invalid");
      div1.innerHTML = "Campo completo !";
      div1.style.color = "green";
    }
  });

  size.addEventListener("blur", function (e) {
    if (size.value == "") {
      size.classList.add("is-invalid");
      div2.innerHTML = "Tienes que ponerle un tamaño !";
      div2.style.color = "red";
    } else {
      size.classList.add("is-valid");
      size.classList.remove("is-invalid");
      div2.innerHTML = "Campo completo !";
      div2.style.color = "green";
    }
  });

  price.addEventListener("blur", function (e) {
    if (price.value == "") {
      price.classList.add("is-invalid");
      div3.innerHTML = "Tienes que poner un precio !";
      div3.style.color = "red";
    } else {
      price.classList.add("is-valid");
      price.classList.remove("is-invalid");
      div3.innerHTML = "Campo completo !";
      div3.style.color = "green";
    }
  });
});
