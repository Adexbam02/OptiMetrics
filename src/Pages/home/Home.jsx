import Hero from "../../components/Hero";
// import Hero from "./components/Hero";
// import Service from "./components/Service";
import Connect from "../../components/Connect";
import Testimonial from "../../components/Testimonial";
import Customer from "../../components/Customer";
import BlogPost from "../../components/BlogPost";
import CTA from "../../components/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <Service /> */}
      <Connect />
      <Testimonial />
      <Customer />
      <BlogPost />
      <CTA />
    </>
  )
}

export default Home