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

const App = () => {
  return (
    <div className='App'>
      <ReactFCCtest />
      <ManList manipulateTime={manipulateTime} />
      <Timer />
    </div>
  );
}

export default App;
