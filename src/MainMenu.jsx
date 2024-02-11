import { Link } from "react-router-dom";
import Nav from "./Nav";

const MainMenu = () => {
  return (
    <div>
      <div className="space_font">
        <Nav />
      </div>
      <div className="center">
        <h1 className="space_font"> Learning Project </h1>
        <Link to="/game">
          <button className="button space_font terminal_style">
            {" "}
            Start Game{" "}
          </button>
        </Link>
        <Link to="/leaderboard">
          <button className="button space_font terminal_style">
            {" "}
            Leaderboard{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MainMenu;
