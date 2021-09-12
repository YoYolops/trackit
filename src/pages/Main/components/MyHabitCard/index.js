import { BiTrash } from 'react-icons/bi'

import DaySelector from '../../../../components/DaySelector'
import { MyHabitCardContainer,
         HabitTitle,
         WeekDaysContainer } from './style';

function MyHabitCard({ habitData, removeHabit }) {
    const weekDays = [ "D", "S", "T", "Q", "Q", "S", "S" ];
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
                                     thisWeekDay={index}
                                     selected={habitData.days.includes(index)}
                                     frozen={true}
                        />
                    ))
                }
            </WeekDaysContainer>
        </MyHabitCardContainer>
    )
}

export default MyHabitCard;