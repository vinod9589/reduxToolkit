import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Child from './pages/Child'
import store from './pages/Store'

import {Provider} from "react-redux"
import Create from './pages/Create'
import UpdateData from './pages/UpdateData'
function App() {
  return (
  <Provider store={store} >
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Child/>} />
      <Route path='/create' element={<Create/>} />
      <Route path='/updatedata/:id' element={<UpdateData/>} />
      

    </Routes>
    
    </BrowserRouter>
    </Provider>
    
  )
}

export default App
