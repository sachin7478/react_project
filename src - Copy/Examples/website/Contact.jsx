import react,{useState} from 'react';
const Contact = () => {
    let [data, setData] = useState(0);
    const changeEvent = (e) => {
        console.log(e.target.value);
        setData(e.target.value);
    }
    return(
        <>
            <div className="mt-5 text-center">
                <h2>Contact Us {data}</h2>
            </div>
            <div className="container mb-5">
                <div className="row contact_div my-1">
                    <div className="col-md-6 col-10 mx-auto" >
                        <form className="mx-auto card-body">
                            <div className="form-row">
                                <div className="form-group mb-3">
                                <label for="Name">Name</label>
                                <input onChange={changeEvent} type="text" className="form-control" id="inputName" placeholder="Name" />
                                </div>
                                <div className="form-group my-3">
                                <label for="inputEmail4">email</label>
                                <input onChange={changeEvent} type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                </div>
                                <div class="form-group my-3">
                                <label for="exampleFormControlTextarea1">Address</label>
                                <textarea onChange={changeEvent} class="form-control" placeholder="Address" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-outline-success ">Sign in</button>
                            </form>
                    </div>
                </div>
            </div>
        </>
    )
};export default Contact;