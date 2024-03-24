import "./home.css";
import Logo from "../assets/birbtopiaLogo.png";
import Sky from "../assets/cloud-sky-cartoon-background-blue-sky-with-white-clouds-flat-poster-or-flyer-cloudscape-panorama-pattern-seamless-colored-abstract-fluffy-texture-vector.jpg";

const Home = () => {
  return (
    <div className="container">
      <div className="homePage">
        <img src={Logo} alt="Logo" className="logo" />
        <div className="homePageHeader">
          HI User
          <div className="newContainer">
            <div className="subHomePageHeader">
              Welcome to Birbs, feel free to look around, get Birbs and feed
              them! If you like the game feel free to support our developers!
            </div>
          </div>
        </div>
      </div>
      <div className="lineBreak"></div>
      <img src={Sky} alt="Sky" className="SkyBackground" />
      <div className="Footer"> </div>
    </div>
  );
};
export default Home;
