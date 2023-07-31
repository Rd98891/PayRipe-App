const LeftWing = () => {
     return (
            <div className="navbar">

                <div id="brand-tolly">
                    <img src='./images/svgs/logo.svg' alt="Tolly Logo" className="Tolly" />
                    <span>Tolly</span>
                </div>

                <div className="list-item">
                    <ul>
                        <li><i className="fas fa-th-large" />Overview</li>
                        <li><i className="fas fa-wallet" />Payments</li>
                        <li><i className="fas fa-credit-card" />Cards</li>
                        <li><i className="fas fa-cog" />Settings</li>
                    </ul>
                </div>
                
                <div className="exit">
                    <span><i className="fas fa-sign-out-alt" />Sign Out</span>
                </div>
            </div>
        );
}

export default LeftWing;