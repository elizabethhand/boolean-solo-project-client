import './App.css';
import React, { useState, useEffect } from "react"
import { Link, Switch, Route, Redirect } from "react-router-dom"
import Header from './components/Header';
import Homepage from './pages/Homepage';
import CafeDisplayPage from './pages/CafeDisplayPage';
import QrCode from './pages/QRCode';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
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
            <Homepage viewport={viewport} setViewport={setViewport} />
          </Route>
          <Route exact path="/cafe/:id">
            <CafeDisplayPage viewport={viewport} />
          </Route>
          <Route exact path="/cafe/:id/qrcode">
            <QrCode />
          </Route>
          <Route exact path="/login">
            <Login setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact path="/register">
            <Register setCurrentUser={setCurrentUser} />
          </Route>

        </div>
      </div>
    </div>
  );

}

export default App;
