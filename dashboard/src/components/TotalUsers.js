import { Component } from 'react';

class TotalUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersList:[]
        }
    }


    getUsers(){
        fetch('/api/users').then(r=>r.json()).then(respuesta=>{
            this.setState({usersList:respuesta.data})
        })
    }

    componentDidMount(){
        this.getUsers();
    }

    render() {
        return ( 
         <div className="card">
          <h4>Cantidad de usuarios</h4>
          <p className="p-bold">{this.getUsers.length()}</p>
         </div>
    )}
}

export default TotalUsers;
