import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'; // Import only Routes and Route
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Request from './pages/Request';
import CourseSelection from './pages/CourseSelection';
import PersonalInfo from './pages/PersonalInfo';
import Submit from './pages/Submit';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/request" element={<Request />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/submit' element={<Submit />} />
        <Route path="/course-selection" element={<CourseSelection />} />
        <Route path="/personal-info" element={<PersonalInfo />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
