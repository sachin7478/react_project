import react from 'react';
import { Link, NavLink } from 'react-router-dom';
const NamMenus = () => {
    return(<>
        {/* Client side with active class functions, does not reloads the page */}
        {/* exact: used to maintain dynamic active class, if not applies activeClass to all links */}
        <NavLink activeClassName="active_class" exact to="/contact">Contact : navLink</NavLink>
        <NavLink activeClassName="active_class" exact to="/about">About : navLink</NavLink>
                            <br />
        {/* Client side with NO active class  functions, does not reloads the page */}
        <Link to='/contact'>Contact : Link</Link>
        <Link to='/about'>About : Link</Link>
                            <br />
        {/* server side rendering , It reloads the page*/}
        <a href='/contact'>Contact : a</a> 
        <a href='/about'>About :a</a>
    </>)
}; export default NamMenus;