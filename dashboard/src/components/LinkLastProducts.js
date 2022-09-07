import React, { Component } from "react";
import Products from "./Products";

class LinkLastProducts extends Component {
  state = {
    lastProduct: "",
  };

  componentDidMount() {
    fetch("/api/products/last")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((product) => {
        //console.log(product.data);
        this.setState({ lastProduct: product.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="box-list-users">
        <h3 className="h3-list">Ultimo producto creado</h3>
        <div className="table table-categories">
          <table className="width-table">
            <thead>
              <tr>
                <th className="name-table">Nombre</th>
                <th className="name-table">Medida</th>
                <th className="name-table">Precio</th>
              </tr>
            </thead>
            <tbody>
              <Products {...this.state.lastProduct} />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default LinkLastProducts;
