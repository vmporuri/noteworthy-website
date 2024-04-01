import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function Carousel({ slides }) {
  const [slideNum, setSlideNum] = useState(0);

  const prevSlide = () => {
    setSlideNum((slideNum - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setSlideNum((slideNum + 1) % slides.length);
  };

  return (
    <div className="overflow-hidden relative w-1/5 h-96">
      <h1 className="text-center text-blue-400 text-2xl font-bold pb-3">
        Recent Events
      </h1>
      <div>
        <img
          src={slides[slideNum]}
          className="h-full w-full object-cover"
          alt={`Slide ${slideNum + 1}`}
        />
        <div className="absolute top-0 h-full w-full flex justify-between items-center text-white px-2 text-2xl">
          <button onClick={prevSlide}>
            <BsArrowLeftCircleFill />
          </button>
          <button onClick={nextSlide}>
            <BsArrowRightCircleFill />
          </button>
        </div>
      </div>
    </div>
  );
}
