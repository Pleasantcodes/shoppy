import React, {useEffect} from 'react';
import Img2 from '../img/gaji.jpg';
import { connect } from 'react-redux';
import { getNumbers } from '../actions/getAction';

function Navbar(props) {
    console.log(props);

    useEffect(() => {
        getNumbers();
         
    }, [])
    return (
        <header>
            <div className='overlay'></div>
                <nav>
                <h2>Sálúbàtà by  <a href="#" ><img src={Img2} className="leo"/></a> </h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li className="cart"><a href="#">
                    <ion-icon name="cart-outline"></ion-icon>Cart <span>{props.basketProps.basketNumbers}</span>
                    </a></li>
                </ul>
                </nav>
      </header>
    );
}

const mapStateToProps = state => ({
    basketProps: state.basketState
}) 

export default connect(mapStateToProps, { getNumbers })(Navbar);