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

  total() {
    let total = this.state.productList.total;

    return total;
  }

  render() {
    return (
      <div className="card">
        <h4>Cantidad de productos</h4>
        <p className="p-bold">{this.total()}</p>
      </div>
    );
  }
}

export default TotalProducts;
