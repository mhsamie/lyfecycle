import "./banner.css";
import leftLight from "../images/leftlight.png";
// import inlineLogo from "../images/life.png";
import bannerPic from "../images/hero.png";
import rightLight from "../images/rightlight.png";
const Banner = () => {
  return (
    <>
      {" "}
      <img className="left-light" src={leftLight} alt="left light" />
      <section className="banner">
        <div className="head">
          <h1>Ride where the [LYFE] is Waiting for You</h1>
          <p class="description">
            Lyfecycle is great for any fitness level. Our great community
            provides a powerful combination of support, motivation and healthy
            competition to help you improve on your performance.
          </p>
          <div className="button-sec">
            <a href="google.com" class="btn-text">
              Get Started
            </a>
            <div className="hoverEffect"></div>
          </div>
        </div>
        <div>
          <img src={bannerPic} class="banner-image" alt="banner" />
        </div>
      </section>
      <img className="right-light" src={rightLight} alt="right light" />
    </>
  );
};

export default Banner;
