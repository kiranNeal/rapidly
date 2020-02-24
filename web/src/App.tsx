import React, { createContext, useReducer, Dispatch } from 'react';
import reducer, { initialState } from './states/application/applicationReducer';
import {
  ApplicationState,
  Action
} from './states/application/applicationTypes';
import Header from './components/Header';
import RequestOptions from './components/RequestOptions';

interface InitContextProps {
  state: ApplicationState;
  dispatch: Dispatch<Action>;
}

const AppContext = createContext({} as InitContextProps);

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Header />
        <RequestOptions></RequestOptions>
      </div>
    </AppContext.Provider>
  );
};

export { App, AppContext };
