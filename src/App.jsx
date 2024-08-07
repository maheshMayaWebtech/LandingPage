import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import LandingForm from './components/LandingForm'
import Thankyou from "./components/ThankYou/Thankyou";

function App() {

  return (
    <div>
      <Router>
          <Routes>
            <Route path="/" element={<LandingForm />} />
            <Route path="/thank-you" element={<Thankyou />} />
          </Routes>
      </Router>
    </div>
    
  )
}

export default App
