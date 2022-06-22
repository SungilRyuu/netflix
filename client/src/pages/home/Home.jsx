import Featured from "../../component/featured/Featured";
import List from "../../component/list/List";
import Navbar from "../../component/navbar/Navbar";
import "./home.scss";

const Home = ({ type }) => {
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
