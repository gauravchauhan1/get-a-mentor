import Login from './Screens/login/Login'
import RegistrationMentee from './Screens/registration/RegistrationMentee'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/registrationMentee' element={<RegistrationMentee />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
