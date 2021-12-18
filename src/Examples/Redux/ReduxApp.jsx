import store from './store';
import { CountDownApp } from './CountDownApp';
import { Provider } from 'react-redux'; // P is capital | to attatch store
const ReduxApp = () => { // attatching store to main app
    return(
        <>
            <Provider store={store}><CountDownApp /></Provider>
        </>
    );
}
export default ReduxApp;