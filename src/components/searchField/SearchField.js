import searchIcon from './../../icons/search.svg';

import './searchField.scss';
function searchField() {
    return(
        <div className={'search-field'}>
            <input type="text" className={'search-input'}/>
            <div className={'icon search-icon'}>
                <img src={searchIcon} alt="search"/>
            </div>
        </div>
    )
}

export default searchField;