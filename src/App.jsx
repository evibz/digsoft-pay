import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Payment from './pages/Payment';
import Confirmation from './pages/Confirmation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pay" element={<Payment />} />
        <Route path="/confirm" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default App;
