import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Shop from './components/Home/Resturents/Shop/Shop';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop/:shopId' element={<Shop />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
