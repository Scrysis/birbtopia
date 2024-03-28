import Logo from "../../assets/birbtopiaLogo.png";
import "./home.css";
import { ADD_BIRB } from "../../utils/mutations";
import  resolvers from "../../../../server/schemas/resolvers.js";




const Home = () => {
  const [name, setName] = useState("");

  const addBirb = resolvers.Mutation.addBirb;
  const onSubmitBirb = (name) => {

    addBirb(name);

  }

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
              <div className="adoptBirb">
              <input className="nameBirb"
              type="text"
              placeholder="Name your birb!"
              name="nameBirb"
              onChange={(e) => setName(e.target.value )}
              value={name}

              />
              <button className="adoptBtn" id="generateBirbBtn"
              onClick={onSubmitBirb(name)}>Adopt Birb!</button>
              </div>
              <h3>Here are all your Birbs!</h3>
              <h4 className="birbsStats">Click on any birb to view their stats!</h4></div>
            <div className="square">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
