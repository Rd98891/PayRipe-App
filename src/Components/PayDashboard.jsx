import LeftWing from './LeftWing';
import Top from './Top';
import LeftBottom from './LeftBottom';
import RightBottom from './RightBottom';

const PayDashboard = () => {
    return (
        <div className='dashboard'>
            <div className="left">
                <LeftWing />
            </div>
            
            <div className="right">
                <div className="top">
                    <Top />
                </div>

                <div className="leftbottom">
                    <LeftBottom />

                </div>

                <div className="rightbottom">
                    <RightBottom/>

                </div>
            </div>
            
        </div>
    );
}

export default PayDashboard;