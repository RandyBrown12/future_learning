import { Link } from "react-router-dom";
import Nav from "../Nav";
import AudioPlayer from "../AudioPlayer";

const MainMenu = () => {
  return (
    <div>
      <div className="space_font">
        <Nav />
      </div>
      <div className="center">
        <h1 className="space_font white_text game-header">
          {" "}
          The Learning Project{" "}
        </h1>
        <div className="first-button">
          <Link to="/game">
            <button className="button space_font terminal_style">
              {" "}
              Start Game{" "}
            </button>
          </Link>
        </div>
        {/* <AudioPlayer /> */}
      </div>
    </div>
  );
};

export default MainMenu;
