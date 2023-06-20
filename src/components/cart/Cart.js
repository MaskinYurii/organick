import cartIcon from './../../icons/cart.svg';

import './cart.scss';
function Cart() {
    return(
        <div className={'cart'}>
            <div className="icon cart-icon">
                <img src={cartIcon} alt="cart"/>
            </div>
            Cart (0)
        </div>
    )
}

export default Cart;