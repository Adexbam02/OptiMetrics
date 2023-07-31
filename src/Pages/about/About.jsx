import TitleHeading from "../../components/TitleHeading";
import "../about/about.css";
import { numbers } from "../../data";
import { Team } from "../../data";
import { Values } from "../../data";
import CTA from "../../components/CTA";
const about = () => {
  return (
    <>
      <section className="aboutPage">
        <div className="container aboutContainer">
          <TitleHeading
            small="About"
            title="Unveiling Our Data-Driven Journey: Exploring the Heart of OptiMetrics!"
            paragraph="Empowering Progress through Data Insights - 
            OptiMetrics: Your Strategic Partner in Unleashing the 
            Power of Data Analytics. 
            Discover the Future of Informed Decision-Making."
          />
        </div>
      </section>

      <section className="storySection">
        <div className="container ourStoryContainer">
          <TitleHeading
            small="Our Story"
            title="From Vision to Reality: The Incredible Journey of OptiMetrics!"
            paragraph=" OptiMetrics' journey began with a vision to revolutionize data analysis using cutting-edge technology and unwavering determination. Amidst fierce competition, we aimed high, striving to become one of the world's top 10 data analysis companies. Through relentless innovation, a client-centric approach, and a team of brilliant minds, we achieved the impossible.

                          Our breakthrough solutions in predictive analytics and data visualization earned recognition, while our commitment to clients fueled our growth. Embracing emerging technologies, we stayed ahead in a dynamic landscape. Overcoming challenges with resilience, our reputation spread through positive testimonials and word-of-mouth.

                          Today, standing proudly among the top 10, we cherish our journey. Gratitude goes to our team, clients, and partners for the unwavering support. As we continue our pursuit of excellence, we embrace future opportunities, shaping the world of data analysis and inspiring progress."
          />
        </div>
      </section>

      <section className="numberSection">
        <div className="container numbersContainer">
          <div>
            <TitleHeading
              small="Our Numbers"
              title="Data Pioneers: Celebrating OptiMetrics' Remarkable Milestones and Satisfied Clients!"
            />
            <div className="number">
              {numbers.map(({ id, title, small }) => {
                return (
                  <div key={id}>
                    <h1 className="numberStat">{title}</h1>
                    <small>{small}</small>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="teamSection">
        <div className="container teamContainer">
          <div>
            <TitleHeading
              small="Our Team"
              title="The leadership team"
              paragraph="OptiMetrics' leadership team exemplifies excellence and vision, inspiring a collaborative and innovative culture. With strategic guidance, they drive success, empowering each individual's growth and delivering exceptional client experiences."
            />
            <div className="team">
              {Team.map(({ id, image, title, small }) => {
                return (
                  <div className="teamMember" key={id}>
                    <img src={image} alt="image" />
                    <h3 className="">{title}</h3>
                    <small>{small}</small>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="valueSection">
        <div className="container valueContainer">
          <div>
            <TitleHeading
              small="Our Values"
              title="Things in we believe"
              paragraph="'In Things We Believe,' our core values drive us. Integrity, innovation, and client-centricity are the pillars of our commitment to excellence and empowering data-driven success."
            />
            <div className="values">
              {Values.map(({ id, image, title, small }) => {
                return (
                  <div key={id} className="value">
                    <img src={image} alt="image" />
                    <div className="valueContent">
                      <h3>{title}</h3>
                      <small>{small}</small>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section>
        <CTA />
      </section>
    </>
  );
};

export default about;
