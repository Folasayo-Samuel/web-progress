import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import "./Fontawesome";
import Homepage from "./pages/homepage/homepage";
import "./App.css";
import Register from "./pages/products/gadget/Register";
import Comprehensive from "./pages/products/motor/Comprehensive";
import Thirdpartyform from "./pages/products/thirdparty/Register";
import AccidentRegister from "./pages/products/accident/Register";
import GadgetInsurance from "./pages/products/gadget/Gadget";
import ComContents from "./pages/products/motor/ComContent";
import AccidentContent from "./pages/products/accident/AccidentContent";


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
        <Route path="/comprehensivecontents">
          {/**Comprehensive Motor Insurance */}
          <ComContents />
        </Route>
        <Route path="/personalacc">
          {/**Personal Accident Insurance */}
          <AccidentContent />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
