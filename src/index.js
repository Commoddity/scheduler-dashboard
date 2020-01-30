import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import Dashboard from 'components/Dashboard';

import Axios from 'axios';

if (process.env.REACT_APP_API_BASE_URL) {
	Axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
}

ReactDOM.render(<Dashboard />, document.getElementById('root'));
