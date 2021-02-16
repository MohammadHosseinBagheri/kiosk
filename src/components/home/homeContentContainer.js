import Slider from "./../slider/slider";
import { connect } from 'react-redux'
import { receiveBestProducts, receiveNewestProducts } from './../../redux/actions'
import { useEffect } from "react";


const HomeContentContainer = (props) => {

  const { products, bestProducts, newestProducts } = props

  useEffect(() => {
    props.dispatch(receiveBestProducts(products))
    props.dispatch(receiveNewestProducts(products))
  })

  return (
    <div>
      <Slider products={bestProducts} />
      <Slider products={newestProducts} />
    </div>
  );
};


const mapStateToProps = (state) => (
  {
    products: state.allProducts,
    bestProducts: state.bestProducts,
    newestProducts: state.newestProducts
  }
)


export default connect(mapStateToProps)(HomeContentContainer);
