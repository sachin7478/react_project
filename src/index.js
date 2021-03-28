import react from 'react';
import reactDom from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import App from './Examples/website/App';
// import RouterApp from './Examples/react router/RouterApp';

// reactDom.render(<>   <BrowserRouter>        <RouterApp />             </BrowserRouter> </> ,document.getElementById('root'));
reactDom.render(<>   <BrowserRouter>        <App />             </BrowserRouter> </> ,document.getElementById('root'));
