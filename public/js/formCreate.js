window.addEventListener("load", function () {
  let form = document.querySelector("form");
  let div1 = document.querySelector(".div1");
  let div2 = document.querySelector(".div2");
  let div3 = document.querySelector(".div3");

    //hago foco en el primer campo a completar
    form.category.focus(),
    //validaciones on-line
    //campo category
    form.category.addEventListener("change", function () {
      alert("Estas seguro que quieres esa categoría?");
      form.category.style.border = "green 3px solid";
    }),
    
    //campo name
    form.name.addEventListener("blur", function () {
      if (form.name.value == "") {
        form.name.style.border = "red 3px solid";
        div1.innerHTML = "Introduce tu nombre";
        div1.style.color = "red";
      } else {
        form.name.style.border = "green 3px solid";
        div1.innerHTML = "Campo completo !";
        div1.style.color = "green";
      }
    }),

    //campo description
    form.description.addEventListener("change", function () {
      alert("Estas seguro que quieres esa técnica?");
      form.description.style.border = "green 3px solid";
    }),

    //campo size
    form.size.addEventListener("blur", function () {
      if (form.size.value == "") {
        form.size.style.border = "red 3px solid";
        div2.innerHTML = "Introduce el tamaño";
        div2.style.color = "red";
      } else {
        form.size.style.border = "green 3px solid";
        div2.innerHTML = "Campo completo !";
        div2.style.color = "green";
      }
    }),

    //campo material
    form.material.addEventListener("change", function () {
      alert("Estas seguro que quieres esa material?");
      form.material.style.border = "green 3px solid";
    }),

    //campo price
    form.price.addEventListener("blur", function () {
      if (form.price.value == "") {
        form.price.style.border = "red 3px solid";
        div3.innerHTML = "Introduce el precio";
        div3.style.color = "red";
      } else {
        form.price.style.border = "green 3px solid";
        div3.innerHTML = "Campo completo !";
        div3.style.color = "green";
      }
    }),

    //campo image
    form.image.addEventListener("blur", function () {
      if (form.image.value == "") {
        alert("Sube una imagen");
      }
    });

    form.addEventListener("submit", function (e) {
    let errors = [];
    //chequeamos que no haya errores
    //campo categoria
    if (form.category.value == "") {
      errors.push("Debe seleccionar una categoria");
    }
    //campo nombre
    if (form.name.value == "") {
      errors.push();
      form.name.style.border = "red 3px solid";
      div1.innerHTML = "Introduce el nombre";
      div1.style.color = "red";
    } else {
      form.name.style.border = "green 3px solid";
      form.name.focus();
    }
    //campo tamaño
    if (form.size.value == "") {
      errors.push();
      form.size.style.border = "red 3px solid";
      div1.innerHTML = "Tienes que poner un tamaño";
      div1.style.color = "red";
    } else {
      form.size.style.border = "green 3px solid";
      form.size.focus();
    }
    //campo descripcion
    if (form.description.value == "") {
      errors.push();
    }
    //campo material
    if (form.material.value == "") {
      errors.push();
    }
    //campo precio
    if (form.price.value == "") {
      errors.push();
      form.price.style.border = "red 3px solid";
      div1.innerHTML = "Introduce el tamaño";
      div1.style.color = "red";
    } else {
      form.price.style.border == "green 3px solid";
      form.price.focus();
    }
    //campo imagen
    if (form.image.value == "") {
      errors.push();
    }
    console.log(errors);

    if (errors.length > 0) {
      e.preventDefault();
    } else {
      alert("Creación exitosa!!");
    }
  });
});
