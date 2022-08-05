import "./banner.css";
import leftLight from "../images/leftlight.png";
import bannerPic from "../images/hero.png";
import rightLight from "../images/rightlight.png";
import PrimeryBtn from "../UI/PrimeryBtn";
const Banner = () => {
  return (
    <>
      {" "}
      <img className="left-light" src={leftLight} alt="left light" />
      <section className="banner">
        <div className="head">
          <h1>
            Ride where the<span> [</span>LYFE<span>]</span> is Waiting for You
          </h1>
          <p className="description">
            Lyfecycle is great for any fitness level. Our great community
            provides a powerful combination of support, motivation and healthy
            competition to help you improve on your performance.
          </p>
          <PrimeryBtn />
        </div>
        <div>
          <img src={bannerPic} className="banner-image" alt="banner" />
        </div>
      </section>
      <img className="right-light" src={rightLight} alt="right light" />
    </>
  );
};

export default Banner;
