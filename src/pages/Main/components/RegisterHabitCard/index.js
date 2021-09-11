import { useState } from 'react';

import { CardContainer, ButtonContainer } from './style';
import { Button } from '../../../../components/sharedStyles/index';
import DaySelector from '../../../../components/DaySelector';

function RegisterHabitCard({ closeCard, habitData, setHabitData }) {
    const weekDays = [ "D", "S", "T", "Q", "Q", "S", "S" ];
    const numericWeekDays = [ 7, 1, 2, 3, 4, 5, 6 ];



    console.log(habitData)

    function addWeekDay(day) {
        const newDays = Array.from(habitData.days);
        newDays.push(day);
        console.log("trully adding")
        setHabitData({
            name: habitData.name,
            days: newDays
        })
    }

    function removeWeekDay(day) {
        const newDays = habitData.days.filter(value => value !== day);
        console.log("trully removing")
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
                    days: habitData.days
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
                            selected={habitData.days.includes(numericWeekDays[index])}
                        />
                    ))
                }
            </div>

            <ButtonContainer>
                <Button
                    width="84px"
                    height="35px"
                    filled={false}
                >Cancelar</Button>

                <Button
                    width="84px"
                    height="35px"
                    filled={true}
                >Salvar</Button>
            </ButtonContainer>
        </CardContainer>
    )
}

export default RegisterHabitCard;