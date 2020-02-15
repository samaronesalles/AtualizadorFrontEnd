import React, { Component } from 'react';
import api from '../../services/api'


export default class Main extends Component {
    componentDidMount() {
        this.loadUser();
    }

    loadUser = async () => {
        const response = await api.get('/rezendepedro');


        console.log(response.data);
    }

    render() {
        return <h1>Hello Atualizador</h1>
    }
}