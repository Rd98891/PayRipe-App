const Top = () => {
    return (
            <div className="top-elements">
                <h2>Dashboard Overview</h2>
                <div className="two">
                    <div className='searchdata'>
                        <i className="fas fa-search"></i>
                        <input type="search" placeholder="Search"></input>
                    </div>
                    <div className="notification">
                        
                        <i className="fas fa-bell"><div className="dot"></div></i>
                        

                    </div>
                    <div className="userdet">
                        <i className="fas fa-chevron-down"></i>
                        <p>Rengoku</p>
                        <div><img src="/images/bus.jpg" alt="bus"/></div>
                    </div>
                </div>
            </div>
        );
}

export default Top;