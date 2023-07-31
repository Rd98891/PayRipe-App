import './index.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import PayDashboard from './Components/PayDashboard';



function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dashboard" element={<PayDashboard />}></Route>
      </Routes>
    
  );
}

export default App;
