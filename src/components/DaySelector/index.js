import { useState } from 'react';

import { DaySelectorContainer } from './style';

function DaySelector({selected,
                      frozen,
                      text    })
{
    const [ isSelected, setIsSelected ] = useState(selected ?? false);

    return (
        <DaySelectorContainer 
            disabled={frozen ?? false}
            filled={isSelected}
            onClick={() => {setIsSelected(!isSelected)}}
        >
            {text}
        </DaySelectorContainer>
    )
}

export default DaySelector;