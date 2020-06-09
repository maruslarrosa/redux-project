import React from "react";
import Header from "./Components/Header";
import Products from "./Components/Products";
import NewProduct from "./Components/NewProduct";
import EditProduct from "./Components/EditProduct";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />

      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/products/new" component={NewProduct} />
          <Route exact path="/products/edit/:id" component={EditProduct} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
