import { createContext,
         useState,
         useEffect,
         useContext } from "react";

import Habits from '../../services/habitsManager';
import GlobalContext from "./global";

const HabitsContext = createContext({});

export function HabitsProvider({ children }) {
    const [ todaysHabits, setTodaysHabits ] = useState([]);
    const [ doneAmmount, setDoneAmmount ] = useState(0);
    const [ donePercentage, setDonePercentage ] = useState(0);
    const { userData } = useContext(GlobalContext);

    useEffect(() => {
        let unmounted = false;

        async function getTodaysHabits() {
            const response = await Habits.searchTodayHabits(userData.token);
            if(!unmounted && response) {
                let done = 0;
                for(const habit of response) { 
                    if(habit.done) done += 1;
                }
                setDoneAmmount(done);
                setTodaysHabits(response);
                setDonePercentage(parseInt((100/response.length)*done));
            }
        }
        if(!unmounted && userData) getTodaysHabits();

        return () => { unmounted = true };
    }, [userData])

    async function updateHabitsData() {
        if(userData) {
            const response = await Habits.searchTodayHabits(userData?.token);
            
            if(response) {
                let done = 0;
                for(const habit of response) { 
                    if(habit.done) done += 1;
                }
                setDoneAmmount(done);
                setTodaysHabits(response);
                console.log("updating Done percentage")
                setDonePercentage(parseInt((100/response.length)*done));
            }
        }
    }

    return (
        <HabitsContext.Provider value={{
            todaysHabits,
            setTodaysHabits,
            doneAmmount,
            setDoneAmmount,
            updateHabitsData,
            donePercentage
        }}>
            { children }
        </HabitsContext.Provider>
    )
}

export default HabitsContext;
