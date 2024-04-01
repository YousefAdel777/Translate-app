/* eslint-disable react/prop-types */
import Error from "./Error";
import Loading from "./Loading";

const OutputContainer = ({setOutputData, lang, output, swapLang, setSpeechText, isError, isLoading}) => {

    const handleOutputChange = (e) => {
        const {name, value} = e.target;
        setOutputData(prevState => ({...prevState, [name]: value}));
    }

    const handleOutputClick = (e) => {
        const {lang} = e.target.dataset;
        setOutputData(prevState => ({...prevState, lang: lang}));
    }

    return (
    <div className="trnaslate-result basis-1/2 bg-gray-900 p-6 rounded-3xl border-2 border-gray-700 w-full">
        <div className="control-lang">
            <button data-lang="en" className={lang === "en" ? "active" : ""} onClick={handleOutputClick}>English</button>
            <button data-lang="fr" className={lang === "fr" ? "active" : ""} onClick={handleOutputClick}>French</button>
            <div className="select-box">
                <select name="lang" value={lang} onChange={handleOutputChange}>
                    <option value="ar">Arabic</option>
                    <option value="cs">Czech</option>
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="it">Italian</option>
                    <option value="es">Spanish</option>
                    <option value="ru">Russian</option>
                    <option value="tr">Turkish</option>
                </select>
                <img src="/Expand_down.svg" alt="Arrow icon" />
            </div>
            <button className="control-btn ml-auto swap-lang" onClick={swapLang}>
                <img src="/Horizontal_top_left_main.svg" alt="Swap languages icon" />
            </button>
        </div>
        {isLoading ? <Loading /> : isError ? <Error /> : <textarea name="output" value={output} readOnly></textarea>}
        <div className="btn-container">
            <button className="control-btn speak" onClick={() => setSpeechText({text:output, lang:lang, isPlay: true})}>
                <img src="/sound_max_fill.svg" alt="Speaker icon" />
            </button>
            <button className="control-btn copy" onClick={() => navigator.clipboard.writeText(output)}>
                <img src="/Copy.svg" alt="Copy to clipboard icon" />
            </button>
        </div>
    </div>
    )
}

export default OutputContainer;