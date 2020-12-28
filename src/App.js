import './App.css';
import ReactFCCtest from 'react-fcctest';

const App = () => {
  return (
    <div className="App">
    <ReactFCCtest />
      {/* Need to abstract these into smaller components! */}
      <div className="manipulate-time">
        <div id="break-label">Break Length</div>
        <button id="break-decrement">-</button>
        <div id="break-length"></div>
        <button id="break-increment">+</button>
      </div>
      <div className="manipulate-time">
        <div id="session-label">Session Length</div>
        <button id="session-decrement">-</button>
        <div id="session-length"></div>
        <button id="session-increment">+</button>
      </div>
      <div className="timer">
        <div id="timer-label">Session</div>
        <div id="time-left"></div>
        <button id="start_stop"></button>
        <button id="reset"></button>
      </div>
    </div>
  );
}

export default App;
