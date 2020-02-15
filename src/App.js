import React from 'react';

import Header from './components/Header';
import api from './services/api';
import Main from './pages/main/index';

import "./styles.css"

class App extends React.Component {
  render() {
    return (

      <div className="App">
        <Header title="Atualizador" />
        <Main />
      </div>
    );

  }
}


export default App;
