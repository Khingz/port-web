import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Portfolio  from './Pages/Portfolio'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SideNav  from './component/SideNav'


function App() {
  return (
    <div className="landing-container">
     <div className='bg-container'>
      <Router>
          <SideNav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/portfolio' element={<Portfolio />} />
          </Routes>
        </Router>
     </div>
    </div>
  );
}

export default App;
