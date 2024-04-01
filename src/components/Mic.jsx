/* eslint-disable react/prop-types */
import "regenerator-runtime/runtime"
import SpeechRecognition, { useSpeechRecognition }  from "react-speech-recognition";
import { useEffect } from "react";

const Mic = ({setInputData, lang}) => {
    const {transcript, listening, resetTranscript} = useSpeechRecognition();

    useEffect(() => {
        if (listening && transcript) {
            setInputData(prevState => ({...prevState, input: transcript, inputLength: transcript.length}));
        }
    }, [transcript]);

    const toggleMic = () => {
        if (listening) {
            SpeechRecognition.stopListening();
            resetTranscript();
        } 
        else {
            SpeechRecognition.startListening({continuous: true, language: lang});
        }
    }

    return (
        <button className={listening ? "control-btn mic listening" : "control-btn mic"} onClick={toggleMic}>
            <img src="/mic.svg" alt="Mic icon" />
        </button>
    )
}

export default Mic;