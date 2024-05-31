import { useEffect } from "react";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";
const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setLoading(false);
        setImages(data);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  function handlePrev() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext  ()  {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };
  return (
    <div className="container">
      {loading && <p>loading data ! please wait</p>}
      {errorMsg && <p>Error Occured ! {errorMsg}</p>}

      <BsArrowLeftCircleFill
        onClick={handlePrev}
        className="arrow  arrowLeft"
      />
      {images && images.length ? (
        images.map((imageItem, index) => {
          return (
            <img
              src={imageItem.download_url}
              alt={imageItem.download_url}
              key={imageItem.id}
              className={
                currentSlide === index ? "currentImg" : "currentImg hidden"
              }
            />
          );
        })
      ) : (
        <p>No Data Found</p>
      )}

      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow  arrowRight"
      />

      <span className="circleIndicators">
        {images && images.length
          ? images.map((_, i) => {
              return <button 
              onClick={()=>setCurrentSlide(i)}
              key={i} 
              className={
                currentSlide === i? "currentIndicator" : "currentIndicator inActiveIndicator"
              }></button>;
            })
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
