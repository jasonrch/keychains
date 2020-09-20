import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import './Header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div id='header'>
                <div style={{"height":"50px"}}>
                    <FontAwesomeIcon icon={faCoffee} />
                </div>
                <div id='nav-links'>
                    <Link to='/'>
                        <FontAwesomeIcon size='2x' icon={faHome} />
                    </Link>
                    <Link to='/Cart'>
                        <FontAwesomeIcon size='2x' icon={faShoppingCart} />
                    </Link>
                    <Link to='/Contact'>
                        <FontAwesomeIcon size='2x' icon={faAddressCard} />
                    </Link>
                </div>
                <div>
                    <a src='profile btn' />
                </div>
            </div>
         );
    }
}
 
export default Header;