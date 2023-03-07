import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Switch } from "react-router-dom";

import { Route } from "react-router-dom";

import Products from "./component/Products";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
      </Switch>
    </>
  );
}

export default App;
