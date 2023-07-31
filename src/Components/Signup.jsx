// import LeftWing from './LeftWing';
import Socials from './Socials';
import {Link} from 'react-router-dom';

const Signup = () => {
  return (
    <form className="sign-up-form" action="index.html" method="post">
              
              <h2 className="title">Sign up</h2>

              <div className="input-field">
                <i className="fa fa-user" />
                <input type="text" placeholder="Username" />
              </div>

              <div className="input-field">
                <i className="fa fa-envelope" />
                <input type="email" placeholder="Email" />
              </div>

              <div className="input-field">
                <i className="fa fa-lock" />
                <input type="password" placeholder="Password" />
              </div>
              <Link to="/dashboard" >
                <input type="submit" defaultValue="Sign up" className="btn solid" />
              </Link>
              <p className="social-text">Or Sign up with social platforms</p>
              
              <Socials />
            </form>
    
  );
}

export default Signup;
