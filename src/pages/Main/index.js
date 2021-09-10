import { Switch, Route } from 'react-router';
import { useRouteMatch } from 'react-router-dom';

import Habits from './components/Habits';

function Main() {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/habits`} component={ Habits } />
            <Route />
        </Switch>
    )
}

export default Main;