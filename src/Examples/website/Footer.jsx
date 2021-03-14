export default function Footer() {
    return(
        <>
        <footer className="footer mt-auto py-0 bg-light mb-0">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <div className="text-center py-2 ">
                        <small className="text-center text-success">
                        Copyright <span>BLOG </span><span>©</span><span className='mx-2'>{new Date().getFullYear()}</span><span><script>document.write(new Date().getFullYear());</script></span> - <span>All Rights Reserved.</span>
                        </small>
                    </div>
                </div>
              </div>
            </div>
        </footer>
        </>
    )
}
