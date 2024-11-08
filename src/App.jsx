import React from 'react'
import Todos from './Components/Todos'
import { persistor } from './store'
import store from './store'
import { Provider } from 'react-redux'
// import { persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react' // delay response untill our state store in local store and the untill the state retreive from there

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}> {/* It is like a guard that makes the app wait until all the saved data is loaded before it shows anything. This way, your app doesn’t load with empty or missing data—it only loads once all saved data is back in place */}
      <Todos />
      </PersistGate>
    </Provider>
  )
}
export default App