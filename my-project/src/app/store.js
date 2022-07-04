import { configureStore } from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer,

} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import sessionStorage from 'redux-persist/lib/storage/session'
import counterReducer from "./Slice";
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}
const persistedReducer = persistReducer(persistConfig, counterReducer)
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})
let persistor = persistStore(store)
export { store, persistor };









