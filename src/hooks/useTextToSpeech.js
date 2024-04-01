import {useEffect} from "react"

const useTextToSpeech = (speech) => {
    useEffect(() => {
        if (window.speechSynthesis) {
            const msg = new SpeechSynthesisUtterance();
            msg.text = speech.text || "";
            msg.lang = speech.lang;
            if (speech.isPlay) {
                console.log(msg);
                window.speechSynthesis.speak(msg);
            }
        }
    }, [speech]);
}

export default useTextToSpeech;