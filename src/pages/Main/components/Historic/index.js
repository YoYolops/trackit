import { useContext } from 'react';

import { SectionTitle } from '../../../../components/sharedStyles/index';
import { MainContentContainer } from '../SharedStyles';
import GlobalContext from '../../../../components/contexts/global';
import Footer from '../../../../components/Footer';
import Header from '../../../../components/Header';

function Historic() {
    const { userData } = useContext(GlobalContext);

    return (
        <>
            <MainContentContainer>
                <SectionTitle>Histórico</SectionTitle>
                <p className="warningText">Em breve você poderá ver o histórico dos seus hábitos aqui</p>
            </MainContentContainer>
            <Header profilePic={userData?.image}/>
            <Footer />
        </>
    )
}

export default Historic;