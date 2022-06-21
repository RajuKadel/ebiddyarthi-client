// import { createStore } from 'redux'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// import rootReducer from './reducers'



// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export default () => {
//   let store = createStore(persistedReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }




// import { createStore } from 'redux'
// // import { configureStore } from '@reduxjs/toolkit'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// const persistConfig = {
//     key: 'root',
//     storage
// }
// const persistedReducer = persistReducer(persistConfig, counterReducer)
// export default () => {
//     let store = createStore(persistedReducer)
//     let persistor = persistStore(store)
//     return { store, persistor }
// }


// export const store = configureStore({
//     reducer: {
//         counter: counterReducer,
//     },
//     middleware: getDefaultMiddleware =>
//         getDefaultMiddleware({
//             serializableCheck: false,
//         }),
// })
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









