import React, { Component } from 'react';
// Stateless Functional Component - type sfc (shortcut)
const NavBar = ({ totalCounters }) => {
    console.log('Navbar - Rendered');
    return ( 
        <nav className="navbar navbar-light bg-light">
           <a className="navbar-brand" href="#navbar" id="navbar">Total {" "} 
           <span className="badge badge-pill badge-secondary">
            {totalCounters}</span></a>
        </nav>
     );
}

// class NavBar extends Component {
//     render() { 
        
//     }
// }
 
export default NavBar;