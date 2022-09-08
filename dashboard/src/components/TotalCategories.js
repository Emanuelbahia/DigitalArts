import { Component } from "react";

class TotalCategories extends Component {
  state = {
    categoryList: [],
  };

  componentDidMount() {
    fetch("/api/products/category")
      .then((respuesta) => {
        return respuesta.json();
      })

      .then((product) => {
        this.setState({ categoryList: product.meta });
      })
      .catch((error) => console.log(error));
  }
  //creo una funcion para obtener la cantidad de categoria de productos en la base de datos
  total() {
    let total = this.state.categoryList.total;

    return total;
  }

  render() {
    return (
      <div className="card">
        <h4 className="amount-categories-color h4-card">
          Cantidad de categorias
        </h4>
        <p className="p-bold number-categories">{this.total()}</p>
      </div>
    );
  }
}

export default TotalCategories;
