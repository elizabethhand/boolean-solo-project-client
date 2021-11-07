import './App.css';
import React, { useState, useEffect } from "react"
import { Link, Switch, Route, Redirect } from "react-router-dom"
import Header from './components/Header';
import Homepage from './pages/Homepage';
import CafeDisplayPage from './pages/CafeDisplayPage';
import QrCode from './pages/QRCode';
import Login from './pages/Login';
import Register from './pages/Register';
import MapWithDirections from './pages/MapWithDirections';
import CategoryDisplay from './pages/CategoryDisplayPage';
import SearchPage from './pages/SearchPage';

function App() {
  const [cafes, setCafes] = useState([])
  const [categories, setCategories] = useState([])
  const [currentUser, setCurrentUser] = useState(false)
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 14,
    bearing: 0,
    pitch: 0
  });

  window.onload = async () => {

    const getCoords = async () => {
      const pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      setViewport({
        ...viewport,
        longitude: pos.coords.longitude,
        latitude: pos.coords.latitude,
      });
    };

    const coords = await getCoords();
  }

  useEffect(() => {
    fetch('http://localhost:3030/cafe')
      .then(response => response.json())
      .then(data => setCafes(data.data))

    fetch('http://localhost:3030/categories')
      .then(response => response.json())
      .then(data => setCategories(data.data))

  }, []);

  // function restaurantsinCategoriesCount() {
  //   console.log(categories)
  //   categories.forEach(function (category) {
  //     category.restaurants.forEach(function (restaurant) {
  //       console.log(restaurant)
  //     })
  //   })

  // categories.map(category =>
  //   category.restaurants.map((restaurant) => {
  //     console.log(restaurant.restaurant)
  //     return null;
  //   })
  // )

  // if (categories.length > 0) {
  //   restaurantsinCategoriesCount()
  // }

  return (
    <div className="App">
      <div className="phone">
        <div className="screen">
          <Header currentUser={currentUser} />
          <Route path="/" exact>
            <Redirect to="/home">
            </Redirect>
          </Route>
          <Route path="/home">
            <Homepage viewport={viewport} setViewport={setViewport} cafes={cafes} categories={categories} />
          </Route>
          <Route exact path="/cafe/:id">
            <CafeDisplayPage viewport={viewport} />
          </Route>
          <Route exact path="/cafe/:id/qrcode">
            <QrCode />
          </Route>
          <Route exact path="/cafe/:id/directions">
            <MapWithDirections />
          </Route>
          <Route exact path="/login">
            <Login setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact path="/register">
            <Register setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact path="/categories/:category">
            <CategoryDisplay />
          </Route>
          <Route exact path="/search">
            <SearchPage cafes={cafes} categories={categories} />
          </Route>
        </div>
      </div>
    </div>
  );

}

export default App;
