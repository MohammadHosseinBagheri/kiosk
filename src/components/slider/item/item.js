import img from "./../../../assets/icon/app.png";
import { connect } from 'react-redux'


const Item = (props) => {
  console.log(props)
  
  const slideClickedHandler = () => {
    const queryParams = []
    for(let i in props.product) {
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(props.product[i])) 
    } 
    queryParams.push('name='+ props.name)
    const queryString = queryParams.join('&')
    props.url.history.push({
      pathname: '/product',
      search: '?' + queryString
    })
  }
  
  return (
    <div className="sliderItem" onClick={slideClickedHandler}>
      <img className="sliderImage" src={img} />
      <p className="sliderTitle">{props.name}</p>
    </div>
  );
};

const mapStateToProps= state => ({
  url: state.homeUrlParams
})

export default connect(mapStateToProps)(Item);