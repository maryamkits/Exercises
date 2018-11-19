import React from 'react'
import StudioPohots from './StudioPhotos'

const Studio = () => {
    return (
        <div className="studio__main">
            <div className="studio">
                <h6 className="title">STUDIO</h6>
                <h1 className="quotes">Design Solutions For Any Media.</h1>
                <div className="studio__line"></div>
                <p>Suspendisse eget est at bendum dui elit, aliquam vel lacus a felis.</p>
                <div className="button studio__button">
                    <a href="#">LEARN MORE</a>
                </div>
            </div>
            <StudioPohots />
        </div>
    );
}
 
export default Studio;