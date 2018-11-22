import React from 'react'
import Navigation from './Navigation'

const Footer = () => {
    return ( 
        <div>
            <div className="footer__line"></div>
            <div  className="footer">
                <h1 className="header__dopos">Dopos</h1>
                <div className="footer__right">
                    <Navigation />
                    <div className="logos">
                        <a href="#" className=""><i class="fab fa-facebook-f"></i></a>
                        <a href="#" className=""><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-vuejs"></i></a>
                    </div>

                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom__right">
                    <i class="far fa-copyright"></i> 
                    1996-2018 Dopos. All rights reserved.
                </div>
                <div className="footer__bottom__middle">
                    <div>
                        General Inquiries: hello@dops.studio
                    </div>
                    <div>
                        Press Inquiries: press@dopos.stuido
                    </div>
                <div className="footer__bottom__right">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms Of Use</a>
                </div>
                </div>
            </div>
        </div> 
        );
}
 
export default Footer;