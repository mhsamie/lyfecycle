import "./products.css";
import productOne from "../images/product1.png";
import productTwo from "../images/product2.png";
import productThree from "../images/product3.png";
import productFour from "../images/product4.png";
import Slider from "react-slick";

const Products = () => {
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
    slidesToShow: 5,
    slidesToScroll: 4,
  };
  return (
    <section>
      <div className="container">
        <div className="carosel-navbar">
          <p className="product-titel">
            Explore our <strong>Products</strong>
          </p>
          <div className="btn-prev-next">
            <button className="carosel-btn prev" onClick={previous}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
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
                class="h-5 w-5"
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
            <div className="product">
              <img src={productOne} alt="product #1" />
              <p>Accessories</p>
            </div>
          </div>
          <div>
            <div>
              <img src={productTwo} alt="product #1" />
              <p>Accessories</p>
            </div>
          </div>
          <div>
            <div>
              <img src={productThree} alt="product #1" />
              <p>Accessories</p>
            </div>
          </div>
          <div>
            <div>
              <img src={productFour} alt="product #1" />
              <p>Accessories</p>
            </div>
          </div>
          <div>
            <div>
              <img src={productOne} alt="product #1" />
              <p>Accessories</p>
            </div>
          </div>
          <div>
            <div>
              <img src={productOne} alt="product #1" />
              <p>Accessories</p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};
export default Products;
