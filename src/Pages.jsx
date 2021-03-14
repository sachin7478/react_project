import { NavLink } from 'react-router-dom';
const Contact = () => {
    return(<><h1>This is Contact page</h1>  </>)
}; 

const About = () => {
    return(<><h1>This is about page</h1>  </>)  
}

const Service1 = (prop) => {  /* Props from route component */
    return(<> <h1>  Welcome in <span className="text-warning">{prop.name}</span> Page !</h1></>);
};
const Service2 = (props) => { /* Props from route Render */
    return(<> <h1>  Welcome in <span className="text-warning">{props.name}</span> Page !</h1></>);
};

const ErrorPage = () => {
    return(<>
    <h1 className="text-danger">  OOPs !! Page Not found </h1>
    <NavLink to='/'>Go Back</NavLink>
    </>)
}; export default ErrorPage;
export { About, Contact, ErrorPage,Service1, Service2 };