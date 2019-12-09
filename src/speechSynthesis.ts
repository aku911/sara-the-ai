import { getVoice } from "./voiceFetcher";

export interface ISpeechSynthesisProps {
  pitch: number;
  rate: number;
  volume: number;
  text: string;
  voice: string;
  lang: string;
}

export class SpeechSynthesis {
  private utterance: SpeechSynthesisUtterance | undefined;
  private selected: SpeechSynthesisVoice | undefined ;

  constructor(private props: ISpeechSynthesisProps) {
  }

  public get voice() : string {
    return this.selected ? this.selected.name : '';
  }

  public async speak(): Promise<void> {
    const u = await this.getUtterance();
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
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

  private async getUtterance(): Promise<SpeechSynthesisUtterance> {
    const utterance = new window.SpeechSynthesisUtterance();
    const selected = await getVoice(this.props.voice);
    utterance.voice = selected;
    utterance.text = this.props.text.replace(/\n/g, '');
    utterance.lang = this.props.lang || 'en-GB';
    utterance.pitch = this.props.pitch;
    utterance.rate = this.props.rate;
    utterance.volume = this.props.volume;
    this.selected = selected;
    return utterance;
  }
}