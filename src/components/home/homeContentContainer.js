import Slider from "./../slider/slider";
import useFetch from "../../hooks";

const HomeContentContainer = () => {
  const { error, success, data, isFetching } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(error, success, data, isFetching);
  return (
    <div>
      <Slider />
    </div>
  );
};

export default HomeContentContainer;
