import "./Profile.css";
import Logo from "../../assets/birbtopiaLogo.png";
// import { useState } from "react";
// import favBirb from "../../assets/chungus.jpeg";

export default function Profile() {
    return (
        <div>
            <div className="bg-image">
                <img src={Logo} alt="Logo" className="logo" />
                <div className="profileSection">
                    <div className="userProfile">
                        <h1>User Bio</h1>
                        <div><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nam libero justo laoreet sit amet. Amet est placerat in egestas erat imperdiet sed. Suspendisse faucibus interdum posuere lorem. Vitae tempus quam pellentesque nec nam aliquam. Ultricies leo integer malesuada nunc vel risus. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Magna eget est lorem ipsum dolor sit amet. Adipiscing enim eu turpis egestas pretium aenean pharetra. Vel turpis nunc eget lorem dolor. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Enim diam vulputate ut pharetra sit amet aliquam id diam.</h3></div>
                {/* <button>Edit Profile</button>
                <button>Delete Account</button>  */}

                    </div>
                    
                    {/* <div className="favoriteBirbPhoto">
                        <h1>Favorite Birb</h1>
                        <img src={favBirb} alt="favorite birb" className="favBirbImg" />
                    </div> */}

                </div>
                <br></br><br></br>
                <br></br><br></br>

            </div>
        </div>
    );
}
