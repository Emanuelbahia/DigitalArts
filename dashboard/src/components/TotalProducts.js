import { Component } from "react";

class TotalProducts extends Component {
  state = {
    productList: [],
  };

  componentDidMount() {
    fetch("/api/products")
      .then((respuesta) => {
        return respuesta.json();
      })

      .then((product) => {
        this.setState({ productList: product.meta });
      })
      .catch((error) => console.log(error));
  }
  //creo una funcion para obtener la cantidad de productos en la base de datos
  total() {
    let total = this.state.productList.total;

    return total;
  }

  render() {
    return (
      <div className="card">
        <h4 className="amount-products-color h4-card">Cantidad de productos</h4>
        <p className="p-bold">{this.total()}</p>
      </div>
    );
  }
}

export default TotalProducts;
