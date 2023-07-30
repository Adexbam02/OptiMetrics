/* eslint-disable react/prop-types */
const ConnectCard = ({
  className,
  image,
  chart,
  percent,
  small,
  Ellipse1,
  ectext1,
  Ellipse2,
  ectext2,
  Ellipse3,
  ectext3,
  title,
  icon1,
  icon2,
  icon3,
  p1,
  p2,
  p3,
}) => {
  return (
    <div className={`card ${className}`}>
      <div className="imgStat">
        <img className="person" src={image} alt="Image" />
        <div className="chart">
          <img src={chart} alt="Chart" />
          <h3>{percent}</h3>
          <small>{small}</small>
          <div className="facts">
            <div className="fact">
              <img src={Ellipse1} alt="" />
              <small>{ectext1}</small>
            </div>
            <div className="fact">
              <img src={Ellipse2} alt="" />
              <small>{ectext2}</small>
            </div>
            <div className="fact">
              <img src={Ellipse3} alt="" />
              <small>{ectext3}</small>
            </div>
          </div>
        </div>
      </div>
      <div className="info">
        <h1>{title}</h1>
        <div className="point">
          <span>
            {icon1}
            <p>{p1}</p>
          </span>
          <span>
            {icon2}
            <p>{p2}</p>
          </span>
          <span>
            {icon3}
            <p>{p3}</p>
          </span>
        </div>
        <div className="btn startNow">Start now</div>
      </div>
    </div>
  );
};

export default ConnectCard;
