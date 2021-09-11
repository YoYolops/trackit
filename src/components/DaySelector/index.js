import { useState } from 'react';

import { DaySelectorContainer } from './style';

function DaySelector({selected,
                      addWeekDay,
                      removeWeekDay,
                      thisWeekDay,
                      frozen,
                      text    })
{
    const [ isSelected, setIsSelected ] = useState(selected ?? false);

    function clickHandler() {
        if(!isSelected) {
            console.log("adicionando ", thisWeekDay)
            addWeekDay(thisWeekDay)
        } else {
            console.log("removendo ", thisWeekDay)
            removeWeekDay(thisWeekDay)
        }
        setIsSelected(!isSelected);
    }

    return (
        <DaySelectorContainer filled={isSelected}
                              onClick={frozen ? () => {} : clickHandler}
        >
            <p>{text}</p>
        </DaySelectorContainer>
    )
}

export default DaySelector;