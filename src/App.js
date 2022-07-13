import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;