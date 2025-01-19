import React from "react";
import bannerfijo3 from "../../images/bannerfijo3.png";

const Banner3 = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={bannerfijo3} className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Banner3;
