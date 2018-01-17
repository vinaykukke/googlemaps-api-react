import React from 'react';
import { render } from 'react-dom';
import Home from 'Scenes/Home';
import './styles/global';

const rootEl = document.getElementById('root');

render(
  <Home />,
  rootEl,
);

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept(['Scenes/Home'], () => {
      render(
        <Home />,
        rootEl,
      );
    });
  }
}
