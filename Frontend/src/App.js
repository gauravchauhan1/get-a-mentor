import Login from './Screens/login/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './Screens/Landing page/Landing'
import SignupMentee from './Screens/registration/SignupMentee'
import Navbar from './Components/Navbar'

function App () {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup-mentee' element={<SignupMentee />}></Route>
      </Routes>
    </BrowserRouter>


  )
}

export default App
