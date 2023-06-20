import './logo.scss';

import logo from './../../icons/logo.svg';
function Logo() {
    return(
        <div className={'logo'}>
            <img src={logo} alt="logo"/>
            Organick
        </div>
    )
}
export default Logo;