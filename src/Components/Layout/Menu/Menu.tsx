import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
		<Link to="cats">Cats</Link>	
              <Link to="tasks">Tasks</Link>
                <Link to="comments">Comments</Link>	
                <Link to="users">Users</Link>
       	
        </div>
    );
}

export default Menu;
