import React from 'react'

const Insights = () => {
    return (
        <div className="insights__main">

            <div className="insights__left">
                <h6 className="title">insights</h6>
                <h1 className="quotes">Latet Blog Posts</h1>
                <div className="studio__line"></div>
                <p>Subscribe to receive free email updates</p>
                <span>Quisque ut quis saigitis!</span>
                <div className="input">
                    <input placeholder="Enter your email"/>
                </div>
                <div className="button subscribe__button">
                    <a href="#">Subscribe <i class="fas fa-angle-right"></i></a>
                </div>
            </div>

            <div className="insights__middle">
                <span className="num">01.</span>
                <h2>While Others Talk We Listen.</h2>
                <span className="date">oct. 16, 2018</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Cupiditate quas reiciendis dolore neque assumenda, natus blanditiis perspiciatis, 
                    tempora unde in ad ut officia facere recusandae. Quas reiciendis dolore neque.
                </p>
                <div className="studio__line"></div>
                <div className="button full_article__button">
                    <a href="#">Read Full Article <i class="fas fa-angle-right"></i></a>
                </div>
            </div>
            <div className="insights__right">
                <div>
                    <button className="featured__arrow insight__arrow"><i class="fas fa-angle-left"></i></button>
                    <button className="featured__arrow insight__arrow"><i class="fas fa-angle-right"></i></button>
                </div>
                <div className="button article__button">
                    <a href="#">all articles <i class="fas fa-angle-right"></i></a>
                </div>
            </div>
        </div>
    );
}
 
export default Insights;