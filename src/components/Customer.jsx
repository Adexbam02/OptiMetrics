import OptiMetricBanner from "../assets/OptiMetricBanner.png";
import "./customer.css";
import { useState } from "react";
import { AiFillDownCircle, AiFillUpCircle } from "react-icons/ai";

const Customer = () => {
  const [isUp, setIsUp] = useState(false);
  const [Up, setUp] = useState(false);

  const handleIconToggle = () => {
    setIsUp((prev) => !prev);
  };
  const handleIconToggle1 = () => {
    setUp((prev) => !prev);
  };
  return (
    <section className="customerSection">
      <div className="container customerContainer">
        <div className="pic">
          <img src={OptiMetricBanner} alt="image" />
        </div>

        <div className="botttomInfo">
          <h2>What Makes OptiMetrics a Powerful Platform.</h2>
          <div className="customerData">
            <span onClick={handleIconToggle}>
              <p>
                <div className="customerToggle">
                  <p>Harnessing Cutting-edge Algorithms</p>
                  {isUp ? <AiFillUpCircle /> : <AiFillDownCircle />}
                </div>
                <p className={`secondPg ${isUp ? "block" : "hidden"}`}>
                  “Unlocks deep insights, handling complex datasets with
                  precision.”
                </p>
              </p>
            </span>

            <span className="customerToggle" onClick={handleIconToggle1}>
              <p>
                <div className="customerToggle">
                  <p>Seamless Integration for Data Harmony</p>
                  {Up ? <AiFillUpCircle /> : <AiFillDownCircle />}
                </div>
                <p className={`secondPg ${Up ? "block" : "hidden"}`}>
                  “OptiMetrics seamlessly integrates with various data sources,
                  databases, and software platforms. Its compatibility ensures a
                  smooth workflow and data synchronization, making it an ideal
                  choice for businesses of all sizes seeking a unified data
                  analysis solution.”
                </p>
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customer;
