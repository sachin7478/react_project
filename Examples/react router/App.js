import {Route, Switch} from 'react-router-dom';   import react from 'react';
import {Service1,Service2} from './Services';     import {Contact,About,ErrorPage} from './Pages';
import Home from './Home';                        import NavMenus from './NavMenus';
const App = () => {
    return(<>  <NavMenus /> {/*All Navlinks here*/}
        <Switch>
            <Route exact path='/' component={Home} />{/*'/' for home */ }
            <Route path='/contact' component={Contact} />{/*only exact path match render Contact */ }
            <Route exact path='/about' component={About} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/home/:first' component={Home}/>{/*params accesible at home component*/}
            <Route exact path='/home/:first/:second' component={Home} /> 
                            {/*Props sent to services page*/}
            <Route path='/service1' render={ () => <Service1 name='service 1' / >} />{}
            <Route path='/service2' component={ () => <Service2 name='service 2 xyz' / >} />
            <Route component={ErrorPage} />{/* If not matching path renders the error component*/}
        </Switch>
    </>)
};export default App;