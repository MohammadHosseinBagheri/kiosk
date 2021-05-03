import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import * as action from "./redux/actions";
import Home from "./routes/home";
import About from "./routes/about";
import Cart from "./routes/cart"
import Application from "./routes/application"
import "./styles/index.scss";
import { connect } from "react-redux";
import { useEffect } from "react";
import Layout from "./hoc/layout";
import useFetch from "./hooks";
import { users, comments, cartProducts, products } from './api'


const App = (props) => {

  const { data } = useFetch(
    "https://still-headland-88471.herokuapp.com/api/applications/get"
  )
  
  useEffect(() => {
    props.dispatch(action.recieveCartProducts(cartProducts))
    props.dispatch(action.recieveUsers(users))
    props.dispatch(action.receiveComments(comments))
    
    props.dispatch(action.receiveProducts(data));
    // props.dispatch(action.receiveProducts(products));

    props.dispatch(action.receiveBestProducts(props.products))
    props.dispatch(action.receiveNewestProducts(props.products))
  });

  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/cart" component={Cart} />
          <Route path="/app" component={Application} />
        </Switch>
      </Layout>
    </Router>
  );
};

const mapStateToProps = (state) => (
  {
    products: state.allProducts
  }
)



export default connect(mapStateToProps)(App);
