import Signup from './Signup';
import Signin from './Signin';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

const Home = () => {
    return (
        <div className='container'>
            <div className="forms-container">
                <div className="signin-signup">
                    <Signin />
                    <Signup />
                </div>
            </div>
            <div className="panels-container">
                <LeftPanel />
                <RightPanel />    
            </div>
        </div>
        );
    }


export default Home;