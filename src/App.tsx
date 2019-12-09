import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { SpeechSynthesis, ISpeechSynthesisProps } from './speechSynthesis';
const inputRef = React.createRef<HTMLInputElement>();
const App: React.FC = () => {
  const [lastVoice, setVoice]  = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <input ref={inputRef}></input>
      <button onClick={() => {
const props: ISpeechSynthesisProps = {
  voice: 'Google UK English Female',
  pitch: 2.0,
  rate: 0.8,
  volume: 10,
  text: inputRef.current ? inputRef.current.value : 'duh',
  lang: 'en-GB'
};

const voice2 = 'Microsoft Zira Desktop - English (United States)';
props.voice = voice2;
const speechSynthesis = new SpeechSynthesis(props);
        speechSynthesis.speak().then(() => {
          setVoice(speechSynthesis.voice);
        });
      }}>Press me!</button>
        
      <span>{lastVoice}</span>
      </header>
    </div>
  );
}

export default App;
