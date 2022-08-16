import "./comments.css";
import commentTag from "../images/comment.png";
import smile from "../images/smile.png";
import glow from "../images/glow.png";
import quote from "../images/quote-down.png";
import Slider from "react-slick";

import profile from "../images/profile.png";
import SamplePrevArrow from "../UI/PrevArrow";
import SampleNextArrow from "../UI/NextArrow";
import { useRef } from "react";

//
const CommentSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
  };
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const slider = useRef(null);
  return (
    <section className="comments">
      <div id="prev-arrow">
        {" "}
        <SamplePrevArrow previous={previous} />
      </div>
      <div id="next-arrow">
        <SampleNextArrow next={next} />
      </div>

      <div className="comment-navbar">
        <img src={commentTag} alt="comment tag" className="commentTag" />
        <h2>
          What our Trainees <span>Say About Us</span>
        </h2>
        <img src={smile} alt="smile" className="smile-img" />
        <img src={glow} alt="glow" className="glow-img" />
        <img src={quote} alt="qoute" className="quote-img" />
      </div>
      <div className="slider-container">
        <Slider ref={slider} {...settings}>
          <div>
            <div className="comment">
              <p>
                “Hyped, inspired, and empowered. Those are the feels. My music
                is intense and I don’t mind if you want to ride or dance to it
              </p>
              <div className="personal-info">
                <p>
                  Mohammed Salah<span>Football Player, Egypt</span>
                </p>
                <img src={profile} alt="profile" />
              </div>
            </div>
          </div>
          <div>
            <div className="comment">
              <p>
                “Hyped, inspired, and empowered. Those are the feels. My music
                is intense and I don’t mind if you want to ride or dance to it
              </p>
              <div className="personal-info">
                <p>
                  Mohammed Salah<span>Football Player, Egypt</span>
                </p>
                <img src={profile} alt="profile" />
              </div>
            </div>
          </div>
          <div>
            <div className="comment">
              <p>
                “Hyped, inspired, and empowered. Those are the feels. My music
                is intense and I don’t mind if you want to ride or dance to it
              </p>
              <div className="personal-info">
                <p>
                  Mohammed Salah<span>Football Player, Egypt</span>
                </p>
                <img src={profile} alt="profile" />
              </div>
            </div>
          </div>
          <div>
            <div className="comment">
              <p>
                “Hyped, inspired, and empowered. Those are the feels. My music
                is intense and I don’t mind if you want to ride or dance to it
              </p>
              <div className="personal-info">
                <p>
                  Mohammed Salah<span>Football Player, Egypt</span>
                </p>
                <img src={profile} alt="profile" />
              </div>
            </div>
          </div>
          <div>
            <div className="comment">
              <p>
                “Hyped, inspired, and empowered. Those are the feels. My music
                is intense and I don’t mind if you want to ride or dance to it
              </p>
              <div className="personal-info">
                <p>
                  Mohammed Salah
                  <span>Football Player, Egypt</span>
                </p>

                <img src={profile} alt="profile" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default CommentSection;
