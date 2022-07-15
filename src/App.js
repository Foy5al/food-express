import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Shop from './components/Home/Resturents/Shop/Shop';
import Login from './components/Login/Login';
import Register from './components/Login/Register/Register';
import Authprovider from './components/Context/AuthProvider';

function App() {
  return (
    <Authprovider>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/shop/:shopId' element={<Shop />} />
      </Routes>
      <Footer />

    </Authprovider>
  );
}

export default App;
