import { NavLink } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
const NavMenus = () => {
    return(<>
     <Toolbar>      {/* NavMenu component rendered inside App.jsx file */}
        <NavLink activeClassName="active_class" exact to="/">Home</NavLink>
        <NavLink activeClassName="active_class" exact to="/home/profile">Profile</NavLink>
        <NavLink activeClassName="active_class" exact to="/contact">Contact</NavLink>
        <NavLink activeClassName="active_class" exact to="/search">Search</NavLink>
        <NavLink activeClassName="active_class" exact to="/service1">Service1</NavLink>
        <NavLink activeClassName="active_class" exact to="/service2">Service2</NavLink>
    </Toolbar>
    </>)
}; export default NavMenus;