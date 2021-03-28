import {Route, Switch, Redirect} from 'react-router-dom';   import react, { useState } from 'react';
import {About1,ErrorPage,Service1, Service2} from './Pages';
import ProgramHome from './ProgramHome';                        import NavMenus from './NavMenus';
import Search from './Search.jsx';               import Axios_useEffect from './Axios_useEffect';
import SearchWhether from './SearchWhether';
import ReduxApp from '../Redux/ReduxApp';
import TodoApp from '../todo list program/TodoApp';
import keepApp from '../google keep ui interface/KeepApp';

const Test = () => {
    return(<>
        hi
    </>);
}


const RouterApp = () => {
    return(<>  <NavMenus /> {/*All Navlinks here*/}
        <Switch>
            <Route exact path='/' component={ProgramHome} />{/*'/' for home */ }
            {/*only exact path match render Search */ }
            <Route exact path='/search' component={Search} />
            <Route exact path='/home' component={ProgramHome} />
            <Route exact path='/home/:first' component={ProgramHome}/>{/*params accesible at home component*/}
            <Route exact path='/home/:first/:second' component={ProgramHome} /> 
                            {/*Props sent to services page*/}
            <Route path='/service1' render={ () => <Service1 name='service 1123' / >} />{/* or component={ () => <Service2 name='service 2' / > */}
            <Route path='/axiosUseEffect' component={Axios_useEffect} />
            <Route path='/searchWhether' component={SearchWhether} />
            <Route path='/reduxPage' component={ReduxApp} />
            <Route path='/todo' component={TodoApp} />
            <Route path='/googleKeep' component={keepApp} />
            <Route component={ErrorPage} />
            
            {/* If not matching path renders the error component*/}
            <Redirect to='/' /> { /*if not exact path found.  | optional to Error page */ }
        </Switch>
    </>)
};export default RouterApp;
