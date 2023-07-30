// eslint-disable-next-line react/prop-types
const TitleHeading = ({ small, title, paragraph }) => {
  return (
    <div className={`titleContainer titleHeading`}>
      <small>{small}</small>
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </div>
  );
};

export default TitleHeading;
