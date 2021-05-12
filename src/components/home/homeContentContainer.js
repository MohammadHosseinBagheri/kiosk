import Slider from "./../slider/slider";
import { connect } from "react-redux";
import Footer from "./../footer/footer";
import { Spinner } from "react-bootstrap";

const HomeContentContainer = (props) => {
  const { bestProducts, newestProducts } = props;
  let homeSliders =
    bestProducts.length > 0 ? (
      <>
        <Slider products={bestProducts} />
        <Slider products={newestProducts} />
      </>
    ) : (
      <div className="home-spinner d-flex justify-content-center">
        <Spinner animation="border" variant="primary" />
      </div>
    );

  return (
    <div className="home">
      {homeSliders} <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  bestProducts: state.bestProducts,
  newestProducts: state.newestProducts,
});

export default connect(mapStateToProps)(HomeContentContainer);
