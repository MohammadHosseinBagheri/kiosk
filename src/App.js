import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import shop from "./api/shop";
import { receiveProducts } from "./redux/actions";
import Home from "./routes/home";
import About from "./routes/about";
import "./styles/index.scss";
import { connect } from "react-redux";
import { useEffect } from "react";
import Layout from './hoc/layout'



const App = (props) => {
  useEffect(() => {
    shop.getProducts((products) => {
      props.dispatch(receiveProducts(products));
    });
  }, []);
  return (

    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Layout>
    </Router>

  );
};

export default connect()(App);
