import { useParams, useRouteMatch, useLocation, useHistory, Link  } from 'react-router-dom';
const ProgramHome = () => {
    const { first,second } = useParams(); // first and second are declared as paramater in routs in App.js file       
    const { url, path } = useRouteMatch();
    const history = useHistory();
    console.log(useParams());  // {first: "profile", second: "extra"}
    console.log(useRouteMatch());  // {path: "/home/:first/:second", url: "/home/profile/extra", params: {first: "profile", second: "extra"}}
    console.log(useLocation());  //{pathname: "/home/profile/extra", search: "", hash: "", state: undefined}
    console.log(history);//push: ƒ push(path, state), go: ƒ go(n), goBack: ƒ goBack(), goForward: ƒ goForward(), replace: ƒ replace(path, state)
                            //historyContunue : location: {pathname: "/home/profile", search: "", hash: "", state: null, key: "bwljh7"} 
    let newUrl = url + '/extra';    return (<>
        <h1 className="text-Primary">  ON HOME  <span className='text-success'> {first} {second}</span> </h1>
        <pre>Url:<span className="text-primary"> { url }</span> </pre>
        <pre>Path:<span className="text-primary"> { path }</span> </pre>
        {/* used router Link for navigation */}
        <Link to={newUrl} style={{border:'0.5px solid orange', padding: '0px 12px', 'margin-left': '15x'}}> Next </Link><br/>
        {/* history functions */}
        <button onClick={()=> history.goBack()} >Go Back</button>
        <button onClick={()=> history.goForward()} >Go Forward</button>
        <button onClick={()=> history.push('/home/profile/extra')} >goto extra</button>
        <button onClick={()=> history.replace('/home')} >Replace with service1</button>
    </>);
};
export default ProgramHome; 