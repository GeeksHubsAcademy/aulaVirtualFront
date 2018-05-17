//Dependencias
import React, { Component } from 'react'; 
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

//assets
import logo from '../logo_footer.png';
import './css/Header.css';

class Header extends Component {

    static propTypes = {
        title:  PropTypes.string.isRequired,
        items:  PropTypes.array.isRequired

    }

    render () {

    console.log(this.props);

    const {title, items} = this.props;

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} alt="logo" />

                <h1 className="App-title">Bienvenido!</h1>
        
                <ul className="Menu">
                    { items && items.map(
                        (item, key) => <li key={key}>
                                            <Link to={item.url}>
                                                {item.title}
                                            </Link>
                                        </li>
                        )
                    }
                </ul>
            </header>

        </div>

        );
    }
}

export default Header;