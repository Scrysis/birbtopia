import Logo from "../../assets/birbtopiaLogo.png";
import "./home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="homePage">
        <img src={Logo} alt="Logo" className="logo" />
        <div className="homePageHeader">
          <h1> Hello, User!</h1>
          <div className="newContainer">
            <div className="subHomePageHeader">

              <h2>Welcome to *:･ﾟ✧ Birbtopia ✧･ﾟ:*! Feel free to look around, collect as many Birbs as your heart desires, and feed
                them!</h2>
            </div>
            <div className="birbLine"></div>
            <div className="usersBirbs">
              <button className="button" id="generateBirbBtn">Adopt Birb!</button>
              <h3>Here are all your Birbs!</h3></div>
            <div className="square"></div>
            <div>
              <h6 className="birbsStates">Click anyone to view their stats!</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
