import athleteTag from "../images/athlete-tag.png";
import PrimeryBtn from "../UI/PrimeryBtn";
import vectorOne from "../images/bgVector1.png";
import vectorTwo from "../images/bgvector2.png";
import vectorThree from "../images/bgVector3.png";
import athlete from "../images/athlete-image.png";
import "./bottomSection.css";
const ButtomStartSection = () => {
  return (
    <section className="bottom-start">
      <div className="text-container">
        <img alt="athlete-tag" src={athleteTag} className="athlete-tag" />
        <h1>
          Let’s Get you <span>on a Bike</span>
        </h1>
        <PrimeryBtn />
      </div>
      <div>
        <img id="vector-one" alt="bg vector" src={vectorOne} />
        <img id="vector-two" alt="bg vector" src={vectorTwo} />
        <img id="vector-three" alt="bg vector" src={vectorThree} />
        <img id="athlete-image" src={athlete} alt="athlete" />
      </div>
    </section>
  );
};

export default ButtomStartSection;
