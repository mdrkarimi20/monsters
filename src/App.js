import React from 'react';
import './App.css';
import MonsterSingle from './Views/MonsterSingle/MonsterSingle';
import AddMonster from './Views/AddMonster/AddMonster';
import MonsterArchive from './Views/MonstersArchive/MonsterArchive';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/monsters/add">add</Link>
            </li>
            <li>
              <Link to="/monsters">monsters</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/monsters" component={MonsterArchive}>
          </Route>
          <Route path="/monsters/add" component={AddMonster}>
          </Route>
          <Route path="/monsters/:id" component={MonsterSingle}>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
