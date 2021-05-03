import Slider from "./../slider/slider";
import { connect } from 'react-redux'

const HomeContentContainer = (props) => {

  const { bestProducts, newestProducts } = props


  return (
    <div className='home'>
      <Slider products={bestProducts} />
      <Slider products={newestProducts} />
    </div>
  );
};


const mapStateToProps = (state) => (
  {
    bestProducts: state.bestProducts,
    newestProducts: state.newestProducts
  }
)


export default connect(mapStateToProps)(HomeContentContainer);
