import { Switch, Route } from 'react-router';
import { useRouteMatch } from 'react-router-dom';

import HabitsView from './components/HabitsView';
import Today from './components/Today';

function Main() {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}/habits`} component={ HabitsView } />
            <Route path={`${path}/today`} component={ Today } />
        </Switch>
    )
}

export default Main;