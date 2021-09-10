import { Switch, Route } from 'react-router';
import { useRouteMatch } from 'react-router-dom';

import HabitsView from './components/Habits';

function Main() {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/habits`} component={ HabitsView } />
            <Route />
        </Switch>
    )
}

export default Main;