import React, { Component } from 'react';
import './header.css';

class Header extends Component { 
    render() { 
        return (
            <div>
                <img src="../background_img.jpg" alt="background" className="background_img" />
                <div className="header">
                    <div className="web_name">
                        <img src="../logo.jpg" alt="logo" className="logo" />
                        <span className="name">Mp3 Peep</span>
                    </div>
                    <nav className="links">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Explore</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </nav>
                    <button>
                        <i class="material-icons">manage_accounts</i>&nbsp;
                            Sign In &nbsp;
                    </button>
                </div>
                <div className="title">
                    <div className="title_container">
                        <h1>Music<br />For<br />Everyone.</h1>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Header;