import location from "../images/location-image.png";
import SecondryBtn from "../UI/SecondryBtn";
import locTag from "../images/location-tag.png";
import "./location.css";
const LocationSection = () => {
  return (
    <section className="location-section">
      <div>
        <img src={location} alt="location section" className="location-image" />
      </div>
      <div className="location-texts">
        <img src={locTag} alt="location tag" className="locTag" />
        <h2>
          We are Available to Ride you in a <span>Veriaty of Locations</span>
        </h2>
        <p>
          We provide issuers with the technology to create, issue, redeem and
          trade digital assets, security tokens, and more. We started Tokensoft
          in 2017 to streamline and improve the compliance and transfer
          procedures associated with securities transactions today.
        </p>
        <SecondryBtn text={"Discover Locations"} width={{ width: "201px" }} />
      </div>
    </section>
  );
};

export default LocationSection;
