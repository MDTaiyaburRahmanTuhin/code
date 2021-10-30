import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container ">
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
          <div className="col-md-6">
            <p className="title-1">
              Providing Special Care
            </p>
            <h1 className="title text-center mt-3 boled">
              Great taste that's fresh
              & consistent.
            </h1>
          </div>
          <div className="col-md-6">
            <img src="https://nuxt-mineralo.netlify.app/assets/img/banner/bottle.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
