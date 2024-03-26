import Logo from "../../assets/birbtopiaLogo.png";
// import Sky from "../assets/cloud-sky-cartoon-background-blue-sky-with-white-clouds-flat-poster-or-flyer-cloudscape-panorama-pattern-seamless-colored-abstract-fluffy-texture-vector.jpg";
import "./home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="homePage">
        <img src={Logo} alt="Logo" className="logo" />
        <div className="homePageHeader">
          Hello, User!
          <div className="newContainer">
            <div className="subHomePageHeader">
              Welcome to *:･ﾟ✧ Birbtopia ✧･ﾟ:*! Feel free to look around, collect as many Birbs as your heart desires, and feed
              them!
            </div>
            <div className="usersBirbs">Here are all your Birbs!</div>
            <div>
              <h6>adding text here bc the background image does not extend if there is not enough content. pls replace this div with birbs</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
