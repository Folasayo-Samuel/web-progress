import Homepage from "./pages/homepage/homepage";
import GadgetForm from "./pages/products/gadget/Register";
import "./App.css";

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "./pages/products/gadget/Register";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          {/* <GadgetForm /> */}
          <Register />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
