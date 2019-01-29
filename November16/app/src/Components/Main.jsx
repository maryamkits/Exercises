import React, { Component } from 'react';


class Main extends Component {
    render() { 
        return (
            <div className="main__background">
                <div className="main">
                    <h1>Creative Design & Advertising.</h1>
                    <div className="main__poll">
                        <i class="fas fa-poll"></i>
                        <span>Proin pharetra volutpat est dictum. Cras pharestra molestie et laoreet tortor accumsan quis.</span>
                    </div>
                    <div className="button main__button">
                        <a href="#">LEARN MORE <i class="fas fa-angle-right"></i></a>
                    </div>
                    <div className="circles">
                        <button className="circle"></button>
                        <button className="circle"></button>
                        <button className="circle"></button>
                        <button className="circle"></button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Main;