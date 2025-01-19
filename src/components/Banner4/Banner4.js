import React from "react";
import bannerfijo4 from "../../images/bannerfijo4.png";

const Banner4 = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={bannerfijo4} className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Banner4;
