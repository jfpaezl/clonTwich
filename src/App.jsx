import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import store from "./store"
import { Provider } from 'react-redux'

import { GlobalStyles } from "./styled/GlobalStyles"
import { Error404 } from "./containers/Errors/Error404"
import { Home } from "./containers/pages/Home"

// import { useState } from 'react'
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Error404/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </Provider>

  )
}

export default App
