import { Switch, Route, Redirect } from 'react-router';
import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ResetCss from './components/sharedStyles/Reset';

import GlobalContext from './components/contexts/global';
import Auth from './pages/Auth';
import Main from './pages/Main';

function App() {
  const { isLogged, userData } = useContext(GlobalContext);
  const history = useHistory();

  useEffect(() => {
    if(isLogged) history.push("/main/today", userData);
  }, [isLogged, history, userData])

  return (
    <div className="App">
      <ResetCss />
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/auth/login" />} />
        <Route path="/auth" component={ Auth } />
        <Route path="/main" component={ Main } />
      </Switch>
    </div>
  );
}


export default App;
