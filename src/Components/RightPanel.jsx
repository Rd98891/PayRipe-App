
const RightPanel = () => {

  const handleClick = () => {
      const container = document.querySelector(".container");
      container.classList.remove("sign-up-mode");
    }

    return (
        <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="btn transparent" id="sign-in-btn" onClick={handleClick}>Sign in</button>
            </div>
            <img src="images/svgs/Reading.svg" className="image" alt="" />
          </div>
    );
    
}

export default RightPanel;