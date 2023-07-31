import React from 'react';



const Socials = () => {
    return (
        <div className="social-media">
            <a href = "https://twitter.com/home" className="social-icon" >
                <i className="fa-brands fa-twitter fa-beat" style={{color: "#32aefb" }}/>
            </a>
            <a href="https://www.google.com/" className="social-icon" >
                <i class="fa-brands fa-google fa-beat" style={{color: "#bb5c44" }}></i>
            </a>
            <a href="https://www.linkedin.com/" className="social-icon" >
                <i class="fa-brands fa-linkedin-in fa-beat" style={{color: "#3c5f9a" }}></i>
            </a>
        </div>
    );
}

export default Socials;