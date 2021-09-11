import { BiTrash } from 'react-icons/bi'

import DaySelector from '../../../../components/DaySelector'
import { MyHabitCardContainer,
         HabitTitle,
         WeekDaysContainer } from './style';

function MyHabitCard({ habitData, removeHabit }) {
    const weekDays = [ "D", "S", "T", "Q", "Q", "S", "S" ];
    const numericWeekDays = [ 7, 1, 2, 3, 4, 5, 6 ];
    const habitID = habitData.id;



    return (
        <MyHabitCardContainer>
            <BiTrash size={20}
                     color="#666666"
                     onClick={() => {removeHabit(habitID)}}
            />

            <HabitTitle>{habitData.name}</HabitTitle>

            <WeekDaysContainer>
                {
                    weekDays.map((day, index) => (
                        <DaySelector key={index}
                                     text={day}
                                     addWeekDay={() => {}}
                                     removeWeekDay={() => {}}
                                     thisWeekDay={numericWeekDays[index]}
                                     key={index}
                                     selected={habitData.days.includes(numericWeekDays[index])}
                                     frozen={true}
                        />
                    ))
                }
            </WeekDaysContainer>
        </MyHabitCardContainer>
    )
}

export default MyHabitCard;