import { software } from "../../data";
import TitleHeading from "../../components/TitleHeading";
import "../software/software.css";
const Software = () => {
  return (
    <>
      <div className="softwareHead">
        <TitleHeading
          small="Software"
          title="Unleashing Data Potential: Explore Our Powerful Data Analysis Software Suite!"
        />
      </div>

      <div className="wares">
        {software.map(
          ({
            id,
            image,
            title,
            desc,
            FC,
            UseCases,
            Benefits,
            Specifications,
          }) => {
            return (
              <div key={id} className="container ">
                <div className="softwares">
                  <div className="softwareDesc">
                    <div>
                      <img src={image} alt="" />
                    </div>

                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>

                  <div className="softwareContent">
                    <div className="Features">
                      {FC.map(({ one, two, three, features }) => {
                        return (
                          <div key={id}>
                            <h3>{features}</h3>
                            <p>{one}</p>
                            <p>{two}</p>
                            <p>{three}</p>
                          </div>
                        );
                      })}
                    </div>

                    <div className="UseCases">
                      {UseCases.map(({ one, two, three, UseCase }) => {
                        return (
                          <div key={1}>
                            <h3>{UseCase}</h3>
                            <p>{one}</p>
                            <p>{two}</p>
                            <p>{three}</p>
                          </div>
                        );
                      })}
                    </div>

                    <div className="Benefits">
                      {Benefits.map(({ one, two, three, Benefit }) => {
                        return (
                          <div key={2}>
                            <h3>{Benefit}</h3>
                            <p>{one}</p>
                            <p>{two}</p>
                            <p>{three}</p>
                          </div>
                        );
                      })}
                    </div>

                    <div className="Specifications">
                      {Specifications.map(
                        ({ one, two, three, Specification }) => {
                          return (
                            <div key={3}>
                              <h3>{Specification}</h3>
                              <p>{one}</p>
                              <p>{two}</p>
                              <p>{three}</p>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export default Software;
