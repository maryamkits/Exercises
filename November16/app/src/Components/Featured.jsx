import React from 'react'

const Featured = () => {
    return (
        <div className="featured__main">

            <div className="featured__top">
                <h6 className="title">FEATURED</h6>
                <div className="featured">
                    <h1 className="quotes">Making Ideas Come To Life.</h1>
                    <div className="featured__nums">
                        <span className="first">01/ </span>
                        <span className="second"> 09</span>
                    </div>
                </div>
            </div>

            <div className="featured__gallery">
                <button className="featured__arrow"><i class="fas fa-angle-left"></i></button>
                <img src="images/character3.jpg"/>
                <button className="featured__arrow"><i class="fas fa-angle-right"></i></button>
            </div>

            <div className="featured__bottom">
                <div className="featured__bottom_left">
                    <p>Lorem ipsum dolor, sit amet consectetur, adipisicing elit.
                        Ea aliquid ducimus illum,
                        voluptate natus quidem voluptatibus.
                    </p>
                    <div className="button featured__button">
                            <a href="#">CASE STUDY</a>
                    </div>
                </div>
                <div className="featured_bottom_right">
                    <div className="right__box">
                        <h6 className="title">category</h6> 
                        <p>Design & Branding</p>
                        <div className="studio__line"></div>
                    </div>
                    <div className="right__box">
                        <h6 className="title">client</h6> 
                        <p>Cusco Barista</p>
                        <div className="studio__line"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Featured;