import React, { Component } from "react";
import Products from "./Products";

class LinkProducts extends Component {
  state = {
    listProduct: [],
  };

  componentDidMount() {
    fetch("/api/products")
      .then((respuesta) => {
        return respuesta.json();
      })

      .then((product) => {
        this.setState({ listProduct: product.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="box-list-users">
        <h3 className="h3-list">listado de productos</h3>
        <div className="table table-categories">
          <table className="width-table">
            <thead>
              <tr>
                <th className="name-table">Id</th>
                <th className="name-table">Nombre</th>
                <th className="name-table">Medida</th>
                <th className="name-table">Precio</th>
              </tr>
            </thead>
            <tbody>
              {this.state.listProduct.map((product, index) => {
                return <Products {...product} key={index} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default LinkProducts;
