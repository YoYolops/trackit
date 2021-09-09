import { Switch, Route } from 'react-router';
import { useRouteMatch } from 'react-router-dom';

import Register from './views/Register';
import Login from './views/Login';

function Auth() {
    const { path } = useRouteMatch()

    return (
        <Switch>
            <Route path={`${path}/login`} component={ Login } />
            <Route path={`${path}/register`} component={ Register } />
        </Switch>
    )
}

export default Auth;