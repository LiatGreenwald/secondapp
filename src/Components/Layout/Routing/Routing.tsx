import { Route, Routes } from "react-router-dom";
import App from "../../../App";
import Cats from "../../Pages/Cats/Cats";
import Comments from "../../Pages/Comments/Comments";
import Home from "../../Pages/Home/Home";
import Page404 from "../../Pages/Page404/Page404";
import Tasks from "../../Pages/Tasks/Tasks";
import Users from "../../Pages/Users/Users";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
			 <Route path="/" element={<App />} />
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<Page404 />} />
        <Route path="cats" element={<Cats />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="comments" element={<Comments />} />
        <Route path="users" element={<Users />} />
        </Routes>
        </div>
    );
}

export default Routing;
