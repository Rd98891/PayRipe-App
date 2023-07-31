import { useState } from 'react';
import Socials from './Socials';


const Signin = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault()
    const newEntry = {email : email, password: password};
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  }
  

  let url = " ";


  return (
    <form className="sign-in-form"  action="" onSubmit={submitForm} >
              
              <h2 className="title">Sign in</h2>
              
              <div className="input-field">
                <i className="fa fa-user" />
                <input type="text" placeholder="Username" name="email" id="email" autoComplete="off"
                 value={email}
                 onChange = {(event) => setEmail(event.target.value)}
                
                />
              </div>
              
              <div className="input-field">
                <i className="fa fa-lock" />
                <input type="password" placeholder="Password"  name ="password" id="password" autoComplete="off"
                 value={password}
                 onChange = {(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="reset">
                <a href={url}> Forgot Password ? </a>
              </div>
              
              <input type="submit" defaultValue="Sign in" className="btn solid" />

              <p className="social-text">Or Sign in with social platforms</p>
              
              <Socials />
            </form>   
        );
     
  
}

export default Signin;