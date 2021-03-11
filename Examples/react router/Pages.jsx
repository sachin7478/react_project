const Contact = () => {
    return(<><h1>This is Contact page</h1>  </>)
}; 

const About = () => {
    return(<><h1>This is about page</h1>  </>)  
}

const ErrorPage = () => {
    return(<><h1 className="text-danger">  OOPs !! Page Not found </h1></>)
}; export default ErrorPage;
export { About, Contact, ErrorPage };