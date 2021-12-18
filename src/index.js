import react from 'react';
import reactDom from 'react-dom';
import './Examples/style.css';

import { BrowserRouter } from 'react-router-dom';
import App from './Examples/website/App';

reactDom.render(<>   <BrowserRouter>        <App />             </BrowserRouter> </> ,document.getElementById('root'));
