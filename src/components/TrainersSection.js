import SecondryBtn from "../UI/SecondryBtn";
import trainers from "../images/trainers.png";
import trainetTag from "../images/trainer-tag.png";
import "./trainers.css";

const TrainersSection = () => {
  return (
    <section className="trainers-sec">
      <div>
        <img src={trainetTag} alt="tag" className="trainer-tag" />
        <h2>
          A <span>Team of Experts </span>will Meet your Motivational Needs
        </h2>
        <p>
          We provide issuers with the technology to create, issue, redeem and
          trade digital assets, security tokens, and more. We started Tokensoft
          in 2017 to streamline and improve the compliance and transfer
          procedures associated with securities transactions today.
        </p>
        <SecondryBtn width={{ width: "190px" }} text={"Discover Trainers"} />
      </div>
      <div>
        <img src={trainers} alt="trainers" className="trainers-image" />
      </div>
    </section>
  );
};

export default TrainersSection;
