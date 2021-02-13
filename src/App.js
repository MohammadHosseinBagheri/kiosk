import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import shop from "./api/shop";
import { receiveProducts } from "./redux/actions";
import Home from "./routes/home";
import "./styles/index.scss";
import {connect } from 'react-redux'
import { useEffect } from "react";



const App = (props) => {
  useEffect(() => {
    shop.getProducts(products => {
      props.dispatch(receiveProducts(products))
    })
  }, [])
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default connect()(App);
