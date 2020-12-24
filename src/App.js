import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Bestdeals from './Bestdeals';
import Latestmobile from './Latestmobile';
import Reviews from './Reviews';
import News from './News';
import Navbar from './Navbar';
import Footer from "./Footer";
import { Redirect, Route, Switch } from "react-router-dom";


const App=()=>{
  return(
    <>
      <Navbar/>
      <Switch>
      <Route exact path="/bestdeals" component={Bestdeals} />
      <Route exact path="/latestmobile" component={Latestmobile} />
      <Route exact path="/review" component={Reviews} />
      <Route exact path="/news" component={News} />
      </Switch>
      <Redirect to="/bestdeals" />   
      <Footer/> 
    </>

  );
};
export default App;
