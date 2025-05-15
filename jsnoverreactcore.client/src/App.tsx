
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogPage from './Components/Parent/BlogPage';
import HomePage from './Components/Parent/HomePage';
import GamePage from './Components/Parent/GamePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/games" element={<GamePage />} />
            </Routes>
        </Router>
    );
}


export default App;