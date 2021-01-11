import { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import styled from 'styled-components';

const TimerContainer = styled.div`
    margin: 0.75rem;
    border: solid 1px blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Timer = ({ expiryTimestamp }) => {
    const {
        seconds, 
        minutes, 
        isRunning,
        resume,
        pause,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') }); 

    // Pause timer on page load
    useEffect(() => pause(), []);

    const handleClick = () => {
        isRunning ? pause() : resume();
    }

    return (
        <TimerContainer className="timer">
            <div id="timer-label">Session</div>
            <div id="time-left">
                <span>{minutes}</span>:
                <span>{seconds}</span>
            </div>
            <button id="start_stop" onClick={handleClick}>start/stop</button>
            <button id="reset" onClick={() => {
                // Restart to 25 minute timer
                const time = new Date();
                time.setSeconds(time.getSeconds() + 1500);
                restart(time);
            }}>reset</button>
        </TimerContainer>
    );
}

export default Timer;