import about from "../images/About-Image.png";
import topTag from "../images/tag.png";
import chart from "../images/chart.png";
import lamp from "../images/lamp-charge.png";
import trend from "../images/trend-up.png";
import share from "../images/share.png";
import "./aboutsection.css";
const AboutSection = () => {
  return (
    <section className="about-section">
      <img src={about} alt="about" className="about-image" />
      <div className="items-container">
        <img src={topTag} alt="top tag" className="tag-image" />
        <h1>
          Why you should choose <strong>Lyfe Cycle</strong>
        </h1>
        <div className="about-items">
          <div>
            <div className="items-title">
              <img src={chart} alt="chart" />
              <p>Agility</p>
            </div>
            <p className="items-description">
              Change is the only constant opportunity in our world.
            </p>
          </div>
          <div>
            <div className="items-title">
              <img src={share} alt="share" />
              <p>Connection</p>
            </div>
            <p className="items-description">
              We believe in building deep, human connections.
            </p>
          </div>
          <div>
            <div className="items-title">
              <img src={trend} alt="trend" />
              <p>Growth</p>
            </div>
            <p className="items-description">
              We value mastery not to achieve it, but to pursue it.
            </p>
          </div>
          <div>
            <div className="items-title">
              <img src={lamp} alt="lamp" />
              <p>Creativity</p>
            </div>
            <p className="items-description">
              Our team is fueled by a diversity of creative talents.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
