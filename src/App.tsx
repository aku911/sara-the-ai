import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SpeechSynthesis, ISpeechSynthesisProps } from './speechSynthesis';
const inputRef = React.createRef<HTMLInputElement>();
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <input ref={inputRef}></input>
      <button onClick={() => {
const props: ISpeechSynthesisProps = {
  voice: 'Google UK English Female (en-GB)',
  pitch: 1.0,
  rate: 0.8,
  volume: 10,
  text: inputRef.current ? inputRef.current.value : 'duh',
  lang: 'en-us'
};
const speechSynthesis = new SpeechSynthesis(props);

        speechSynthesis.speak();
      }}>Press me!</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
