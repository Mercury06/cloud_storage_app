import React, { useEffect} from "react";
import Navbar from "./navbar/navbar";
//import s from '../components/app.scss'
import { Route, Routes, Navigate } from "react-router-dom";
import Registration from "./autorization/Registration"
import Login from "./autorization/Login"
import { useSelector, useDispatch } from "react-redux";
import { auth } from "./../actions/users"
import { useStore } from 'react-redux'
import Disk from "./disk/Disk";

function App() {

  const isAuth = useSelector( state => state.user.isAuth )
  const dispatch = useDispatch()
  const store = useStore()
  console.log(store.getState())
  
  useEffect(() => {
    dispatch(auth())    
  })

  return (
    
   < >         
          <Navbar />
          
        {/* <div className="wrap"> */}
        <div>
          { !isAuth ? 
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />           
          </Routes> 
          :
          <Routes>
            <Route path="/disk" element={<Disk />} />
            <Route path="/login" element={<Navigate to="/disk" replace />} />              
          </Routes> }  
        </div>

    </>
    //  </BrowserRouter>
  );
}

export default App;
