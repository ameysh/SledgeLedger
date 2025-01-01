import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Overview from './pages/Overview';

// Define App component with no props or state (it's a simple functional component)
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Overview />} />
      </Routes>
    </Router>
  );
};

export default App;
