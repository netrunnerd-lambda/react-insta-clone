import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import data from './dummy-data';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App db={data} />, document.getElementById('root'));

serviceWorker.unregister();
