import classes from "./Item.module.css";
import img from "./../../../assets/icon/app.png";

const Item = (props) => {
  return (
    <div className={classes.Item}>
      <img className={classes.image} src={img} />
      <p>{props.title}</p>
    </div>
  );
};

export default Item;
