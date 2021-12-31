import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        {/* <div className="a-card bg"></div> */}
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Hello, i am Ishtiaq Mahmood.
        </p>
        <p className="a-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish and beautiful Dapps, Smart contract, Blockchain based platforms, modern websites, web services and
            online stores.
        </p>
        <div className="a-award">
          {/* <img src={Award} alt="" className="a-award-img" /> */}
          <div className="a-award-texts">
            {/* <h4 className="a-award-title">International Design Awards 2021</h4> */}
            {/* <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
