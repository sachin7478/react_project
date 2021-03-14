import react from 'react';

const Contact = () =>{
    return(<>
            <div className="container marketing">
                <div className="row">
                    <div className="col-lg-4">
                        <img className="rounded-circle" src="https://source.unsplash.com/user/erondu/200x300/?apple" alt="Generic placeholder image" width="140" height="140" />
                        <h2>Heading</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
                    </div>

                    <div className="col-lg-4">
                        <img className="rounded-circle" src="https://source.unsplash.com/user/erondu/200x300/?apple" alt="Generic placeholder image" width="140" height="140" />
                        <h2>Heading</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
                    </div>

                    <div className="col-lg-4">
                        <img className="rounded-circle" src="https://source.unsplash.com/user/erondu/200x300/?apple" alt="Generic placeholder image" width="140" height="140" />
                        <h2>Heading</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
                    </div>
                </div>
            </div>

    </>)
};

const Home = () => {
    return(<>
        <section className="jumbotron text-center">
            <div className="container">
            <h1 className="jumbotron-heading">Album example</h1>
            <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
            <p>
                <a href="#" className="btn btn-primary my-2">Main call to action</a>
                <a href="#" className="btn btn-secondary my-2">Secondary action</a>
            </p>
            </div>
        </section>
    </>);
};
export { Contact, Home };