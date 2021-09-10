import { useState } from 'react';

import { CardContainer } from './style';
import DaySelector from '../../../../components/DaySelector';

function RegisterHabitCard() {
    const weekDays = [ "D", "S", "T", "Q", "Q", "S", "S" ]
    const [ habitData, setHabitData ] = useState({
        name: "",
        days: []
    });

    function addWeekDay(day) {
        const newDays = []
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
                    weekDays.map(day => <DaySelector text={day} />)
                }
            </div>
        </CardContainer>
    )
}

export default RegisterHabitCard;