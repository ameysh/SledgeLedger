import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Overview from './pages/Overview';

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
