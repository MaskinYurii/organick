import btnArrow from './../../icons/btn-arrow.svg';

import './button.scss';

function Button(props) {

    let {theme, text, arrow} = props;
    let btnClassName = 'button';

    if(!theme){
        theme = 'dark';
    }

    if (theme === 'dark'){
        btnClassName += ' button_dark';
    } else if(theme === 'yellow'){
        btnClassName += ' button_yellow';
    }

    let arrowImg = arrow ? <img src={btnArrow} alt="arrow"/> : null;
    return (
        <button className={btnClassName}>{text} {arrowImg}</button>
    );
}

export default Button;