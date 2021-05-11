import Slider from "./../slider/slider";
import { connect } from "react-redux";
import Footer from "./../footer/footer";

const HomeContentContainer = (props) => {
  const { bestProducts, newestProducts } = props;

  return (
    <>
      <div className="home">
        <Slider products={bestProducts} />
        <Slider products={newestProducts} />
      </div>
      <Footer />
    </>
  );
};

const mapStateToProps = (state) => ({
  bestProducts: state.bestProducts,
  newestProducts: state.newestProducts,
});

export default connect(mapStateToProps)(HomeContentContainer);
