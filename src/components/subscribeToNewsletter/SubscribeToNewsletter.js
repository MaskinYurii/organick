import Button from "../button/Button";

import './subscribeToNewsletter.scss';
function SubscribeToNewsletter() {
    return(
        <div className={'subscribe-banner'}>
            <h2>Subscribe to our Newsletter</h2>
            <div className="send-form">
                <input type="text" placeholder={'Your Email Address'}/>
                <Button theme={'dark'} text={'Subscribe'}/>
            </div>
        </div>
    )
}
export default SubscribeToNewsletter;