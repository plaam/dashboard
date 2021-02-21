import React from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import { DashboardPage } from './pages/DashBoard';
import { Sidebar } from './components/Sidebar';
import { Menu } from "./components/Menu";
import { guilds } from "./utils/mocks";

function App() {
  const history = useHistory();
  return (
    <div>
      <Sidebar guilds={guilds}/>
      <Menu history={history}/>
      <Switch>
        <Redirect path="/" exact={true} to="/dashboard" />
        <Route path="/dashboard" exact={true} component={DashboardPage} />
        <Route path="/dashboard:guildId/general/muted" exact={true} component={DashboardPage} />
      </Switch>
    </div>
  );
}

export default App;
