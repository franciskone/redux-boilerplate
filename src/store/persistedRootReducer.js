import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer, { persistedReducersList } from "./rootReducer";

const persistConfig = {
  key: 'ohdfovsuahfdabf', // Insert here a key for your storage
  storage,
  whitelist: persistedReducersList,
};
export default persistedRootReducer = persistReducer(persistConfig, rootReducer);
