import react from 'react';
import { Route, Switch, useLocation, NavLink, Redirect } from 'react-router-dom';
import { RoutedTabs, NavTab } from "react-router-tabs";

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../../node_modules/bootstrap/dist/js/bootstrap';
// import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import Home from './Home';
import About from './About';
import Features from './Features';
import Contact from './Contact';
import Navbar from './Navbar';
import Programs from './Programs';
import './index.css';
const App = () => {
    return(<>
        <Navbar/>
        <Switch>
            <Route exact path ="/" render={Home} />
            <Route exact path ="/features" render={Features} ></Route>
            <Route exact path ="/about" render={About} />
            <Route exact path ="/contact" render={Contact} />
            <Route exact path ="/programs" render={Programs} />
            {/* <Redirect to="/" /> */}
        </Switch>
    </>) 
};export default App;