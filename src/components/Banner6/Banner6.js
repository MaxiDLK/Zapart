import React from "react";
import bannerfijo6 from "../../images/bannerfijo6.png";

const Banner6 = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={bannerfijo6} className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Banner6;
