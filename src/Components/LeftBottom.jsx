import React from 'react';

const LeftBottom = (props) => {
        return (
            <div className="lbottom">
                <div className="box">
                    <h3>Payment Details</h3>
                    <div className="privacy">
                        <i className="fas fa-lock"></i>
                        <div className="privacy-text">
                            <h5>Card is Secure</h5>
                            <p>Your data is protecteed,<br/> everything is secure</p>
                        </div>
                    </div>
                </div>
                <div className="options">
                    <li>Credit Card<hr/></li>
                    <li>Upi<hr/></li>
                    <li>Paypal<hr/></li>
                    <li>Others<hr/></li>
                </div>
                <img src="images/svgs/Credit Card.svg" alt="My-card"/>

                <div className="card-info">
                    <div className="one">
                        <label htmlFor="mycard">Credit-card</label>
                        <div className="space">
                            <input type="text" id="mycard" placeholder="154 xxxx xxxx x159"></input>
                            <img src="/images/visa.png" alt="Visa"/>
                        </div>
                    </div>
                    <div className="two">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Rishu Dutta"></input>
                    </div>
                    <div className="three">
                        <div className="expiry">
                            <label htmlFor="expiry">Expiry date</label>
                            <input type="text" id="expiry" placeholder="08/22"></input>
                        </div>
                        <div className="cvv">
                            <label htmlFor="cvv">CVV</label>
                            <input type="password" id="cvv" placeholder="612"></input>
                        </div>

                    </div>

                </div>
                <div className="permission">
                    <button type='submit'>Confirm Order</button>
                    <button type='button'>Cancel</button>

                </div>

            
    
            </div>
        );
    
}

export default LeftBottom;