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

const Timer = ({ expiryTimestamp, seshLength }) => {
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
    
    useEffect(() => {
        updateSesh();
    }, [seshLength]);

    const updateSesh = () => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + (seshLength * 60));
        restart(time);
        pause();
    }

    const handleClick = () => {
        isRunning ? pause() : resume();
    }

    return (
        <TimerContainer className="timer">
            <div id="timer-label">Session</div>
            <div id="time-left">
                <span>{minutes}</span>:
                <span>{seconds === 0 ? '00': seconds}</span>
            </div>
            <button id="start_stop" onClick={handleClick}>start/stop</button>
            <button id="reset" onClick={updateSesh}>reset</button>
        </TimerContainer>
    );
}

export default Timer;