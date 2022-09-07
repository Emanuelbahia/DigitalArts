import { Component } from "react";

class TotalUsers extends Component {
  state = {
    usersList: [],
  };

  componentDidMount() {
    fetch("/api/users")
      .then((r) => r.json())
      .then((respuesta) => {
        this.setState({ usersList: respuesta.meta });
      })
      .catch((error) => console.log(error));
  }
  //Obtenemos el total de los usuarios
  total() {
    let totalUsers = this.state.usersList.total;

    return totalUsers;
  }

  render() {
    return (
      <div className="card">
        <h4 className="amount-users-color h4-card">Cantidad de usuarios</h4>
        <p className="p-bold">{this.total()}</p>
      </div>
    );
  }
}

export default TotalUsers;
