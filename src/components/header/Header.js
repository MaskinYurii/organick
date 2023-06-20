import Logo from "../logo/Logo";
import SearchField from "../searchField/SearchField";

import arrowDropdown from './../../icons/arrow-dropdown.svg';

import './header.scss'
import Cart from "../cart/Cart";

function Header() {
    return(
        <header className={'header py-20 px-16 flex justify-between items-center'}>
            <Logo/>

            <nav className="nav">
                <ul className={'flex gap-x-5'}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#" className={'flex gap-x-1.5 dropdown'}>
                        Pages
                        <img src={arrowDropdown} alt="dropdown"/>
                        <ul className={'hidden'}>

                        </ul>
                    </a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">News</a></li>
                </ul>
            </nav>

            <div className="additional flex gap-x-6">
                <SearchField/>
                <Cart/>
            </div>
        </header>
    )
}

export default Header;