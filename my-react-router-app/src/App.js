
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main';
import Service from './components/Service'
import About from './components/About'
import Product from './components/Product'
import Blog from './components/Blog'
// import MyFotter from './components/MyFotter'
import Form from './components/Form'
import Todo from './components/Todo';
import ClassCompo from './components/ClassCompo';
import Dynamic from './components/Dynamic';
import User from './components/user'
import Protected from './components/protected'
import Login from './components/login'
function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path="/" element={<Protected Component={Main} />} />
          <Route path="/service" element={<Protected Component={Service} />} />
          <Route path="/about" element={< Protected Component={About} />} />
          <Route path="/product" element={<Protected Component={Product} />} />
          <Route path="/testmonial" element={<Protected Component={Blog} />} />
          <Route path="/faq" element={<Protected Component={Form} />} />
          <Route path="/todo/:name" element={<Protected Component={Todo} />} />
          <Route path="/class" element={<Protected Component={ClassCompo} />} />
          <Route path="/dynamic" element={<Protected Component={Dynamic} />} />
          <Route path="/user/:id/:name" element={<Protected Component={User} />} />
          <Route path="/*" element={< Navigate to='/' />} />
        </Routes>

        {/* <MyFotter /> */}
      </>
    </Router>
  );
}

export default App
