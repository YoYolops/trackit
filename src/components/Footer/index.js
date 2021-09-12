import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import { MainContainer, BottomBar, CentralButtonContainer } from './style';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Footer({ percentage }) {
    const history = useHistory();

    return (
        <MainContainer>
            <BottomBar>
                <Link to="/main/habits">Hábitos</Link>
                <Link to="/main/history">Histórico</Link>
            </BottomBar>
            <CentralButtonContainer onClick={() => {history.push("/main/today")}}>
                <CircularProgressbar
                    className="progressButton"
                    value={percentage}
                    text={"Hoje"}
                    strokeWidth={10}
                    background={true}
                    backgroundPadding={7}
                    styles={buildStyles({
                        textSize: "18px",
                        textColor: "#fff",
                        backgroundColor: "#52B6FF",
                        trailColor: "#52B6FF",
                        pathColor: "#fff"
                    })}
                />
            </CentralButtonContainer>
        </MainContainer>
    )
}

export default Footer;