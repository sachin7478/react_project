import {Route, Switch, Redirect} from 'react-router-dom';   import react, { useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Contact,ErrorPage,Service1, Service2} from './Pages';
import Axios_useEffect from './Axios_useEffect';
import Home from './Home';                        import NavMenus from './NavMenus';
import Search from './Search.jsx';
import WheatherSearch from './WheatherSearch';
const App = () => {
    return(<>  <NavMenus /> {/*All Navlinks here*/}
        <Switch>
            <Route exact path='/' component={Home} />{/*'/' for home */ }
            <Route path='/contact' component={Contact} />{/*only exact path match render Contact */ }
            <Route exact path='/search' component={Search} />
            <Route exact path='/axios_useeffect' component={Axios_useEffect} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/home/:first' component={Home}/>{/*params accesible at home component*/}
            <Route exact path='/home/:first/:second' component={Home} /> 
            <Route path='/service1' render={ () => <Service1 name='service 1123' / >} />{/*  OR component={ () => <Service1 name='service 2' / >}*/}
            <Route exact path='/home/:first/:second' component={Home} />
            <Route exact path='/wheatherSearch' component={WheatherSearch} />
            
            <Route component={ErrorPage} />
            {/* If not matching path renders the error component*/}
            <Redirect to='/' /> { /*if not exact path found.  | optional to Error page */ }
        </Switch>
    </>)
};export default App;
