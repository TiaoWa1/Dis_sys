import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Get">Get All Users</Link>
                    </li>
                    <li>
                        <Link to="/Post">Post User</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    );
};

export default Layout;