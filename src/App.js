import react from 'react';
import {Route, Switch} from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import NavMenus from './NavMenus';
import ErrorPage from './ErrorPage';
const App = () => {
    const Home = () => { return (<><h1 className="text-Primary">  ON HOME Page </h1></>) };
    const Xyz = () => { return (<><h1 className="text-Primary">  ON Xyz Page </h1></>) };
    return(<>
        <NavMenus />
        <Switch>
            <Route exact path='/' component={Home} />{/*'/' for home */ }
            <Route path='/contact' component={Contact} />{/*only exact path match render Contact */ }
            <Route exact path='/about' component={About} />
            <Route path='/contact/xyz' component={Xyz} />
            <Route component={ErrorPage} />{/* If not matching path renders the error component*/}
        </Switch>
    </>)
}
export default App;