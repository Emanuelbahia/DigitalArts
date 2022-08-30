import { Component } from 'react';

class TotalUsers extends Component {
    
    state = {
      usersList:[]
    }
    
    componentDidMount(){
        fetch('/api/users').then(r=>r.json()).then(respuesta=>{
            this.setState({usersList:respuesta.meta})
        })
    }
    total() {
    
        let totalUsers = this.state.usersList.total;
        console.log(totalUsers);
        return totalUsers  
    }
   

    render() {
        return ( 
         <div className="card">
          <h4>Cantidad de usuarios</h4>
          <p className="p-bold">{this.total()}</p>
         </div>
    )}
}

export default TotalUsers;
