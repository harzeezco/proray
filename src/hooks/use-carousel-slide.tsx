import { useRef, useState } from "react";
import Slider from "react-slick"; // Import Slider as default

const useCarouselSlide = () => {
  const sliderRef = useRef<Slider | null>(null); // Ref type is Slider or null
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => {
      setActiveSlide(next); // Use number type for current and next
    },
  };

  const goToSlide = (index: number) => {
    sliderRef.current?.slickGoTo(index); // Optional chaining to avoid null errors
    setActiveSlide(index);
  };

  return { activeSlide, sliderRef, settings, goToSlide };
};

export default useCarouselSlide;
