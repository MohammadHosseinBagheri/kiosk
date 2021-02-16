import Slider from "./../slider/slider";
import useFetch from "../../hooks";
import { connect } from 'react-redux'



const HomeContentContainer = (props) => {

  const { products } = props


  return (
    <div>
      <Slider products={products} />
      <Slider products={products} />
    </div>
  );
};


const getProducts = (products) =>
  Object.keys(products).map((id) => products[id]);

const mapStateToProps = (state) => ({ products: getProducts(state.products) });


export default connect(mapStateToProps)(HomeContentContainer);
