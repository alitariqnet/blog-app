
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Create from './Create';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Routes>
            <Route exact path="/">
              <Home/> 
            </Route>
            <Route path='/create'>
              <Create/>
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
