import react from 'react';
const Service1 = (prop) => {  /* Props from route component */
    return(<> <h1>  Welcome in <span className="text-warning">{prop.name}</span> Page !</h1></>);
};
const Service2 = (props) => { /* Props from route Render */
    return(<> <h1>  Welcome in <span className="text-warning">{props.name}</span> Page !</h1></>);
};
export {Service1, Service2};