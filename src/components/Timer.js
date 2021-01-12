import styled from 'styled-components';

const TimerContainer = styled.div`
    margin: 0.75rem;
    padding: 0.5rem;
    width: 8rem;
    background-color: salmon;
    color: white;
    border: solid 1px black;
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Timer = ({ timerLabel }) => {
    return (
        <TimerContainer className="timer">
            <div id="timer-label">{timerLabel}</div>
            <button id="start_stop">start/stop</button>
            <div id="time-left">
            <span></span>:
            <span></span>
            </div>
            <button id="reset">reset</button>
        </TimerContainer>
    );
}

export default Timer;
