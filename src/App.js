import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import ServicePage from './pages/service/ServicePage';
import OurWorkPage from './pages/ourwork/layout/OurWorkPage';
import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';
import Project from './pages/ourwork/pages/Project';
function App() {
  return <Routers>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/service' element={<ServicePage />} />
      <Route path='/ourwork' element={<OurWorkPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/ourwork/:id' element={<Project/>} />
    </Routes>
  </Routers>
}
export default App;


