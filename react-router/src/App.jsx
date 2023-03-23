 import { BrowserRouter, Routes, Route } from 'react-router-dom'
 import Home from './component/Home';
 import MainLayout from './layouts/MainLayout';
 import About from './component/About';
 import NotFound from './component/NotFound';
 import Contacts from './component/Contacts';
 import Courses from './component/Courses';
 import './App.css';
import SingleCourses from './component/SingleCourses';
 

function App() {
  return (
  <BrowserRouter> 
   <div className="App">
    <Routes>
      <Route path = "/" element = {<MainLayout />}> 
      <Route index element = {<Home />} />
      <Route path = "about" element = {<About />} />
      <Route path = "contacts" element = {<Contacts />} />
      <Route path = "courses" element = {<Courses />} />
      <Route path = "courses/:courseSlug" element = {<SingleCourses />} />
      <Route path = "*" element = {<NotFound />} />
      </Route>
    </Routes>
    </div>

  </BrowserRouter>
  );
}

export default App;
