import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Homepage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import EditorPage from './pages/EditorPage'; // Ensure this page exists
import GitHubCorner from './components/GitHubCorner'; // Ensure this component exists
import Toast from './components/toast/Toast'; // Ensure this component exists

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Define routes */}
          <Route path="/" element={<Home />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/editor/:roomId" element={<EditorPage />} />
        </Routes>
      </Router>
      {/* Global Components */}
      <Toast /> {/* Ensure Toast is properly configured */}
      <GitHubCorner /> {/* Ensure GitHubCorner is styled correctly */}
    </>
  );
};

export default App;
