import Home from './component/Home'
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
          </Routes>
        </Router>
     </div>
    </div>
  );
}

export default App;
