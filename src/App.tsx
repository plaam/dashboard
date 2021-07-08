import React from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import { DashboardPage } from './pages/DashBoard';
import { Sidebar } from './components/Sidebar';
import { Menu } from "./components/Menu";
import { guilds } from "./utils/mocks";
import { Guild } from "./utils/types";
import { GuildContextProvider } from './utils/contexts/GuildContext';

function App() {
  const [guild, setGuild] = React.useState<Guild | undefined>();
  const history = useHistory();
  return (
    <div>
      <GuildContextProvider value={{ guild, setGuild }}>
        <Sidebar guilds={guilds} history={history}/>
        <Menu history={history}/>
        <Switch>
          <Redirect path="/" exact={true} to="/dashboard" />
          <Route path="/dashboard" exact={true} component={DashboardPage} />
          <Route path="/dashboard:guildId" exact={true} component={DashboardPage} />
          <Route path="/dashboard:guildId/general/muted" exact={true} component={DashboardPage} />
          <Route path="/dashboard:guildId/security/roles" exact={true} component={DashboardPage} />
          <Route path="/dashboard:guildId/security/authentication" exact={true} component={DashboardPage} />
        </Switch>
      </GuildContextProvider>
    </div>
  );
}

export default App;
