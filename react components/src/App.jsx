import "./App.css";
import Accordian from "./components/accordian/accordian";
import RandomColor from "./components/random-color-gen";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image_slider/index";
import LoadMoreData from "./components/load-more-data";
function App() {
  return (
    <div className="App">
      {/* accordian component */}
      <Accordian />

      {/* random color component */}
      <RandomColor />

      {/* star rating component */}
      <StarRating />

      {/* image slider */}
      <ImageSlider url={"https://picsum.photos/v2/list"} page={5} limit={10} />

      {/* load more produts component */}
      <LoadMoreData/>
    </div>
  );
}

export default App;
