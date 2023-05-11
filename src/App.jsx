import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./store"
import { Provider } from 'react-redux'

import { Error404 } from "./containers/Errors/Error404"
import { Home } from "./containers/pages/Home"
import { CheckIn } from "./containers/pages/CheckIn"
import { Pruebas } from "./containers/pages/Pruebas";
// import { useState } from 'react'
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Error404/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/checkIn" element={<CheckIn/>}/>
          <Route path="/pruebas" element={<Pruebas/>}/>
        </Routes>
      </Router>
    </Provider>

  )
}

export default App
