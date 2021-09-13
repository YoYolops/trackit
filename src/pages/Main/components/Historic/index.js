import { useContext, useEffect } from 'react';

import GlobalContext from '../../../../components/contexts/global';
import Footer from '../../../../components/Footer';
import Header from '../../../../components/Header';
import Loading from '../../../../components/Loading';

import { SectionTitle } from '../../../../components/sharedStyles/index';
import { MainContentContainer } from '../SharedStyles';

function Historic() {
    const { userData } = useContext(GlobalContext);

    useEffect(() => {
        if(!userData) window.location.href = "/";
    }, [userData])

    if(!userData) return <Loading />

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