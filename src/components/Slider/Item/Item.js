import classes from "./Item.module.css";

const Item = (props) => {
  return (
    <div className={classes.Item}>
      <img className={classes.image} src={props.src} />
      <p>{props.title}</p>
    </div>
  );
};

export default Item;
