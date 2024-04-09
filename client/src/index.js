import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./index.css";
import Layout from './Layout/Layout';
import Register from './pages/Register';
import Login from './pages/Login';
import LoginPage from './pages/temp';
import Darshboard from './pages/home/DashBoard';
import Analitycs from './pages/ChartAnalysis';
import SettingPage from './pages/Setting';
import File from './pages/driverFile';
import User from './pages/User';
import Blog from './pages/Blog';
import Adddata from './pages/Adddata';




const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="/" element={<Darshboard/>} />
        <Route path="/add" element={<Adddata/>} />
        <Route path="/analysis" element={<Analitycs/>} />
        <Route path="/file" element={<File/>} />
        <Route path="/settings" element={<SettingPage/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/blog" element={<Blog/>} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path="/temp" element={<LoginPage />} />




    </Routes>
  </BrowserRouter>
 

);




