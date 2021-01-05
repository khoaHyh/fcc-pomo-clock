import styled from 'styled-components';

const TimerContainer = styled.div`
    margin: 0.75rem;
    border: solid 1px blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Timer = () => {

    return (
        <TimerContainer className="timer">
            <div id="timer-label">Session</div>
            <div id="time-left"></div>
            <button id="start_stop">start/stop</button>
            <button id="reset">reset</button>
        </TimerContainer>
    );
}

export default Timer;