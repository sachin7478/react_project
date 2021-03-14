import react, { useState } from 'react';
const Contact = () => {
    
    const [data, setData] = useState({ fullname: '',  email: '',  address: ''  });
    const changeEvent = (e) => {
        setData((prevValues) => {
            return{ ...prevValues,[e.target.name]:e.target.value }
        });
    }
    const submitForm = (e) => {
        e.preventDefault();
        alert(`My Name is ${data.fullname} my email Id is ${data.email} my address is ${data.address}`);
    }
    return(
        <>
        <div className="mt-5 text-center">
            <h2>Contact Us </h2>
        </div>
        <div className="container mb-5">
            <div className="row contact_div my-1">
                <div className="col-md-6 col-10 mx-auto" >
                    <form className="mx-auto card-body" onSubmit={submitForm}>
                        <div className="form-row">
                            <div className="form-group mb-3">
                            <label for="Name">Name</label>
                            <input onChange={changeEvent} type="text" className="form-control" id="inputName" value={data.fullname} name="fullname" placeholder="Name" required/>
                            </div>
                            <div className="form-group mb-3">
                            <label for="inputEmail4">email</label>
                            <input onChange={changeEvent} type="email" className="form-control" id="inputEmail4" value={data.email} name="email" placeholder="Email" required />
                            </div>
                            <div class="form-group mb-3">
                            <label for="exampleFormControlTextarea1">Address</label>
                            <textarea onChange={changeEvent} class="form-control" value={data.address} name="address" placeholder="Address" id="exampleFormControlTextarea1" rows="3" required></textarea>
                            </div>
                        </div>

                        <button className="btn btn-outline-success ">Sign in</button>
                     </form>
                </div>
            </div>
        </div>
    </>
    )
};export default Contact;