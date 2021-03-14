import react, {useState, useEffect} from 'react';         import axios from 'axios';                   

export default function SearchWhether() {
    let [city, setCity] = useState('pune');      	const [apiResponse, setapiResponse] = useState(null)
    let apiKey = `cefc487f8f366abc6a9b18336c002a42`;
	useEffect( () => {
			async function getWhether() {
				if( '' == city ) return; // need to sing in to the website and generate the api key
				let Url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
				var res = await fetch(Url);   //or res = await axios.get(Url);
				res = await res.json(); // await: waits till the response is recivied
				setapiResponse( res.main );
			}
			getWhether();
	}, [city] ) // will trigger on change of city 'state'

	return(<>
		<div className="container-fluid">
			<div className="row">
				<div className="col-6 mx-auto text-center">
					<div className="card text-center">
						<div className="card-header text-capitalize">   Wheather Search  { city} </div>
						<div className="card-body">
							<div className="input-group my-3 col-md-4">
								<span className="input-group-text" id="basic-addon1">City</span>
								<input type="text"
								onChange={(e) => {setCity(e.target.value)} }
								value={city} className="form-control"
								placeholder="Username"
								aria-label="Username" aria-describedby="basic-addon1"/>
							</div>
							<div className="col">
								<div className="p-3 border bg-light text-primary h4 text-capitalize">
									{  apiResponse ?
									<span>{ city}  city <span
									className="label label-warning text-warning">{ apiResponse.temp}</span> % Cel.
									</span>
									: '' }
								</div>
							</div>
						</div>
						<div className="card-footer h5 text-muted">
							Minimum { apiResponse ?
								<span><span className="label label-warning text-info">{ apiResponse.temp_min}</span> </span>
								: ''  }  %
							|  Maximum { apiResponse ?
								<span><span className="label label-warning text-info">{ apiResponse.temp_max}</span> </span>
								: ''  } %
							|  Humididy { apiResponse ?
								<span><span className="label label-warning text-info">{ apiResponse.humidity}</span> </span>
								: ''  } %
						</div>
					</div>
				</div>
			</div>
		</div>
	</>)
}