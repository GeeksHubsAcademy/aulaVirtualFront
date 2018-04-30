
// Dependencias
import React, { Component } from 'react'; 
import PropType from 'prop-types';

// assets
import './App.css';

//Componentes
import Header from './componentes/Header';
import Content from './componentes/Content';

// Data
import items from './menu';


class App extends Component {

    static propTypes = {
        children: PropType.object.isRequired
    }

render() {
    const { children } = this.props;
    return(
        <div>
            <Header title="Header" items={ items } />
            <Content body={ children } />
        </div>
    );
}
}

export default App;