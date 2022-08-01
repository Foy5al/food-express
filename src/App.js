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
import AddShopMenu from './components/Home/Restaurants/AddShop/AddShopMenu/AddShopMenu';
import AllOrders from './components/Orders/AllOrders/AllOrders';
import MyOrders from './components/Orders/MyOrders/MyOrders';
import ManageOrders from './components/Orders/ManageOrders/ManageOrders';
import CartDataProvider from './components/Context/CartDataProvider';
import Shipping from './components/Home/Restaurants/Shipping/Shipping';

function App() {
  return (
    <Authprovider>
      <CartDataProvider>
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
          <Route path='/add/menu/:shopName' element={
            <PrivetRoute>
              <AddShopMenu />
            </PrivetRoute>}
          />
          <Route path='/manageshops' element={
            <PrivetRoute>
              <ManageShops />
            </PrivetRoute>} />

          <Route path='/shop/:shopName' element={
            <PrivetRoute>
              <Shop />
            </PrivetRoute>
          } />

          <Route path='/orders' element={
            <PrivetRoute>
              <AllOrders />
            </PrivetRoute>
          } />

          <Route path='/orders/:email' element={
            <PrivetRoute>
              <MyOrders />
            </PrivetRoute>
          } />

          <Route path='/manage/orders' element={
            <PrivetRoute>
              <ManageOrders />
            </PrivetRoute>
          } />

          <Route path='/shipping' element={
            <PrivetRoute>
              <Shipping />
            </PrivetRoute>
          } />
        </Routes>
        <Footer />
      </CartDataProvider>
    </Authprovider>
  );
}

export default App;
