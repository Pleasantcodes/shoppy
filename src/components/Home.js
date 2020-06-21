import React, { useState } from 'react';
import Img1 from '../img/img1.jpg';
import Img2 from '../img/img2.jpg';
import Img3 from '../img/img3.jpg';
import Img4 from '../img/img5.jpg';
import Img6 from '../img/img6.jpg';
import Img7 from '../img/img7.jpg';
import Img8 from '../img/img8.jpg';
import Img9 from '../img/img9.jpg';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';

const Home = (props) => {
    console.log(props);

    return (
        <div className="container">
            <div className="image">
                <img src={Img1} className="ir" alt="Nike React Vision"/>
                <h3>Nike React Vision</h3>
                <h3>₦55,000</h3>
                <a  className="addToCart cart1" href="#">Add to cart</a>
            </div>

            <div className="image">
                <img src={Img2} className="ir" alt="Nike Adapt Auto Max"/>
                <h3>Nike Adapt Auto Max</h3>
                <h3>₦75,000</h3>
                <a  className="addToCart cart2" href="#">Add to cart</a>
            </div>

            <div className="image">
                <img src={Img3}  className="ir" alt="Nike Air Force 1 Mid '07"/>
                <h3>Nike Air Force 1 Mid '07</h3>
                <h3>₦75,000</h3>
                <a  className="addToCart cart3" href="#">Add to cart</a>
            </div>

            <div className="image">
                <img src={Img4} className="ir" alt="Air Jordan 1 Low SE"/>
                <h3>Air Jordan 1 Low SE</h3>
                <h3>₦75,000</h3>
                <a  className="addToCart cart4" href="#">Add to cart</a>
            </div>

            <div className="image">
                <img src={Img4} className="ir" alt="Air Jordan 1 Low SE"/>
                <h3>Air Jordan 1 Low SE</h3>
                <h3>₦75,000</h3>
                <a  className="addToCart cart4" href="#">Add to cart</a>
            </div>

            <div className="image">
                <img src={Img4} className="ir" alt="Air Jordan 1 Low SE"/>
                <h3>Air Jordan 1 Low SE</h3>
                <h3>₦75,000</h3>
                <a  className="addToCart cart4" href="#">Add to cart</a>
            </div>

            <div className="image">
                <img src={Img4} className="ir" alt="Air Jordan 1 Low SE"/>
                <h3>Air Jordan 1 Low SE</h3>
                <h3>₦75,000</h3>
                <a  className="addToCart cart4" href="#">Add to cart</a>
            </div>

            <div className="image">
                <img src={Img4} className="ir" alt="Air Jordan 1 Low SE"/>
                <h3>Air Jordan 1 Low SE</h3>
                <h3>₦75,000</h3>
                <a  className="addToCart cart4" href="#">Add to cart</a>
            </div>

            
        </div>

       
    );
}


export default connect(null, { addBasket })(Home);