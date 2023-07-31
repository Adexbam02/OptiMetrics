import "../components/hero.css";
import Button from "./Button";
import BarChart2 from "../assets/BarChart2.svg";
import BarsContainer from "../assets/BarsContainer.png";
import actionsBtn from "../assets/actionsBtn.png";
import pieGraph from "../assets/pieGraph.png";

const Hero = () => {
  return (
    <header>
      <div className="container headerContainer">
        <div className="headerCont">
          <div className="headerInfo">
            <h1>
              Empowering Innovation and Growth through Advanced Data Analysis.
            </h1>
            <p>
              Catalyze your business&apos;s success with our cutting-edge data
              analysis services. We harness the power of data to drive
              innovation, uncover growth opportunities, and optimize
              decision-making.
            </p>
            <div className="buttn">
              <Button
                className={`template greenBtn`}
                placeholder={"Request a Consultation"}
              />
              <Button className={`explore exploreHeroBtn`} placeholder={"Explore"} />
            </div>
          </div>
          <div className="headerStat">
            <div className="bars backdrop">
              <img className="actionBtn" src={actionsBtn} alt="actionBtn" />
              <img className="stat" src={BarsContainer} alt="BarsContainer" />
            </div>
            <div className="btmCharts">
              <div className="barChart backdrop">
                <img className="actionBtn" src={actionsBtn} alt="actionBtn" />
                <img className="stat" src={BarChart2} alt="BarChart2" />
              </div>
              <div className="pieChart backdrop">
                <img className="actionBtn" src={actionsBtn} alt="actionBtn" />
                <img className="stat" src={pieGraph} alt="pieGraph.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
