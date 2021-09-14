import './App.css';
import { members } from './members';
import Home from './components/Home/Home';
import Custumer from './pages/custumer/Custumer'
import Company from './pages/company/Company'
import {Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <div className="App-header">
      <Switch>
        <Home members={members} exact path="/"/>
        <Route exact path="/customer/:id">
          <Custumer/>
        </Route>
        <Route exact path="/company/:id">
          <Company/>
        </Route>
      </Switch>
      </div>
    </div>
  );
}

export default App;
