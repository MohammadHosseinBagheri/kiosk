// import img from ""
import { connect } from "react-redux"

const Item = (props) => {
  const slideClickedHandler = () => {
    const queryParams = []
    for (let i in props.product) {
      if (typeof props.product[i] === "object") {
        continue
      }
      queryParams.push(
        encodeURIComponent(i) + "=" + encodeURIComponent(props.product[i])
      )
    }
    const queryString = queryParams.join("&")
    props.url.history.push({
      pathname: "/app",
      search: "?" + queryString,
    })
  }

  return (
    <div className="sliderItem">
      <img className="sliderImage" src="./instagram.png" />
      <p className="sliderTitle">{props.product.name}</p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  url: state.homeUrlParams,
})

export default connect(mapStateToProps)(Item)
