import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./routes/home";
import "./styles/index.scss";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
