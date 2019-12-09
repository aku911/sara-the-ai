export interface ISpeechSynthesisProps {
  pitch: number;
  rate: number;
  volume: number;
  text: string;
  voice: string;
  lang: string;
}

export class SpeechSynthesis {
  private utterance: SpeechSynthesisUtterance;
  private selected: SpeechSynthesisVoice;

  constructor(props: ISpeechSynthesisProps) {
    this.utterance = new window.SpeechSynthesisUtterance();
    this.selected = SpeechSynthesis.getVoice(props.voice);
    this.utterance.voice = this.selected;
    this.utterance.text = props.text.replace(/\n/g, '');
    this.utterance.lang = props.lang || 'en-GB';
    this.utterance.pitch = props.pitch;
    this.utterance.rate = props.rate;
    this.utterance.volume = props.volume;
  }

  static supported() {
    return window.speechSynthesis;
  }

  static getVoice(selected: string) {
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(voice => voice.name === selected);
    return voice !== undefined ? voice : voices[0];
  }

  public onend(func: () => void) {
    this.utterance.onend = func;
  }

  public onerror(func: () => void) {
    this.utterance.onerror = func;
  }

  public speak() {
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(this.utterance);
  }

  public pause() {
    window.speechSynthesis.pause();
  }

  public cancel() {
    window.speechSynthesis.cancel();
  }

  public resume() {
    window.speechSynthesis.resume();
  }
}