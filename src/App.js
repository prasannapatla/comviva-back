import { BrowserRouter, useHistory, Routes, Route } from 'react-router-dom'
import Login from './components/login';
import Signup from './components/signup'
import Forgot from './components/forgot_password'
import Reset from './components/resetpassword'
import Forgotmsg from './components/forgotmsg';
import Resetmsg from './components/resetmsg'
import Emailtemp from './components/emailtemplate'
// import Validation from './components/passwordvalidation'


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />}/>    
      <Route path="/signup" element={<Signup/>} />
      <Route exact path="/forgot" element={<Forgot/>} />
      <Route exact path="/reset" element={<Reset/>} />
      <Route exact path="/forgotmsg" element={<Forgotmsg/>} />
      <Route exact path="/resetmsg" element={<Resetmsg/>} />  
      <Route exact path="/email" element={<Emailtemp/>} />  
      {/* <Route exact path="/validation" element={<Validation/>} />   */}


    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
