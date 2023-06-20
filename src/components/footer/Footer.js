// import './footer.scss';
import Logo from "../logo/Logo";

import instIcon from './../../icons/inst.svg';
import facebookIcon from './../../icons/facebook.svg';
import twitterIcon from './../../icons/twitter.svg';
import pinterestIcon from './../../icons/pinterest.svg';
function Footer(props) {
    return (
        <footer className={'pt-28 pb-24'}>
            <div className="container px-12 flex gap-x-12 items-center justify-center">
                <div className={'text-right'}>
                    <h5>Contact Us</h5>

                    <div className={'mt-8 flex flex-col gap-8'}>
                        {contactItem('Email', 'needhelp@Organia.com')}
                        {contactItem('Phone', '666 888 888')}
                        {contactItem('Address', '88 road, borklyn street, USA')}
                    </div>
                </div>

                <div className={' px-10 flex flex-col items-center border-x border-zinc-300 border-solid h-80'}>
                    <Logo/>

                    <p className={'mt-6 text-center max-w-xl'}>
                        Simply dummy text of the printing and typesetting industry. <br/>
                        Lorem Ipsum simply dummy text of the printing
                    </p>

                    <div className={'flex gap-x-3.5 mt-12'}>
                        {socialIcon(instIcon)}
                        {socialIcon(facebookIcon)}
                        {socialIcon(twitterIcon)}
                        {socialIcon(pinterestIcon)}
                    </div>
                </div>

                <div className="text-left">
                    <h5>Utility Pages</h5>

                    <nav className={'mt-6'}>
                        <ul className={'flex flex-col gap-y-6'}>
                            <li><a href="#">Style Guide</a></li>
                            <li><a href="#">404 Not Found</a></li>
                            <li><a href="#">Password Protected</a></li>
                            <li><a href="#">Licences</a></li>
                            <li><a href="#">Changelog</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

const contactItem = (title, content) => {
    return(
        <div>
            <h6 className={'text-lg'}>{title}</h6>
            <p>{content}</p>
        </div>
    )
}
const socialIcon = (src) => {
    return(
        <a href={'#'} className="icon" style={{backgroundColor: '#EFF6F1'}}>
            <img src={src} alt=""/>
        </a>
    )
}

export default Footer;