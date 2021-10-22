import './App.css';
import { Link, Switch, Route, Redirect } from "react-router-dom"
import Header from './components/Header';
import Homepage from './pages/Homepage';

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
        </div>
      </div>
    </div>
  );

}

export default App;
