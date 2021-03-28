import { NavLink } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
const NavMenus = () => {
    return(<>
     <Toolbar>      {/* NavMenu component rendered inside App.jsx file */}
        <NavLink activeClassName="active_class" exact to="/myPrograms/">Home</NavLink>
        <NavLink activeClassName="active_class" exact to="/myPrograms/axiosUseEffect">Axios UseEffect</NavLink>
        <NavLink activeClassName="active_class" exact to="/myPrograms/reduxPage">Redux Page</NavLink>
        <NavLink activeClassName="active_class" exact to="/myPrograms/home/profile">Profile</NavLink>
        <NavLink activeClassName="active_class" exact to="/myPrograms/contact">Contact</NavLink>
        <NavLink activeClassName="active_class" exact to="/myPrograms/search">Search</NavLink>
        <NavLink activeClassName="active_class" exact to="/myPrograms/service1">Service1</NavLink>
        <NavLink activeClassName="active_class" exact to="/myPrograms/searchWhether">Whether Search</NavLink>
        <NavLink activeClassName="active_class" exact to="/myPrograms/testcode">test code</NavLink>
        <NavLink activeClassName="active_class" exact to="/myPrograms/todo">To do</NavLink>
        <NavLink activeClassName="active_class" exact to="/myPrograms/googleKeep">Google Keep</NavLink>

    </Toolbar>
    </>)
}; export default NavMenus;

