import {NavLink} from 'react-router-dom';
export default function Common( props ) {
    return(<>
            <section id="header" className="">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                                    <h1 data-aos="fade-up" className="aos-init aos-animate"> 
                                     {props.title}
                                     <p>{props.title2}</p>
                                     <p>{props.title3}</p>
                                    </h1>
                                    <div data-aos="fade-up" data-aos-delay="800" className="aos-init aos-animate">
                                        {/* <a className="btn btn-get-started scrollto" data-toggle="modal" data-target="#modalLoginForm">Login</a> */}
                                        {/* <a className="btn btn-get-started scrollto ml-2" data-toggle="modal" data-target="#modalRegisterForm">Signup</a> */}
                                        <NavLink to={props.url} className="btn btn-get-started scrollto ml-2">{props.btnName}</NavLink>
                                    </div>
                                </div>
                                <div className="col-md-6 pt5 pt-lg-0 order-1 order-lg-2">
                                    <img src={props.image} className="img-fluid animated" alt="home image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>    
    </>)
}




