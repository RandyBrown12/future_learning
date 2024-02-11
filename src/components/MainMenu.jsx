import { Link } from "react-router-dom";

const MainMenu = () => {
    return ( 
        <div className="center">
            <h1 className="space_font white_text"> Learning Project </h1>
            <Link to="/game"> 
                <button className="button space_font terminal_style"> Start Game </button>
            </Link>
        </div>
    );
}
 
export default MainMenu;