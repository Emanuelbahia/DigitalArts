const url = "http://localhost:3001/";
//la uso para mostrar la imagen del cuadro
const imagePath = "images/";

function setCarritoVacio() {
  cartRows.innerHTML = `
      <tr>     
          <td colspan="5"><div class="alert alert-warning my-2 text-center">No tienes products en el carrito</div></td>
      </tr>            
      `;
}

function vaciarCarrito() {
  localStorage.removeItem("carrito");
}

function calcularTotal(products) {
  return products.reduce(
    (acum, product) =>
      //console.log(product.price)
      (acum += product.price * product.quantity),
    0
  );
}

//agarro la fila de la tabla para poder poner cada producto dentro del Tbody
let cartRows = document.querySelector(".cartRows");

var quantity = 1;

function incrementar() {
  quantity++;

  document.querySelector(".contador").innerHTML = quantity;
  //console.log(quantity);
}

function disminuir() {
  var contador = document.querySelector(".contador").textContent;

  quantity--;
  if (contador <= 0) {
    quantity = 1;
  }

  document.querySelector(".contador").innerHTML = quantity;
  //console.log(quantity);
}

//voy guardando los productos en el array para cuando haga la compra
let products = [];

//si hay carrito lo traigo, lo parseo y lo pongo adentro una variable q en este caso se llama carrito
if (localStorage.carrito) {
  let carrito = JSON.parse(localStorage.carrito);

  //hago un forEach con todos los productos q trae la variable carrito, pero solo tengo el id y la cantidad de cada uno
  carrito.forEach((item, index) => {
    //traigo los productos de la base de datos con el fetch! al id lo tengo en item.id
    fetch(`/api/products/${item.id}`)
      .then((res) => res.json())
      .then((product) => {
        //console.log(product.data.quantity);
        //primero pregunto si el producto viene, por si lo eliminaron de la base de datos! si viene lo muestro !
        if (product) {
          //en el TBody de la tabla q agarre con cartRows muestro el nombre, precio y cantidad de cada producto
          //poniendo el data-id=${item.id} cuando aprieto en el icono + o - me tira el id del producto

          cartRows.innerHTML += `
<tr id="row${index}">
       <th scope="row">${index + 1}</th>
       <td> <img class="image-carrito" src="${imagePath}${
            product.data.image
          }"></td>
       <td>${product.data.name}</td>
       <td class="product-price">$ ${product.data.price.toFixed(2)}</td>
      
       <td class="text-center contador">${quantity}</td> 
       <td class="text-center contador"><button class="button-min" onclick=disminuir()><i class="fas fa-minus"></i></button> 
       <button class="button-add" onclick=incrementar()><i class="fas fa-plus"></i></button></td>
       <td class="text-center totalPrice"></td>
       <td><button class="btn btn-danger btn-sm" onclick=removeItem(${index})><i class="fas fa-trash"></i></button></td>
</tr>`;
          let qq = document.querySelector(".contador");
          let fq = qq.value;
          console.log(fq);
          //con el push agrego los productos al array
          products.push({
            id: product.data.id,
            name: product.data.name,
            price: product.data.price,
            quantity: 2,
          });

          //si el producto no viene, lo borro del localStorage con splice usando el index, y pongo q borre 1
        } else {
          carrito.splice(index, 1);
          //una vez q lo borre del carrito lo actualizo, lo guardo otra vez en carrito
          localStorage.setItem("carrito", JSON.stringify(carrito));
        }
        //cuando termina el fetch del ultimo producto del carrito hago la suma total
      })
      .then(() => {
        document.querySelector(".totalAmount").innerText = `$ ${calcularTotal(
          products
        )}`;
      });
    /*   let cantidadFinal = document.querySelector(".select-number");
    cantidadFinal.addEventListener("change", (e) => {
      const totalPrice = document.querySelector(".totalPrice");

      let precioFinal = product.data.price * `${e.target.value}`;
      totalPrice.textContent = `$${precioFinal.toFixed(2)}`;
    }); */
  });
}

{
  /* <select class="select-number" >
       <option value="0">0</option>
       <option value="1">1</option>
       <option value="2">2</option>
       <option value="3">3</option>
       <option value="4">4</option>
       <option value="5">5</option>
       <option value="6">6</option>
       <option value="7">7</option>
       <option value="8">8</option>
       </select> */
}
