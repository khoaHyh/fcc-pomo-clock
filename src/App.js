import './App.css';
import ReactFCCtest from 'react-fcctest';
import ManList from './components/ManList';

const manipulateTime = [
  {
    label: 'break-label',
    decrement: 'break-decrement',
    length: 'break-length',
    increment: 'break-increment',
    text: 'Break Length'
  },
  {
    label: 'session-label',
    decrement: 'session-decrement',
    length: 'session-length',
    increment: 'session-increment',
    text: 'Session Length'
  }
]

const App = () => {
  return (
    <div className='App'>
    <ReactFCCtest />
      {/* Need to abstract these into smaller components! */}
      <ManList manipulateTime={manipulateTime}/>
      <div className="timer">
        <div id="timer-label">Session</div>
        <div id="time-left"></div>
        <button id="start_stop">start/stop</button>
        <button id="reset">reset</button>
      </div>
    </div>
  );
}

export default App;
