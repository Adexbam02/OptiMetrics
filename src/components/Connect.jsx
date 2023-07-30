import { AiFillCheckCircle } from "react-icons/ai";
import { LiaFeatherAltSolid } from "react-icons/lia";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { VscSymbolEvent } from "react-icons/vsc";
import ma1 from "../assets/ma1.png";
import blogImg2 from "../assets/blogImg2.png";
import BarChart3 from "../assets/BarChart3.svg";
import PieGraphs3 from "../assets/PieGraph3.svg";
import Ellipse1 from "../assets/Ellipse1.svg";
import Ellipse2 from "../assets/Ellipse2.svg";
import Ellipse3 from "../assets/Ellipse3.svg";
import ConnectCard from "../components/ConnectCard";

import "./connect.css";
const Connect = () => {
  return (
    <section>
      <div className="container connectContainer">
        <ConnectCard
          image={ma1}
          chart={BarChart3}
          percent="46%"
          small="More clients served in May"
          title="Exceeding Expectations: Our Unwavering Commitment to Serving Clients with Excellence!"
          icon1={<AiFillCheckCircle />}
          icon2={<AiFillCheckCircle />}
          icon3={<AiFillCheckCircle />}
          p1="We connect our customers with the best."
          p2="Expert Team of Analysts."
          p3="Continuous Innovation in data analysis."
        />

        <ConnectCard
          className="reverse"
          image={blogImg2}
          chart={PieGraphs3}
          Ellipse1={Ellipse1}
          // ectext1="35% -  Agile Development"
          Ellipse2={Ellipse2}
          // ectext2="30% -  Investor bandwidth"
          Ellipse3={Ellipse3}
          // ectext3="35% -  A/B testing "
          title="Fostering Connections: Uniting Clients for Collaborative Success and Endless Possibilities!"
          icon1={<LiaFeatherAltSolid />}
          icon2={<VscSymbolEvent />}
          icon3={<VscWorkspaceTrusted />}
          p1="Client-Centric Approach."
          p2="Engaging Workshops and Events."
          p3="Ongoing Support and Guidance."
        />
      </div>
    </section>
  );
};

export default Connect;
