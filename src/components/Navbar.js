import React, {useEffect} from 'react';
import Img2 from '../img/gaji.jpg';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';
import { Link } from 'react-router-dom';

function Navbar(props) {
    console.log(props);

    useEffect(() => {
        getNumbers();
         
    }, []);
    return (
        <header>
            <div className='overlay'></div>
                <nav>
                <h2>Sálúbàtà by  <a href="http://pleasantcodes.com/"  target="_blank"><img src={Img2} className="leo"/></a> </h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    
                    <li className="cart"><Link to="/cart">
                    <ion-icon name="cart-outline"></ion-icon>Cart <span>{props.basketProps.basketNumbers}</span>
                    </Link></li>
                </ul>
                </nav>
      </header>
    );
}

const mapStateToProps = state => ({
    basketProps: state.basketState
}) 

export default connect(mapStateToProps, { getNumbers })(Navbar);