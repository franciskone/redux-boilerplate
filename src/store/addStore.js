import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {persistor, store} from "./store";

export default addStore = (AppComponent) => () => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
        <AppComponent />
      </PersistGate>
    </Provider>
  );
};
