import React from "react";
import bannerfijo5 from "../../images/bannerfijo5.png";

const Banner5 = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={bannerfijo5} className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Banner5;
