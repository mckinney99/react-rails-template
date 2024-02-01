import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { render as rtlRender } from '@testing-library/react';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { store as defaultStore } from '../store';

const render = (
  component: ReactNode,
  store: ToolkitStore = defaultStore,
  routerProps = {}
) =>
  store
    ? rtlRender(
        <Provider store={store}>
          <MemoryRouter {...routerProps}> {component}</MemoryRouter>
        </Provider>
      )
    : rtlRender(<MemoryRouter {...routerProps}> {component}</MemoryRouter>);

export default render;
