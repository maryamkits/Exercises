import React, { Component } from 'react';

class Main extends Component {
    state = {  }
    render() { 
        return (
            <div className="main">
                <h1>Creative Design & Advertising.</h1>
                <div className="main__poll">
                    <i class="fas fa-poll"></i>
                    <span>Proin pharetra volutpat est dictum. Cras pharestra molestie et laoreet tortor accumsan quis.</span>
                </div>
                <div className="button">
                    <a href="#">LEARN MORE <i class="fas fa-caret-right"></i></a>
                </div>
            </div>
        );
    }
}
 
export default Main;