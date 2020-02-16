import React, { Component } from 'react';
import api from '../../services/api'


export default class Main extends Component {
    state = {
        Users : [], 
    }

    componentDidMount() {
        this.loadUser();
    }

    loadUser = async () => {
        const response = await api.get('people/');

        console.log(response.data.results);
        this.setState({Users: response.data.results}) ;
    }

    render() { 
        return(
            <div className="user-list"> 
                {this.state.Users.map(user => (
                     <h2>{user.name}</h2>
                ))} 
            </div>
        )
    }
}
