import useFetch from "../../hooks";
import Slider from "./../Slider/Slider";

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
