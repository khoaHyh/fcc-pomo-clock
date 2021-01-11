import { useState, useEffect} from 'react';
import './App.css';
import ReactFCCtest from 'react-fcctest';
import ManList from './components/ManList';
import Timer from './components/Timer';

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

let initValue = 25;

const App = () => {
  const [display, setDisplay] = useState(initValue);

  const time = new Date();
  // 25 minute timer
  time.setSeconds(time.getSeconds() + (display * 60));

  const handleTime = (time) => {
    return setDisplay(time);
  }

  return (
    <div className='App'>
      <ReactFCCtest />
      <ManList manipulateTime={manipulateTime} updateTime={handleTime} />
      <Timer expiryTimestamp ={time} />
    </div>
  );
}

export default App;
