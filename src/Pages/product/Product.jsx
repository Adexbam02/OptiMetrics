import TitleHeading from "../../components/TitleHeading";
import "../product/product.css";
import { AiFillRightCircle } from "react-icons/ai";
import { Products } from "../../data";

const Product = () => {
  return (
    <>
      <div className="productHead">
        <div className="container productHeadContainer">
          <TitleHeading
            small="Products"
            title="Empowering Insights: Discover Our Data-Driven Solutions and Services!"
          />
        </div>
      </div>

      {/* <div> */}
      {Products.map(({ id, image, title, paragraph }) => {
        return (
          // <div key={id} className={`product `}>
          <section
            key={id}
            className={`productsSection ${
              id % 2 === 0 ? "colorPrimary" : "row"
            }`}
          >
            <div
              className={`container productContainer ${
                id % 2 === 0 ? "reverse" : "ro"
              }`}
            >
              <div className="productContent">
                <h2>{title}</h2>
                <p>{paragraph}</p>
                <a
                  href="/"
                  className={`link ${id % 2 === 0 ? "colorPrimaryV" : "red"}`}
                >
                  Learn More <AiFillRightCircle />
                </a>
              </div>
              <div className="image">
                <img src={image} alt="" />
              </div>
            </div>
          </section>
          // </div>
        );
      })}
      {/* </div> */}
      
    </>
  );
};

export default Product;
