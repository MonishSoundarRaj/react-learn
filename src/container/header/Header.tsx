import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fugit
          necessitatibus ad praesentium voluptatibus, doloremque impedit ex
          facere. Ratione nostrum modi labore deserunt molestiae assumenda
          accusamus quas et consectetur nam!
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address"/>
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="peple" />
          <p>1600 people requested access this site in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-img">
          <img src={ai} alt="ai" />
        </div>
    </div>
  );
};

export default Header;
