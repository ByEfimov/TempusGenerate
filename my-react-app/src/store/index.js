import { combineReducers, legacy_createStore as createStore } from "redux";
import { userReduser } from "./UserReduser";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const RootReduser = combineReducers({
  user: userReduser,
});

const persistedReduser = persistReducer(persistConfig, RootReduser);
export const store = createStore(persistedReduser);

export const persister = persistStore(store);
