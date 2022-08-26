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

  total() {
    let total = this.state.categoryList.total;

    return total;
  }

  render() {
    return (
      <div className="card">
        <h4>Cantidad de categorias</h4>
        <p className="p-bold">{this.total()}</p>
      </div>
    );
  }
}

export default TotalCategories;
