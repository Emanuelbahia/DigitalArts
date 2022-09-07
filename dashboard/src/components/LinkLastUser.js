import React, { Component } from "react";
import Users from "./Users";

class LinkLastUser extends Component {
  state = {
    lastUser: "",
  };

  componentDidMount() {
    fetch("/api/users/last")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((user) => {
        //console.log(product.data);
        this.setState({ lastUser: user.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="box-list-users">
        <h3 className="h3-list">Ultimo usuario registrado</h3>
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
              <Users {...this.state.lastUser} />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default LinkLastUser;
