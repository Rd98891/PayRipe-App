
const RightBottom = () => {
     return (
            <div className="rbottom">
                <h3>Order Summary</h3>
                <div className="steps">
                    <div className="shipping">
                        <div className="box">
                            <div className="icon one">
                                <i className="fas fa-dolly"></i>
                            </div>

                            <div className="data">
                                <span>Step 1</span>
                                <p>
                                    Shipping
                                </p>
                            </div >

                        </div>

                    </div>

                    <div className="payment">
                        <div className="box">
                            <div className="icon two">
                                <i className="fas fa-credit-card"></i>
                            </div>

                            <div className="data">
                                <span>Step 2</span>
                                <p>
                                    Payment
                                </p>
                            </div >

                        </div>

                    </div>

                    <div className="review">
                        <div className="box">
                            <div className="icon three">
                                <i className="fas fa-sync-alt"></i>
                            </div>

                            <div className="data">
                                <span>Step 1</span>
                                <p>
                                    Review
                                </p>
                            </div >

                        </div>

                    </div>

                </div>
                <div className="field">
                    <div className="company">
                        <p>
                            <img src="images/adidas.ico" alt="Adidas"/>
                            Adidas
                        </p>

                    </div>
                    <div className='billing'>
                        <p>Yezzy Scala<span>$6520.00</span></p>
                        <p>Estimated shipping<span>$220.45</span></p>
                        <p>Discount<span>$20.00</span></p>
                        <p>Total<span>$6720.45</span></p>
                    </div>
                    <div className="cardholder">
                        Rishu Dutta
                        <i className="fas fa-chevron-down"></i>
                    </div>
                    <div className="type">
                        Visa
                        <i className="fas fa-chevron-down"></i>
                    </div>
                    <div className="final">
                        <p>Total Amount : <span>$6720.45</span></p>
                    </div>

                </div>

            </div>
        );
}

export default RightBottom;
