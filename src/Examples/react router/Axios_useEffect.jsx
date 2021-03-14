import react,{ useEffect, useState } from 'react';
import axios from 'axios';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

let Axios_useEffect = () => { 
    const [num,setNum] = useState(1);
    const [name, setName] = useState(1);
    const [moves, setMoves] = useState();
    const changeCartoon = (e) => { setNum(e.target.value) };
    useEffect( () => {
        async function getData() {
            let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setName( res.data.name);
            setMoves( res.data.moves.length);
        }
        getData();
    },[num] );
    return(
        <><h1> Option chosen <span class="text-warning">{num}</span> </h1>
        <h1> My Name is <span class="text-warning">{name}</span></h1>
        <h1> I hvae <span class="text-warning">{moves}</span> moves </h1>
            <select onChange={changeCartoon} value={num}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </>
    )
}
export default Axios_useEffect;