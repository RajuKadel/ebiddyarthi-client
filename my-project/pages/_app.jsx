import { PersistGate } from 'redux-persist/integration/react'
import '../styles/globals.css'
import Layout from '../Layout/Layout'
import { store, persistor } from '../src/app/store'
import { Provider } from 'react-redux'
const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  )
}

export default App

// ReactDOM.render(
//   <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       <App />
//     </PersistGate>
//   </Provider>,
//   document.getElementById('root')
// )
