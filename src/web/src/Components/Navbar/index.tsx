import { NavLink } from "react-router-dom";

const NavBar = () => {
    const activeStyle = "underline text-gray-500 underline-offset-4";

    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-md font-light top-0">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to="/">Killer Rain</NavLink>
                </li>
                <li>
                    <NavLink to="/"
                           className={({isActive}) => (isActive ? activeStyle : undefined)}>
                            All
                    </NavLink>
                </li>
                <li>
                <NavLink to="/clothing"
                        className={({ isActive}) => (isActive ? activeStyle : undefined)}>
                            Clothing
                </NavLink>
                </li>
                <li>
                <NavLink to="/shoes"
                        className={({ isActive}) => (isActive ? activeStyle : undefined)}>
                            Shoes
                     </NavLink>
                </li>
                <li>
                <NavLink to="/Winter"
                        className={({ isActive}) => (isActive ? activeStyle : undefined)}>
                            Winter
                     </NavLink>
                </li>
                <li>
                <NavLink to="/Accessories"
                        className={({ isActive}) => (isActive ? activeStyle : undefined)}>
                            Accessories
                     </NavLink>
                </li>
                <li>
                <NavLink to="/Glasses"
                        className={({ isActive}) => (isActive ? activeStyle : undefined)}>
                            Glasses
                     </NavLink>
                </li>
                <li>
                <NavLink to="/Clearence"
                        className={({ isActive}) => (isActive ? activeStyle : undefined)}>
                            Clearence
                     </NavLink>
                </li>
            </ul>
        </nav>
    )

}

export default NavBar;
