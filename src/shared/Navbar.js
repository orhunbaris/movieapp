import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar()
{

    

    return(
        <nav className="nav">
            <Link to="/" className="site-title">Movie App</Link>
            <ul>
                <CustomLink to="/popular"> Popular </CustomLink>
                <CustomLink to="/login"> Log in </CustomLink>
                {/* {
                currentUser.isLogged &&
                <LogOutButton/>
                } */}
            </ul>
        </nav>
    )
}


function CustomLink({to, children, ...props}){

    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}
