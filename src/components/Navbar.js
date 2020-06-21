import React from 'react';
import Img2 from '../img/gaji.jpg';

function Navbar() {
    return (
        <header>
            <div className='overlay'></div>
                <nav>
                <h2>Sálúbàtà by  <a href="#" ><img src={Img2} className="leo"/></a> </h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li className="cart"><a href="#">
                    <ion-icon name="cart-outline"></ion-icon>Cart <span>0</span>
                    </a></li>
                </ul>
                </nav>
      </header>
    );
}

export default Navbar;