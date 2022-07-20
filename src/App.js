
import { BrowserRouter as Router } from "react-router-dom"
import SideNav  from './component/SideNav'
import {AnimatePresence} from 'framer-motion'
import AnimateRoute from './component/AnimateRoute'


function App() {
  return (
    <div className="landing-container">
     <div className='bg-container'>
       <AnimatePresence>
        <Router>
          <SideNav />
          <AnimateRoute />
        </Router>
        </AnimatePresence>
     </div>
    </div>
  );
}

export default App;
