import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './fontawesome';
import Homepage from "./pages/homepage/homepage";
import "./App.css";
import Register from "./pages/products/gadget/Register";
import Comprehensive from "./pages/products/motor/Comprehensive";
import Thirdpartyform from "./pages/products/thirdparty/register";
import AccidentRegister from "./pages/products/accident/register";
import GadgetInsurance from "./pages/products/gadget/gadget";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/register">
          {/* ComprehensiveRegister */}
          <Comprehensive />
        </Route>
        <Route path="/thirdpartyform">
          {/** ThirdParty Form */}
          <Thirdpartyform />
        </Route>
        <Route path="/login">
          <Register />
        </Route>
        <Route path="/accidentinsform">
          {/**Accident Insurance Form */}
          <AccidentRegister />
        </Route>
        <Route path="/gadgetinsurance">
          {/**Gadget Insurance */}
          <GadgetInsurance />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
