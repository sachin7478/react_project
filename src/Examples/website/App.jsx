import react from 'react';
import { Route, Switch, useLocation, NavLink, Redirect } from 'react-router-dom';
import { RoutedTabs, NavTab } from 'react-router-tabs';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import Home from './Home';
import About from './About';
import Features from './Features';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import './index.css';
import RouterApp from '../react router/RouterApp';


import {About1,ErrorPage,Service1, Service2} from '../react router/Pages';
import ProgramHome from '../react router/ProgramHome';              import NavMenus from '../react router/NavMenus';
import Search from '../react router/Search.jsx';               import Axios_useEffect from '../react router/Axios_useEffect';
import SearchWhether from '../react router/SearchWhether';
import ReduxApp from '../Redux/ReduxApp';
import TodoApp from '../todo list program/TodoApp';
import keepApp from '../google keep ui interface/KeepApp';


const App = () => {
    return(<>
        <Navbar/>
        <div>
            <Switch>
            <Route exact path ="/" render={Home} />
            <Route exact path ="/features" render={Features} ></Route>
            <Route exact path ="/about" render={About} />
            <Route exact path ="/contact" component={Contact} />
            <Route exact path ="/myPrograms" component={RouterApp} />
           



            <Route exact path='/myPrograms/' component={ProgramHome} />{/*'/' for home */ }
            <Route exact path='/myPrograms/search' component={Search} />
            <Route exact path='/myPrograms/home' component={ProgramHome} />
            <Route exact path='/myPrograms/home/:first' component={ProgramHome}/>{/*params accesible at home component*/}
            <Route exact path='/myPrograms/home/:first/:second' component={ProgramHome} /> 
                            {/*Props sent to services page*/}
            <Route path='/myPrograms/service1' render={ () => <Service1 name='service 1123' / >} />{/* or component={ () => <Service2 name='service 2' / > */}
            <Route path='/myPrograms/axiosUseEffect' component={Axios_useEffect} />
            <Route path='/myPrograms/searchWhether' component={SearchWhether} />
            <Route path='/myPrograms/reduxPage' component={ReduxApp} />
            <Route exact path='/myPrograms/todo' component={TodoApp} />
            <Route path='/myPrograms/googleKeep' component={keepApp} />
            <Route component={ErrorPage} />
            
            {/* If not matching path renders the error component*/}
            <Redirect to='/myPrograms/' /> { /*if not exact path found.  | optional to Error page */ }

            <Redirect to="/" />
        </Switch>
        </div>

        <Footer />
    </>) 
};export default App;