import TitleHeading from "./TitleHeading";
import { Blog } from "../data.js";
import "./blogpost.css";
const BlogPost = () => {
  return (
    <section className="blogSection">
      <div className="container blogContainer">
        <TitleHeading
          small="Our Blog"
          title="Data Insights Hub: Unlocking Knowledge and Powering Future Success!"
        />

        <div className="headings">
          {Blog.map(({ id, image, category, date }) => {
            return (
              <a key={id} className="Heading" href="/">
                <img className="contentImg" src={image} alt="Image" />
                <div className="featureInfo">
                  <p>{category}</p>
                  <small>{date}</small>
                </div>
              </a>
            );
          })}
        </div>

        <a href="/" className="btn loadMore greenBtn">
          Load more
        </a>
      </div>
    </section>
  );
};

export default BlogPost;
