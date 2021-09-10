import { useContext } from 'react';

import Header from '../../../../components/Header';
import GlobalContext from '../../../../components/contexts/global';
import { SectionTitle, Button } from '../../../../components/sharedStyles';
import { AddHabitMenu, MainContentContainer } from './style.js';

function Habits() {
    const { userData } = useContext(GlobalContext);
    console.log(userData)

    return (
        <>
            <Header profilePic={userData.image} />
            <MainContentContainer>
                <AddHabitMenu>
                    <SectionTitle></SectionTitle>
                    <Button></Button>
                </AddHabitMenu>
            </MainContentContainer>
        </>
    )
}

export default Habits;