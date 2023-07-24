import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './page/User/Login';
import Sign from './page/User/Sign';
import Navi from './page/User/Navi';
import Uhome from './page/Chef/Uhome';
import Editc from './page/Chef/Editc';
import Menuc from './page/Chef/Menuc';
import Editd from './page/Chef/Editd';
import View from './page/Chef/View';
import Login1 from './page/Chef/Login1';
import UseHome from './page/User/UseHome';
import Eventdet from './page/User/Eventdet';
import Evmenu from './page/User/Evmenu';
import Findchef from './page/User/Findchef';
import Loginred from './page/User/Loginred';
import ViewProf from './page/User/ViewProf';
import Paymentdet from './page/User/Paymentdet';
import Signupchef from './page/Chef/Signupchef';
import Feedback from './page/Chef/Feedback';

function App() {
  return (
    <Router>
    <div>
      <Routes>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Feed" element={<Feedback/>}/>
      <Route path="/Sign" element={<Sign/>}/>
      <Route path="/" element={<Navi/>}/>
      <Route path="/Uhome" element={<Uhome/>}/>
      <Route path="/Editc" element={<Editc/>}/>
      <Route path="/Menuc" element={<Menuc/>}/>
      <Route path="/Editd" element={<Editd/>}/>
      <Route path="/View" element={<View/>}/>
      <Route path="/Login1" element={<Login1/>}/>
      <Route path="/Usehome" element={<UseHome/>}/>
      <Route path="/Eventdet" element={<Eventdet/>}/>
      <Route path="/Evmenu" element={<Evmenu/>}/>
      <Route path="/Findchef" element={<Findchef/>}/>
      <Route path="/Loginred" element={<Loginred/>}/>
      <Route path="/ViewProf" element={<ViewProf/>}/> 
      <Route path="/Payment" element={<Paymentdet/>}/> 
      <Route path="/Signupchef" element={<Signupchef/>}/>
      {/* <Route path="/" element={<Nav/>}/> */}
      {/* <Route path="/" element={<Login/>}/>
      <Route path="/Sign" element={<Sign/>}/> */}
      </Routes>
    </div>
    </Router>
  );
}

export default App;
