import React from 'react';

const LeftPanel = () => {


    const handleClick = () => {
        const container = document.querySelector(".container");
        container.classList.add("sign-up-mode");
    }

    return (
        <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="btn transparent" id="sign-up-btn" onClick={handleClick}>Sign up</button>
            </div>
            <img src="images/svgs/subscriptions.svg" className="image" alt="Subscribe it"/>
        </div>
    );
}

export default LeftPanel;