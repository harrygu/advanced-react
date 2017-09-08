import React from 'react';
import axios from 'axios';

import ReactDOMServer from 'react-dom/server';

import App from 'components/App';
import StateApi from '../state-api';

import config from 'config';

const serverRender = async () => {
  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  
  const store = new StateApi(resp.data);
  console.log(store);
  
  return {
    initialMarkup: ReactDOMServer.renderToString(
      <App store = {store} />
    ),
    initialData: resp.data
  };
};

export default serverRender;