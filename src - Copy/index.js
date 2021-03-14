import react from 'react';
import reactDom from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
//import App from './Examples/website/App';
//import App from './Examples/axios_useEffect/App';
//import App from './Examples/google keep ui interface/App';
import App from './Examples/react router/App';
//import App from './Examples/todo list program/App';

reactDom.render(<>
                <BrowserRouter>
                    <App /> 
                </BrowserRouter> </> 
,document.getElementById('root'));
