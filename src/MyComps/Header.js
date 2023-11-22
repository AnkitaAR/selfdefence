import { NavLink, Outlet } from "react-router-dom"


const Header=()=>{
    return(
        <>
                <NavLink to="/">HOME       </NavLink>
                <NavLink to="/martialarts">   MARTIAL ARTS           </NavLink>
                <NavLink to="/simpletechniques" activeClassName="active">SIMPLE TECHNIQUES</NavLink>
            <Outlet/>
        </>
    )
}
export default Header