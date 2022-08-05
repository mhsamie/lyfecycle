import "./Upcoming.css";
import location from "../images/Vector.png";
import cardspicOne from "../images/image-blog.png";
import cardspicTwo from "../images/image-blog-2.png";
import cardspicThree from "../images/image-blog-3.png";
import Slider from "react-slick";
const UpCommingSection = () => {
  const next = () => {
    Slider.slickNext();
  };
  const previous = () => {
    Slider.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
  };
  return (
    <section>
      <div className="container">
        <div className="carosel-navbar">
          <p className="titel">
            Upcoming <strong>Events</strong>
          </p>
          <div className="btn-prev-next">
            <button className="carosel-btn prev" onClick={previous}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button className="carosel-btn next" onClick={next}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <Slider ref={(c) => (Slider = c)} {...settings}>
          <div>
            <div className="upcommingcard">
              <div className="picture-part">
                {" "}
                <img src={cardspicOne} alt="class cards" />
                <p className="time-section">24 Sep, 2022 . 12PM</p>{" "}
                {/*use moment library  */}
              </div>
              <h4>Lyfe Outdoor Tour of Beginners</h4>
              <div className="location-sec">
                <img src={location} alt="location" />
                <span>Kuwait City, Al-Shahanni Park</span>
              </div>
              <div className="bottom-card">
                <p id="price">Free</p>
                <p id="info">
                  <span>8</span> SEATS LEFT
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="upcommingcard">
              <div className="picture-part">
                {" "}
                <img src={cardspicTwo} alt="class cards" />
                <p className="time-section">24 Sep, 2022 . 12PM</p>{" "}
                {/*use moment library  */}
              </div>
              <h4>Lyfe Outdoor Tour of Beginners</h4>
              <div className="location-sec">
                <img src={location} alt="location" />
                <span>Kuwait City, Al-Shahanni Park</span>
              </div>
              <div className="bottom-card">
                <p id="price">$ 250</p>
                <p id="info">
                  <span>8</span> SEATS LEFT
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="upcommingcard">
              <div className="picture-part">
                {" "}
                <img src={cardspicThree} alt="class cards" />
                <p className="time-section">24 Sep, 2022 . 12PM</p>{" "}
                {/*use moment library  */}
              </div>
              <h4>Lyfe Outdoor Tour of Beginners</h4>
              <div className="location-sec">
                <img src={location} alt="location" />
                <span>Kuwait City, Al-Shahanni Park</span>
              </div>
              <div className="bottom-card">
                <p id="price">Free</p>
                <p id="info">
                  <span>8</span> SEATS LEFT
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="upcommingcard">
              <div className="picture-part">
                {" "}
                <img src={cardspicOne} alt="class cards" />
                <p className="time-section">24 Sep, 2022 . 12PM</p>{" "}
                {/*use moment library  */}
              </div>
              <h4>Lyfe Outdoor Tour of Beginners</h4>
              <div className="location-sec">
                <img src={location} alt="location" />
                <span>Kuwait City, Al-Shahanni Park</span>
              </div>
              <div className="bottom-card">
                <p id="price">Free</p>
                <p id="info">
                  <span>8</span> SEATS LEFT
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="upcommingcard">
              <div className="picture-part">
                {" "}
                <img src={cardspicTwo} alt="class cards" />
                <p className="time-section">24 Sep, 2022 . 12PM</p>{" "}
                {/*use moment library  */}
              </div>
              <h4>Lyfe Outdoor Tour of Beginners</h4>
              <div className="location-sec">
                <img src={location} alt="location" />
                <span>Kuwait City, Al-Shahanni Park</span>
              </div>
              <div className="bottom-card">
                <p id="price">$ 250</p>
                <p id="info">
                  <span>8</span> SEATS LEFT
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="upcommingcard">
              <div className="picture-part">
                {" "}
                <img src={cardspicThree} alt="class cards" />
                <p className="time-section">24 Sep, 2022 . 12PM</p>{" "}
                {/*use moment library  */}
              </div>
              <h4>Lyfe Outdoor Tour of Beginners</h4>
              <div className="location-sec">
                <img src={location} alt="location" />
                <span>Kuwait City, Al-Shahanni Park</span>
              </div>
              <div className="bottom-card">
                <p id="price">Free</p>
                <p id="info">
                  <span>8</span> SEATS LEFT
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="upcommingcard">
              <div className="picture-part">
                {" "}
                <img src={cardspicOne} alt="class cards" />
                <p className="time-section">24 Sep, 2022 . 12PM</p>{" "}
                {/*use moment library  */}
              </div>
              <h4>Lyfe Outdoor Tour of Beginners</h4>
              <div className="location-sec">
                <img src={location} alt="location" />
                <span>Kuwait City, Al-Shahanni Park</span>
              </div>
              <div className="bottom-card">
                <p id="price">Free</p>
                <p id="info">
                  <span>8</span> SEATS LEFT
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="upcommingcard">
              <div className="picture-part">
                {" "}
                <img src={cardspicTwo} alt="class cards" />
                <p className="time-section">24 Sep, 2022 . 12PM</p>{" "}
                {/*use moment library  */}
              </div>
              <h4>Lyfe Outdoor Tour of Beginners</h4>
              <div className="location-sec">
                <img src={location} alt="location" />
                <span>Kuwait City, Al-Shahanni Park</span>
              </div>
              <div className="bottom-card">
                <p id="price">$ 250</p>
                <p id="info">
                  <span>8</span> SEATS LEFT
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="upcommingcard">
              <div className="picture-part">
                {" "}
                <img src={cardspicThree} alt="class cards" />
                <p className="time-section">24 Sep, 2022 . 12PM</p>{" "}
                {/*use moment library  */}
              </div>
              <h4>Lyfe Outdoor Tour of Beginners</h4>
              <div className="location-sec">
                <img src={location} alt="location" />
                <span>Kuwait City, Al-Shahanni Park</span>
              </div>
              <div className="bottom-card">
                <p id="price">Free</p>
                <p id="info">
                  <span>8</span> SEATS LEFT
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default UpCommingSection;
