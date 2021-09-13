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
            addWeekDay(thisWeekDay)
        } else {
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