import "./testimonial.css";
import { TestimonialData } from "../data.js";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Testimonial = () => {
  return (
    <section className="Testi">
      <div className="container sectionContainer">
        <div className="heading">
          <h2>
            Raving Reviews: Clients&apos; Experiences Speak Louder Than Words!
          </h2>
          <div>
            <AiOutlineArrowLeft className="arrow" />
            <AiOutlineArrowRight className="arrow" />
          </div>
        </div>

        <div className="testimonials">
          {TestimonialData.map(({ id, title, image, name, small }) => {
            return (
              <div className="testimonial" key={id}>
                <p>{title}</p>
                <div className="profile">
                  <img src={image} alt="image" />
                  <div className="profileName">
                    <small className="name">{name}</small>
                    <small className="role">{small}</small>
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

export default Testimonial;
