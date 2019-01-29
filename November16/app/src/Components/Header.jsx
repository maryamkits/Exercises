import React from 'react'
import Navigation from './Navigation'

const Header = () => {
    return ( 
        <div className="header">
            <h1 className="header__dopos">Dopos</h1>
            <Navigation />
            <span>LOG IN <i className="far fa-user"></i></span>
        </div> 
        );
}
 
export default Header;