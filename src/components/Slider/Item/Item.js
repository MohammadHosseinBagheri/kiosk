import img from "./../../../assets/icon/app.png";

const Item = (props) => {
  return (
    <div className='sliderItem'>
      <img className='sliderImage' src={img} />
      <p>{props.title}</p>
    </div>
  );
};

export default Item;
