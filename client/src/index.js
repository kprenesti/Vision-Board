import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import VisionBoard from './VisionBoard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<VisionBoard />, document.getElementById('root'));
registerServiceWorker();
