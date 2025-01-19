import React from "react";
import bannerfijo1 from "../../images/bannerfijo1.png";

const Banner1 = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={bannerfijo1} className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Banner1;
