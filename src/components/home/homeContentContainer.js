import Slider from "./../slider/slider"
import { connect } from "react-redux"
import Footer from "./../footer/footer"
import { Spinner } from "react-bootstrap"

const HomeContentContainer = (props) => {
  const { bestProducts, newestProducts, freeProducts, allProducts } = props
  let homeSliders =
    allProducts.length > 0 ? (
      <>
        <Slider products={allProducts} title="بهترین برنامه ها" />
        {/* <Slider products={newestProducts} title="جدیدترین برنامه ها" />
        <Slider products={freeProducts} title="برنامه های رایگان" /> */}
      </>
    ) : (
      <div className="home-spinner d-flex justify-content-center">
        <Spinner animation="border" variant="primary" />
      </div>
    )

  return (
    <div className="home">
      {homeSliders}
      {/*  <Footer /> */}
    </div>
  )
}

const mapStateToProps = (state) => ({
  // bestProducts: state.bestProducts,
  // newestProducts: state.newestProducts,
  // freeProducts: state.freeProducts,
  allProducts: state.allProducts,
})

export default connect(mapStateToProps)(HomeContentContainer)
