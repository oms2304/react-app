import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import PlaceList from './places/components/PlaceList';


const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
      <Switch>

        <Route path="/" exact>
          <Users />
        </Route>  

        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>

        <Route path="/places/new" exact>
          <NewPlace />
        </Route>

        <Redirect to="/" />

      </Switch> {/* will tell Redirect not to go back to just / if the path was identified */}
      </main>
    </Router>
    
  );
}

export default App;
