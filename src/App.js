import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { receiveProducts } from "./redux/actions";
import Home from "./routes/home";
import About from "./routes/about";
import "./styles/index.scss";
import { connect } from "react-redux";
import { useEffect } from "react";
import Layout from "./hoc/layout";
import useFetch from "./hooks";

const App = (props) => {

  const { data } = useFetch(
    "https://cors-anywhere.herokuapp.com/https://still-headland-88471.herokuapp.com/api/applications/get"
  )

  useEffect(() => {
    props.dispatch(receiveProducts(data));
  });
  
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
