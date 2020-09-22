import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Switch, Route } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <div>
      <Container>
        <Navi />
        <Switch>
          <Route path='/' exact component={Dashboard}></Route>
          <Route path='/product' exact component={Dashboard}></Route>
          <Route path='/cart' exact component={CartDetail}></Route>
          <Route path='/saveProduct/:productId' component={AddOrUpdateProduct}></Route>
          <Route path='/saveProduct' component={AddOrUpdateProduct}></Route>
          <Route  exact component={NotFound}></Route>

        </Switch>
       
      </Container>
    </div>
  );
}

export default App;
