import {createLogicMiddleware} from 'redux-logic';

const logicList = [
  // insert here a list of logics
];

const deps = {
  // insert here deps to use in Logics
};

export default logicMiddleware = createLogicMiddleware(logicList, deps);
