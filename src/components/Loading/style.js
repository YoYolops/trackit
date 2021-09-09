import styled from 'styled-components';

const LoadingScreen = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: #e5e5e5;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    .spinner {
        animation: rotate 2s linear infinite;
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`

export default LoadingScreen;