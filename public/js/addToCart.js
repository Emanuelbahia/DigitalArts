function productosEnElCarrito() {
  //si hay un carrito, parseo el carrito y le saco la cantidad de items q tiene, sino devuelvo 0
  return localStorage.carrito ? JSON.parse(localStorage.carrito).length : 0;
}

window.addEventListener("load", function () {
  /*  Animations initialization */
  //new WOW().init();

  /* Toastr Initialization */
  /* toastr.options = {
    positionClass: "toast-bottom-right",
    fadeIn: 300,
    fadeOut: 1000,
    timeOut: 5000,
    extendedTimeOut: 1000,
  }; */

  //como tenemos muchos botones de comprar y agregar usamos el querySelectorAll
  let botonesComprar = document.querySelectorAll(".agregar-carrito");

  //agarro el numero q se muestra al lado del carrito en el header
  let cartNumber = document.querySelector(".cart-number");

  //antes de empezar el forEach actualizo el carrito por si tengo algo
  cartNumber.innerText = productosEnElCarrito();

  //para poder escuchar cada uno de los botones hago un forEach
  botonesComprar.forEach((boton) => {
    //escucho el click del boton
    boton.addEventListener("click", (e) => {
      //para saber si el producto esta en el carrito, tengo q sacar el id, y lo hago con target.dataset, captamos el producto q el usuario quiere comprar
      //cuando tenemos un data-algo, lo obtenemos con target.dataset.algo, si hago un console.log me da solo el id
      //console.log(e.target.dataset.id);

      //hay un carrito ?
      if (localStorage.carrito) {
        //primero leemos q hay en el carrito
        let carrito = JSON.parse(localStorage.carrito);

        //el findIndex busca en el carrito si hay un id q coincida con el q se clickeo (e.target.dataset.id)
        //si lo encuentra (si esta en el carrito) da el index del producto en el array, sino da -1
        let index = carrito.findIndex((prod) => prod.id == e.target.dataset.id);

        //si el producto esta en el carrito (distinto a -1), le sumo 1 !
        if (index != -1) {
          carrito[index];

          //.quantity++
          //si no lo agrego con push, a traves de un objeto con el id q se agrego y 1
        } else {
          carrito.push({ id: e.target.dataset.id, quantity: 1 });
        }

        //actualizo mi carrito en localStorage, y lo guardo como un string (queda un array de objetos con el id y la cantidad q agrego de c/u)
        localStorage.setItem("carrito", JSON.stringify(carrito));

        //si no hay carrito lo creamos, a la variable le ponemos carrito y dsps le pasamos el valor del objeto q va a tener el id y la cantidad
        //como no le podemos pasar un objeto, usamos el JSON.stringify
      } else {
        localStorage.setItem(
          "carrito",
          JSON.stringify([{ id: e.target.dataset.id, quantity: 1 }])
        );
      }
      //toastr.success("se agregó este producto al carrito");
      cartNumber.innerText = productosEnElCarrito();
    });
  });
});
