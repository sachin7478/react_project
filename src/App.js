import {Route, Switch, Redirect} from 'react-router-dom';   import react, { useState } from 'react';
import {Contact,About,ErrorPage,Service1, Service2} from './Pages';
import Home from './Home';                        import NavMenus from './NavMenus';
import Search from './Search.jsx';
const App = () => {
    return(<>  <NavMenus /> {/*All Navlinks here*/}
        <Switch>
            <Route exact path='/' component={Home} />{/*'/' for home */ }
            <Route path='/contact' component={Contact} />{/*only exact path match render Contact */ }
            <Route exact path='/search' component={Search} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/home/:first' component={Home}/>{/*params accesible at home component*/}
            <Route exact path='/home/:first/:second' component={Home} /> 
                            {/*Props sent to services page*/}
            <Route path='/service1' render={ () => <Service1 name='service 1' / >} />{}
            <Route path='/service2' component={ () => <Service2 name='service 2' / >} />
            <Route component={ErrorPage} />
            {/* If not matching path renders the error component*/}
            <Redirect to='/' /> { /*if not exact path found.  | optional to Error page */ }
        </Switch>
    </>)
};export default App;
