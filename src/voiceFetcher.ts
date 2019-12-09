let voices: SpeechSynthesisVoice[] = []; 

export function getVoice(selected: string): Promise<SpeechSynthesisVoice> {
    const finder = () => {
        const voice = voices.find(voice => voice.name === selected);
        return voice !== undefined ? voice : voices[0];
    }
    return new Promise((resolve, reject) => {
        if (voices.length === 0) {
            voices = window.speechSynthesis.getVoices();
            setTimeout(() => {
                voices = window.speechSynthesis.getVoices();
                return resolve(finder());
            }, 2000);
        } else {
            return resolve(finder());
        }
    });
}

