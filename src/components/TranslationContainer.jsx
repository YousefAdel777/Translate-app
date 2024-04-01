import { useState, useEffect } from "react"
import useFetch from "../hooks/useFetch";
import useTextToSpeech from "../hooks/useTextToSpeech";
import InputContainer from "./InputContainer";
import OutputContainer from "./OutputContainer";

const TranslateContainer = () => {
    const [inputData, setInputData] = useState({
        input: "Hello, how are you ?",
        inputLength: 0,
        lang: "en",
    });

    const [outputData, setOutputData] = useState({
        output: "",
        isLoading: false,
        isError: false,
        lang: "fr",
    });

    const [url, setUrl] = useState(`https://api.mymemory.translated.net/get?q=${inputData.input}&langpair=${inputData.lang}|${outputData.lang}`);

    const [speechText, setSpeechText] = useState({
        lang: "",
        isPlay: false,
        text: "",
    });
    

    const [isLoading, isError, data] = useFetch(url);

    useTextToSpeech(speechText);

    useEffect (() => {
        setOutputData(prevState => ({...prevState, isLoading: isLoading, isError: isError, output: data}));
    }, [isLoading, isError, data]);

    const changeUrl = () => {
        if (inputData.input) {
            setUrl(`https://api.mymemory.translated.net/get?q=${inputData.input}&langpair=${inputData.lang}|${outputData.lang}`);
        }
    }

    const swapLang = () => {
        let temp = {output: inputData.input, lang: inputData.lang};
        setInputData({lang: outputData.lang, input: outputData.output, inputLength: outputData.output.length});
        setOutputData(prevState => ({...prevState, ...temp}));
    }


    return (
        <div className="translation-container flex flex-col items-center gap-4 lg:flex-row">
            <InputContainer {...inputData} setSpeechText={setSpeechText} changeUrl={changeUrl} setInputData={setInputData} />
            <OutputContainer {...outputData} setOutputData={setOutputData} setSpeechText={setSpeechText} swapLang={swapLang} />
        </div>
    )
}

export default TranslateContainer;