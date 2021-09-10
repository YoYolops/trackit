import { useState } from 'react';

import { CardContainer } from './style';
import DaySelector from '../../../../components/DaySelector';

function RegisterHabitCard() {
    const weekDays = [ "D", "S", "T", "Q", "Q", "S", "S" ];
    const numericWeekDays = [ 7, 1, 2, 3, 4, 5, 6 ];

    const [ habitData, setHabitData ] = useState({
        name: "",
        days: []
    });

    function addWeekDay(day) {
        const newDays = habitData.days.push(day);
        setHabitData({
            name: habitData.name,
            days: Array.from(newDays)
        })
    }

    function removeWeekDay(day) {
        const newDays = habitData.days.filter(numericDay => numericDay !== day);
        setHabitData({
            name: habitData.name,
            days: Array.from(newDays)
        })
    }

    return (
        <CardContainer>
            <input
                placeholder="nome do hábito"
                value={habitData.name}
                onChange={e => setHabitData({
                    name: e.target.value,
                    days: habitData.name
                })}
            />

            <div className="weekdays">
                {
                    weekDays.map((day, index) => (
                        <DaySelector
                            text={day}
                            addWeekDay={addWeekDay}
                            removeWeekDay={removeWeekDay}
                            thisWeekDay={numericWeekDays[index]}
                            key={index}
                        />
                    ))
                }
            </div>
        </CardContainer>
    )
}

export default RegisterHabitCard;