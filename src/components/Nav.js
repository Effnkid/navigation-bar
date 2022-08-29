import React from "react";

import {Link, NavLink} from "react-router-dom";

function Nav(){

    return(
        <nav className={"dark"}>
            <Link className={"logo"} to={"/"}>Logo</Link>

            <div className="link-wrapper">
                <NavLink to={"/"} activeclassname={"active"}>Home</NavLink>
                <NavLink to={"/list"} activeclassname={"active"}>List</NavLink>
                <NavLink to={"/admin"} activeclassname={"active"}>Admin</NavLink>
            </div>


        </nav>
    )
}

export default Nav;