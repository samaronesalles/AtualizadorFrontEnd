import React, { Component } from 'react';
import api from '../../services/api';

import './styless.css';


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
        const { Users } = this.state;
        return(
            <div className="user-list"> 
                {Users.map(user => (
                   <article key={user._id}>
                       <strong>{user.name}</strong>
                       <p>{user.height}</p>
                       <a href={user.url}>ler mais</a>
                   </article>
                ))} 
            </div>
        )
    }
}
