import AboutContainer from "./../containers/aboutContainer";
import { connect } from "react-redux";
import { aboutUrlParams } from "./../redux/actions";
const About = () => {
  const urlParams = {
    history: props.history,
    match: props.match,
    location: props.location,
  };
  useEffect(() => {
    props.dispatch(aboutUrlParams(urlParams));
  });
  return <AboutContainer />;
};

export default connect()(About);
