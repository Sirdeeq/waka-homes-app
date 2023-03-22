import React, { useRef } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import ArrowBack from "../assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../assets/Icon/eva_arrow-next-fill.svg";

const PropertyType = ({ data }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    customPaging: () => (
      <a href="/">
        <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
      </a>
    ),
    dotsClass: "slick-dots w-max absolute mt-20",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrev = () => sliderRef.current.slickPrev();
  const handleNext = () => sliderRef.current.slickNext();

  if (!data || !Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <>
      <Slider {...settings} ref={sliderRef}>
        {data.map((item, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="">
                  <img
                    src={item.image}
                    width={300}
                    height={200}
                    alt={item.nametext}
                  />
                  <div className="flex flex-row  ml-5  text-left ">
                    <p className="text-lg px-5 text-black-600 capitalize">
                      {item.name}
                    </p>
                    <p className="text-sm text-right text-black-500 ">
                      {item.number},
                      <span className="lowercase">{item.nametext}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={handlePrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={handleNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

PropertyType.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      nametext: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ).isRequired,
};
PropertyType.defaultProps = {
  data: [], // default value
};
export default PropertyType;
