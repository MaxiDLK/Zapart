import React from "react";
import bannerfijo2 from "../../images/bannerfijo2.png";

const Banner2 = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={bannerfijo2} className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Banner2;
