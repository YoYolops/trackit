import { Switch, Route } from 'react-router';
import { useRouteMatch } from 'react-router-dom';

import { HabitsProvider } from '../../components/contexts/habits';
import HabitsView from './components/HabitsView';
import Today from './components/Today';
import Historic from './components/Historic';

function Main() {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <HabitsProvider>
                <Route path={`${path}/habits`} component={ HabitsView } />
                <Route path={`${path}/today`} component={ Today } />
                <Route path={`${path}/historic`} component={ Historic } />
            </HabitsProvider>
        </Switch>
    )
}

export default Main;