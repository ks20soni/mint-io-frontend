import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BrowserRouter,Switch, Route } from "react-router-dom";

import Home from "./Containers/Home";
import { login, selectUser } from "./feature/userSlice";
import Mint from "./Mint";
import Login from "./Components/auth/Login";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import LandingPage from './Components/LandingPage/LandingPage';

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if(authUser){
        dispatch(
          login({
          userName: authUser.displayName,
          photo: authUser.photoURL,
          email: authUser.email,
          uid: authUser.uid
        }))
        console.log("AuthUser", authUser);
      }
    })
  }, [dispatch])
    return (
      // <BrowserRouter>
      // <Switch>
      //   <Route exact path="/">
      //     <Mint/>
      //   </Route>
      // </Switch>
      // </BrowserRouter>
      <div className="App">
      {/* {
        user ? (<Mint/>) : (<Login/>)
      } */}
      {
        user ? (<Mint/>) : (<LandingPage/>)
      }
      {/* <Mint/> */}
        
      </div>
    )
};

export default App;
