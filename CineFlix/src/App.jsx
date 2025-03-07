import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import NavBar from './components/Navbar'
import Home from './components/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <>
     <AuthContextProvider>
      <NavBar>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/account' element={
            <ProtectedRoute>
              <Account/>
            </ProtectedRoute>}>
          </Route>
        </Routes>
      </NavBar>
     </AuthContextProvider>
    </>
  )
}

export default App