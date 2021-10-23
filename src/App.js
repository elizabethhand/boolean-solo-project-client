import './App.css';
import { Link, Switch, Route, Redirect } from "react-router-dom"
import Header from './components/Header';
import Homepage from './pages/Homepage';
import CafeDisplayPage from './pages/CafeDisplayPage';
import QrCode from './pages/QRCode';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <div className="phone">
        <div className="screen">
          <Header />
          <Route path="/" exact>
            <Redirect to="/home">
            </Redirect>
          </Route>
          <Route path="/home">
            <Homepage />
          </Route>
          <Route exact path="/cafe/:id">
            <CafeDisplayPage />
          </Route>
          <Route exact path="/cafe/:id/qrcode">
            <QrCode />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>

        </div>
      </div>
    </div>
  );

}

export default App;
