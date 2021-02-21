import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { receiveProducts, receiveBestProducts, receiveNewestProducts } from "./redux/actions";
import Home from "./routes/home";
import About from "./routes/about";
import Cart from './routes/cart'
import Login from './routes/login'
import "./styles/index.scss";
import { connect } from "react-redux";
import { useEffect } from "react";
import Layout from "./hoc/layout";
import useFetch from "./hooks";


const App = (props) => {

  const { data } = useFetch(
    "https://still-headland-88471.herokuapp.com/api/applications/get"
  )

  useEffect(() => {
    props.dispatch(receiveProducts(data));
    props.dispatch(receiveBestProducts(props.products))
    props.dispatch(receiveNewestProducts(props.products))
  });

  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/cart" component={Cart} />
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
