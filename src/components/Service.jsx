import { Features } from "../data";
import TitleHeading from "./TitleHeading";
import "./service.css";
import { AiOutlineArrowRight } from "react-icons/ai";

const Service = () => {
  return (
    <section>
      <TitleHeading
        small={`Our Service`}
        title={`Handshake infographic mass market crowdfunding iteration.`}
      />

      <div className="container featureContainer">
        <div className="feature">
          {Features.map(({ id, image, text, small, Link }) => {
            return (
              <div key={id} className="Feature">
                <img src={image} alt="Image" />
                <div className="featureInfo">
                  <h3>{text}</h3>
                  <p>{small}</p>
                  <div className={`explore greenBtn`}>
                    <a href="/">{Link}</a>
                    <AiOutlineArrowRight />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
