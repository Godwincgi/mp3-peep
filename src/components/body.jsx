import React, { Component } from 'react';
import './body.css';

class Body extends Component {
    render() { 
        return (
            <div className="main">
                <div className="container">
                    <div className="top-part">
                        <i class="material-icons" id="icons">dashboard</i>
                        <i class="material-icons" id="icons">album</i>
                        <i class="material-icons" id="icons">person_pin</i>
                        <i class="material-icons" id="icons">mic</i>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Body;