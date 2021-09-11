import { Link } from 'react-router-dom';

import { MainContainer, BottomBar } from './style';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Footer({ percentage }) {
    return (
        <MainContainer>
            <BottomBar>
                <Link to="/">Hábitos</Link>
                <Link to="/">Histórico</Link>
            </BottomBar>
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
        </MainContainer>
    )
}

export default Footer;