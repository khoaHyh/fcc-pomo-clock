const Timer = () => {

    return (
        <div className="timer">
            <div id="timer-label">Session</div>
            <div id="time-left"></div>
            <button id="start_stop">start/stop</button>
            <button id="reset">reset</button>
        </div>
    );
}

export default Timer;