import { Link } from "react-router-dom";

const MainMenu = () => {
    return ( 
        <div className="center">
            <h1> Learning Project </h1>
            <Link to="/game"> 
                <button className="button"> Start Game </button>
            </Link>
            <Link to="/leaderboard">
                <button className="button"> Leaderboard </button>
            </Link>
        </div>
    );
}
 
export default MainMenu;