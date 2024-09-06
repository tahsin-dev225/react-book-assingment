import { Outlet } from "react-router-dom";
import Foote from "../Footer/Foote";
import Header from "../Header/Header";


const Root = () => {
    return (
        <div>
            <helmet>
                <title>Books | </title>
            </helmet>
            <Header></Header>
            <Outlet></Outlet>
            <Foote></Foote>
        </div>
    );
};

export default Root;