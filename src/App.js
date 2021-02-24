import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { receiveProducts, receiveBestProducts, receiveNewestProducts, receiveComments } from "./redux/actions";
import Home from "./routes/home";
import About from "./routes/about";
import Cart from "./routes/cart"
import Application from "./routes/application"
import "./styles/index.scss";
import { connect } from "react-redux";
import { useEffect } from "react";
import Layout from "./hoc/layout";
import useFetch from "./hooks";



const App = (props) => {

  const { data } = useFetch(
    "https://still-headland-88471.herokuapp.com/api/applications/get"
  )

  const comments = [
    { "username": "علیرضا", "comment": "عالی عالی نصب کنید", "gender": "male" }, { "username": "محمدحسین", "comment": "بازی بسیار خوبیه دانلود کنید ممنون از سازندش", "gender": "male" }, { "username": "پریسا", "comment": "سلام لطفا کنترل با فرمان هم در بازی قرار دهید", "gender": "female" }, { "username": "احمد", "comment": "خیلی بازی بچگونس", "gender": "male" },
    { "username": "سارا", "comment": "عالی و پرتقالی🍊🍊", "gender": "female" }, { "username": "ریحانه", "comment": "بازی بسیار خوبیه دانلود کنید ممنون از سازندش", "gender": "female" }, { "username": "امیر", "comment": "خوب است بازی", "gender": "male" }, { "username": "مریم", "comment": "برنامه ی جالبیه خوشم اومد", "gender": "female" },
    { "username": "زینب", "comment": "نرم افزار عالی هست فقط یکم کند هستش ...", "gender": "female" }, { "username": "امیرعلی", "comment": "لایک", "gender": "male" }, { "username": "شیوا", "comment": "خوبه ولی بعضی وقت ها طبلیق میاره و هنگ میکنه", "gender": "female" }, { "username": "ممد", "comment": "بدک نیس", "gender": "male" },
  ]

  const users = [
    { "username": "Alireza", "password": "1234", "gender": "male" }, { "username": "MohammadHossein", "password": "5678", "gender": "male" }
  ]


  useEffect(() => {
    props.dispatch(receiveComments(comments))
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
