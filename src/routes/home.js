import { useEffect } from "react";
import HomeContainer from "../containers/homeContainer";
import { connect } from "react-redux";
import {homeUrlParams} from './../redux/actions'

const Home = props => {
  const urlParams = { history: props.history, match: props.match, location: props.location }
  useEffect(() => {
    props.dispatch(homeUrlParams(urlParams))
  }, [])
  return <HomeContainer />;
};

export default connect()(Home);