import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Shop from './components/Home/Restaurants/Shop/Shop';
import Login from './components/Login/Login';
import Register from './components/Login/Register/Register';
import Authprovider from './components/Context/AuthProvider';
import AddShop from './components/Home/Restaurants/AddShop/AddShop';
import ManageShops from './components/Home/Restaurants/ManageShops/ManageShops';
import PrivetRoute from './components/PriverRoute/PrivetRoute';

function App() {
  return (
    <Authprovider>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/add/shop' element={
          <PrivetRoute>
            <AddShop />
          </PrivetRoute>}
        />
        <Route path='/manageshops' element={
          <PrivetRoute>
            <ManageShops />
          </PrivetRoute>} />

        <Route path='/shop/:shopId' element={
          <PrivetRoute>
            <Shop />
          </PrivetRoute>
        } />
      </Routes>
      <Footer />

    </Authprovider>
  );
}

export default App;
