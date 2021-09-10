import { createContext, useState } from "react";

import Habits from '../../services/habitsManager';

const HabitsContext = createContext({});

export function HabitsProvider({ children }) {

    return (
        <HabitsContext.Provider value={{

        }}>
            { children }
        </HabitsContext.Provider>
    )
}
