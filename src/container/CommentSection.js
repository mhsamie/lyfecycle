import "./comments.css";
import Slider from "react-slick";
import PrimeryBtn from "../UI/PrimeryBtn";
const CommentSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <section>
      <div className="cpmment-navbar"></div>
      <Slider {...settings}>
        <div>1</div>
        <div>2</div>
      </Slider>
      <PrimeryBtn />
    </section>
  );
};

export default CommentSection;
