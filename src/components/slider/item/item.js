import img from "./../../../assets/icon/app.png";

const Item = (props) => {
  return (
    <div className="sliderItem">
      <img className="sliderImage" src={img} />
      <p className="sliderTitle">{props.name}</p>
    </div>
  );
};

export default Item;
