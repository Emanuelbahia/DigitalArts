import React, { Component } from "react";
import Categories from "./Categories";

class LinkCategories extends Component {
  state = {
    listCategories: [],
  };

  componentDidMount() {
    fetch("/api/products/category")
      .then((respuesta) => {
        return respuesta.json();
      })

      .then((category) => {
        this.setState({ listCategories: category.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="box-list-users">
        <h3 className="h3-list">listado de categorias</h3>
        <div className="table table-categories">
          <table className="width-table">
            <thead>
              <tr>
                <th className="name-table">Numero</th>
                <th className="name-table">Categoria</th>
              </tr>
            </thead>
            <tbody>
              {this.state.listCategories.map((category, index) => {
                return <Categories {...category} key={index} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default LinkCategories;
