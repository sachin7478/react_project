
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./action";
export const CountDownApp = () => {
    const myState = useSelector( ( reduce ) => { return reduce.changeTheNumber  } );
    const dispatcher = useDispatch(); // an object allows to trigger actions
    return (
    <>
        <h1> Count Up and Down</h1>
        <div className = "countDiv" >
            <button onClick={ () => dispatcher( incNumber(5) ) }> + </button>
            <input type="number" value = { myState } />
            <button onClick={ ()=> dispatcher( decNumber(5) ) }> - </button>
        </div>
    </>);
}